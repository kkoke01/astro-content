# 1.概述
本模板使用[Astro](https://docs.astro.build/zh-cn/concepts/why-astro/)制作如以Markdown为主的博客，商品展示，作品集展示的静态网站，[UnoCSS](https://unocss.dev/)作为样式库。
# 2.开发环境准备
<strong style="color:yellow">推荐使用vs code进行开发，使用pnpm来管理依赖。</strong>

- 使用pnpm 安装项目依赖
```
pnpm install
```
- 启动项目
```
pnpm dev
```

# 3.核心目录结构
1. `src/components/`：[组件](https://docs.astro.build/zh-cn/basics/astro-components/)，可以为`.astro`，或像`React`或`Vue`这样的UI框架组件。
> 当前项目没有使用`React`组件，如有
>
> Astro框架提供的API [`Astro` global](https://docs.astro.build/zh-cn/reference/api-reference/#astro-global)仅在`.astro`中可用，不可用于`.vue`组件，但可以通过[组件传参](https://docs.astro.build/zh-cn/basics/astro-components/#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)的形式将参数从`.astro`传递给其他框架的组件。
```vue
## src/components/PageHeader.vue

<script lang="ts" setup>
// 定义要接收的参数
const props = defineProps<{
  pathname: string;
}>();
</script>
```

```js
## src/layouts/PageLayout.astro

---
// 获取当前路径名
const pathname = Astro.url.pathname;
---
<html lang={pathLanguage}>
  <body>
    {/* 将pathname作为参数传递给PageHeader */}
    <PageHeader client:load pathname={pathname} />
  </body>
</html>
```
2. `src/composables/`：可重用的函数。
3.  `src/contents/`：[内容集合](https://docs.astro.build/zh-cn/guides/content-collections/)，在Astro中是管理内容的最好方式。在该路径下创建`config.ts`用于定义集合schema，可以在引用或查询集合中的内容时确保`.md`，`.mdx`中的frontmatter以可预测的形式存在。
4. `src/i18n/`：多语言资源。
5. `src/layouts`：[页面布局](https://docs.astro.build/zh-cn/basics/layouts/)。
6. `src/pages`：[页面](https://docs.astro.build/zh-cn/basics/astro-pages/)，Astro会为该路径下的每个文件创建路由。

# 4.多语言
## 4.1 添加一门新的语言
1. 在`src/i18n/resources`中配置新语言的资源
2. 在`src/i18n/index.ts`中将其添加为`allowedLanguage`
3. 在`src/components/GoogleFont.astro`中为其配置字体库
## 4.2 在页面或组件中呈现多语言资源
在页面或组件中使用`src/use-i18n.ts`中导出的`t`函数对已经定义的词句进行插值。
```js
## src/pages/404.astro

---
import PageLayout from '~/layouts/PageLayout.astro';
import { useI18n } from '~/composables/use-i18n';

const pathname = Astro.url.pathname;
const { t } = useI18n(pathname);
---
// 使用页面布局
<PageLayout>
  <div flex justify-center py-2rem>
    {/* 对应目标语言 */}
    <h1>{t.pages.notFound.word}</h1>
  </div>
</PageLayout>

```
# 5.在页面中获取并渲染`src/contents/`下的内容
1. 在`src/content/`下为每种语言的内容创建子目录
2. 在`src/content/confid.ts`中为集合定义schema，并导出对应的内容集合
```ts
import { defineCollection, z } from 'astro:content';

// 定义要用 schema 验证的集合。
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    poster: z.string().url(),
    ...
  }),
});
// 导出一个 `collections` 对象来注册你的集合。
export const collections = {
  pages,
};
```
3. 使用`getCollection`查询集合并返回所有内容条目
```ts
## src/composables/use-pages.ts

import { getCollection } from 'astro:content';

export const usePages = async () => {
  // 获取集合中的所有条目，需要集合的命名作为参数
  const pages = await getCollection('pages');
  return pages;
};
```
4. 使用[动态路由](https://docs.astro.build/zh-cn/guides/routing/#%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1)，基于`[language]`和`[slug]`参数获取并渲染内容。

> 在静态模式（SSG）下，必须在构建时确定所有路由，所以使用动态路由的页面必须导出一个[`getStaticPaths()`](https://docs.astro.build/zh-cn/reference/api-reference/#getstaticpaths)函数，其返回一个具有`params`属性的对象数组，以确定哪些路径会被Astro预渲染。

``` js
## src/pages/[language]/[slug].astro

---
import { usePages } from '~/composables/use-pages';
import ContentLayout from '~/layouts/ContentLayout.astro';

// 1. 为每个集合条目生成一个新路径
export async function getStaticPaths() {
  const pages = await usePages();

  return pages.map((page) => {
    const parts = page.slug.split('/');
    // 从page.slug提取路由的语言部分
    const language = parts.shift();
    // 重新组合slug
    const slug = parts.join('/');
    return {
      // 路径参数
      params: { language, slug },
      props: { page },
    };
  });
}
// 2. 当渲染的时候，你可以直接从属性中得到条目
const { page } = Astro.props;
const { Content } = await page.render();
---
// 使用内容布局
<ContentLayout title={page.data.title}>
  {/* 渲染内容 */}
  <Content />
</ContentLayout>
```
# 6.编译与部署
- 使用`pnpm build`构建和预渲染应用程序，该命令将在项目根路径下生成`dist`目录
```shell
pnpm generate
```
- 使用`serve`在当前目录下的`dist`目录中启动静态文件服务器，以便在浏览器中访问
```shell
serve dist
```