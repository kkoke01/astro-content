<template>
  <div>
    <a :href="props.href" :class="{ 'shadow-primary text-primary nav-shadow': isActive }">
      <slot />
    </a>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
const props = defineProps<{
  href: string;
  pathname: string;
}>();

const isActive = computed(() => props.pathname === props.href);
</script>
