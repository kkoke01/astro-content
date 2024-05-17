import { defineCollection, z } from 'astro:content';

// 定义要用 schema 验证的每个集合。
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    poster: z.string().url(),
    description: z.string(),
    price: z.string(),
    category: z.string(),
  }),
});
// 导出一个 `collections` 对象来注册你的集合。
export const collections = {
  pages
};
