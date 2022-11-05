import path from 'path'
import autoImport from 'unplugin-auto-import/vite'
import autoComponent from 'unplugin-vue-components/vite'
import { defineConfig } from 'vitest/config'

const r = (p: string) => path.resolve(__dirname, p)

export default defineConfig({
  plugins: [
    autoComponent({
      dts: 'src/types/auto-components-vitest.d.ts',
    }),
    autoImport({
      imports: [
        'vue',
        'vue-router',
        {
          '#imports': ['useTime'],
        },
      ],
      dts: 'src/types/auto-imports-vitest.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '~~': r('.'),
      '~~/*': r('./*'),
      '@@': r('.'),
      '@@/*': r('./*'),
      '~': r('./src'),
      '~/*': r('./src/*'),
      '@': r('./src'),
      '@/*': r('./src/*'),
      assets: r('./src/assets'),
      public: r('./src/public'),
      'public/*': r('./src/public/*'),
      '#app': r('./node_modules/nuxt/dist/app'),
      '#app/*': r('./node_modules/nuxt/dist/app/*'),
      'vue-demi': r('./node_modules/nuxt/dist/app/compat/vue-demi'),
      pinia: r('./node_modules/pinia/dist/pinia'),
      '#head': r('./node_modules/nuxt/dist/head/runtime'),
      '#head/*': r('./node_modules/nuxt/dist/head/runtime/*'),
      '#imports': r('./.nuxt/imports.d'),
      '#build': r('./.nuxt'),
      '#build/*': r('./.nuxt/*'),
      '#components': r('./.nuxt/components.d'),
    },
  },
  test: {
    api: 2999,
    environment: 'happy-dom',
    globals: true,
    deps: {
      inline: [/@nuxt\/test-utils-edge/],
    },
    coverage: {
      provider: 'istanbul',
      exclude: ['**/__mocks__/**'],
    },
  },
})
