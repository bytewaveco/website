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
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/robots',
    'nuxt-schema-org',
    '@nuxtjs/sitemap',
    'nuxt-posthog',
    '@nuxt/eslint',
    '@nuxt/ui-pro',
  ],
  site: {
    url: 'https://bytewave.co',
    name: 'Bytewave',
  },
  posthog: {
    publicKey: process.env.POSTHOG_API_KEY,
    clientOptions: {
      api_host: '/ingest',
      ui_host: 'https://us.posthog.com',
    },
    disabled: process.env.NODE_ENV === 'development',
  },
  eslint: {
    checker: true,
  },
})
