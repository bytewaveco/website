import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
} from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons(), presetTypography()],
  theme: {
    colors: {
      blue: '#0066ff',
    },
  },
})
