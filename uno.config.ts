// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetTagify, presetTypography, presetUno } from 'unocss';

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno(), presetAttributify(), presetIcons(), presetTagify(), presetTypography()],
  rules: [
    [
      'nav-shadow',
      {
        'box-shadow': '0 4px 0',
      },
    ],
  ],
  theme: {
    colors: {
      primary: 'rgb(99,102,241)',
      'primary-50': 'rgb(214, 218, 251)',
      'primary-100': 'rgb(187, 194, 247)',
      'primary-200': 'rgb(150, 160, 242)',
      'primary-300': 'rgb(101, 113, 234)',
      'primary-400': 'rgb(41, 58, 218)',
      'primary-500': 'rgb(99, 102, 241)', /* 新的主颜色 */
      'primary-600': 'rgb(73, 77, 211)',
      'primary-700': 'rgb(60, 62, 180)',
      'primary-800': 'rgb(48, 49, 150)',
      'primary-900': 'rgb(37, 38, 124)',
      'primary-950': 'rgb(20, 21, 79)',
      'surface-0': 'rgb(255, 255, 255)',
      'surface-50': 'rgb(248, 250, 252)',
      'surface-100': 'rgb(241, 245, 249)',
      'surface-200': 'rgb(226, 232, 240)',
      'surface-300': 'rgb(203, 213, 225)',
      'surface-400': 'rgb(148, 163, 184)',
      'surface-500': 'rgb(100, 116, 139)',
      'surface-600': 'rgb(71, 85, 105)',
      'surface-700': 'rgb(45, 55, 72)',
      'surface-800': 'rgb(30, 41, 59)',
      'surface-900': 'rgb(15, 23, 42)',
      'surface-950': 'rgb(3, 6 23)',
    },
  },
});
