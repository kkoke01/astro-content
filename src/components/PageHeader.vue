<template>
  <header absolute inset-x-0 top-0 z-50 bg-white shadow>
    <nav flex items-center justify-between gap-x-6 p-6 lg:px-8>
      <div flex lg:flex-1>
        <NavLink :href="`/${pathLanguage}`" :pathname="pathname" hover:border-0>
          <img h-10 object-contain src="https://dummyimage.com/100x50/ffffff/1100ff.png&text=LOGO" />
        </NavLink>
      </div>
      <div hidden lg:flex lg:items-center lg:gap-x-2rem>
        <!-- <a :href="`/${pathLanguage}/about`"> {{ t.components.pageHeader.aboutUs }} </a> -->
        <NavLink :href="`/${pathLanguage}/products`" :pathname="pathname">
          {{ t.components.pageHeader.allProducts }}
        </NavLink>
        <div inline-block h-1rem w-1px bg-gray-200 dark:bg-white-divided-by-10></div>
        <LanguageSwitcher :pathname-without-language="pathnameWithoutLanguage" />
      </div>
      <div flex items-center gap-0.5rem lg:hidden>
        <LanguageSwitcher :pathname-without-language="pathnameWithoutLanguage" />
        <div inline-block h-1rem w-px bg-gray-200 dark:bg-white-divided-by-10></div>
        <button
          type="button"
          inline-flex
          items-center
          justify-center
          rounded-md
          bg-white
          p-0.5rem
          hover:bg-gray-50
          @click="toggleMobileNavbar(true)"
        >
          <i-ri-menu-line h-1rem w-1rem></i-ri-menu-line>
        </button>
      </div>
    </nav>
    <!-- 手机抽屉菜单 -->
    <div v-if="showMobileNavbar">
      <div fixed inset-0 z-50></div>
      <div fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6>
        <div flex items-center justify-between>
          <button
            type="button"
            inline-flex
            items-center
            justify-center
            rounded-md
            bg-white
            p-0.5rem
            hover:bg-gray-50
            @click="toggleMobileNavbar(false)"
          >
            <i-ri-close-line h-1.5rem w-1.5rem></i-ri-close-line>
          </button>
        </div>
        <div flex flex-col gap-1rem py-1rem>
          <!-- <a :href="`/${pathLanguage}/about`"> {{ t.components.pageHeader.aboutUs }} </a> -->
          <a :href="`/${pathLanguage}/products`"> {{ t.components.pageHeader.allProducts }} </a>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

import LanguageSwitcher from '~/components/LanguageSwitcher.vue';
import NavLink from '~/components/NavLink.vue';
import { useI18n } from '~/composables/use-i18n';

const props = defineProps<{
  pathname: string;
}>();

const { t, pathLanguage, pathnameWithoutLanguage } = useI18n(props.pathname);
const showMobileNavbar = ref(false);
function toggleMobileNavbar(show: boolean): void {
  showMobileNavbar.value = show;
}
</script>
