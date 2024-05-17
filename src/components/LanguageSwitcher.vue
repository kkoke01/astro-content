<template>
  <div relative inline-block>
    <button
      type="button"
      inline-flex
      items-center
      justify-center
      gap-x-1
      rounded-md
      bg-white
      p-0.5rem
      hover:bg-gray-50
      aria-expanded="true"
      aria-haspopup="true"
      @click="toggleDropdown"
    >
      <i-ri-translate-2 w-1rem h-1rem />
      <i-ri-arrow-down-s-line />
    </button>
    <Transition
      enter-active-class="transition ease-out duration-100"
      leave-active-class="transition ease-in duration-75"
    >
      <div
        v-if="showDropdown"
        absolute
        right-0
        z-10
        mt-2
        w-8rem
        origin-top-right
        bg-white
        shadow-lg
        ring-1
        ring-black
        ring-opacity-5
        focus:outline-none
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <a
          v-for="(option, index) in allowedLanguage"
          :key="index"
          :href="`/${option.code}/${pathnameWithoutLanguage}`"
          block
          cursor-pointer
          p-2
          hover:bg-gray-100
          active:bg-primary
          active:text-white
          active:border-b-0
        >
          <div flex items-center gap-4 text-sm>
            <span>
              {{ option.flag }}
            </span>
            <span>
              {{ option.label }}
            </span>
          </div>
        </a>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { allowedLanguage } from '~/i18n';

defineProps<{
  pathnameWithoutLanguage?: string;
}>();

const showDropdown = ref(false);
function toggleDropdown(event: Event) {
  showDropdown.value = !showDropdown.value;
  if (showDropdown.value) {
    document.addEventListener('click', toggleDropdown);
  } else {
    document.removeEventListener('click', toggleDropdown);
  }
  event.stopPropagation();
  // event.preventDefault();
  return false;
}
</script>
