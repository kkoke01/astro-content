<template>
  <div mt-2rem flex justify-center gap-x-2rem bg-white py-1rem>
    <NavLink font-medium :href="`/${pathLanguage}/products`" :pathname="pathname">{{
      t.components.productHeader.allProducts
    }}</NavLink>
    <NavLink font-medium :href="`/${pathLanguage}/products/category1`" :pathname="pathname">{{
      t.components.productHeader.category1
    }}</NavLink>
    <NavLink font-medium :href="`/${pathLanguage}/products/category2`" :pathname="pathname"
      >{{ t.components.productHeader.category2 }}
    </NavLink>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from '~/composables/use-i18n';

import NavLink from '~/components/NavLink.vue';

const props = defineProps<{
  pathname: string;
}>();

const { t, pathLanguage } = useI18n(props.pathname);
</script>
