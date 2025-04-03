import path from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-14',
  telemetry: { enabled: false },
  devtools: { enabled: true, telemetry: false },
  srcDir: 'src',
  css: ['~/assets/css/main.css'],
  routeRules: {
    '/privacy': { prerender: true },
    '/terms': { prerender: true },
    '/': { prerender: true },
  },
  app: {
    head: {
      title: 'Bytewave of Gillette, WY',
      meta: [
        {
          name: 'description',
          content:
            'Bytewave is a software company located in Gillette, WY that offers website design, marketing, social media management, SEO optimization, and more.',
        },
      ],
    },
  },
  hooks: {
    'imports:dirs': (dirs: string[]) => {
      dirs.push(path.resolve(__dirname, 'src/stores'))
    },
  },
  runtimeConfig: {
    public: {
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
      isAnalyticsEnabled: process.env.ANALYTICS_ENABLED === 'true',
    },
  },
  modules: [
    '@nuxtjs/robots',
    '@nuxt/content',
    'nuxt-schema-org',
    '@nuxt/ui-pro',
    '@nuxt/image',
    '@nuxt/eslint',
  ],
})
