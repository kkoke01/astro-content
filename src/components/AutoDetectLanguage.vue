<template><div></div></template>
<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useI18n } from '~/composables/use-i18n';

const props = defineProps<{
  pathname: string;
}>();

const { browserLanguage, pathLanguage, pathnameWithoutLanguage } = useI18n(props.pathname);
onBeforeMount(() => {
  // 如果无法从pathname中获取到语言，则使用浏览器语言
  if (pathLanguage === undefined) {
    const target = `/${browserLanguage}/${pathnameWithoutLanguage}`;
    console.log(`需要跳转到: ${target}, 当前语言 ${pathLanguage}, 浏览器语言 ${browserLanguage}`);
    window.location.href = target;
  } else {
    console.log(`无需跳转, 当前语言 ${pathLanguage}`);
  }
});
</script>
