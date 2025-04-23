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
  nitro: {
    routeRules: {
      '/ingest/static/**': {
        proxy: 'https://us-assets.i.posthog.com/static/**',
      },
      '/ingest/**': { proxy: 'https://us.i.posthog.com/**' },
    },
  },
  app: {
    head: {
      title: 'Bytewave of Gillette, WY. Your Digital Marketing Team.',
      meta: [
        {
          name: 'description',
          content:
            'Bytewave is a software company located in Gillette, WY. We offer website design, marketing, social media management, SEO optimization, Software Development, and more.',
        },
      ],
    },
  },
  colorMode: {
    preference: 'light',
  },
  modules: [
    '@vueuse/nuxt',
    'nuxt-posthog',
    '@nuxtjs/robots',
    '@nuxt/content',
    'nuxt-schema-org',
    '@nuxt/ui-pro',
    '@nuxt/image',
    '@nuxt/eslint',
  ],
  posthog: {
    publicKey: process.env.POSTHOG_API_KEY,
    clientOptions: {
      api_host: 'https://bytewave.co/ingest',
      ui_host: 'https://us.posthog.com',
    },
    disabled: process.env.NODE_ENV === 'development',
  },
  eslint: {
    checker: true,
  },
})
