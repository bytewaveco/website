export default defineNuxtConfig({
  compatibilityDate: '2025-01-14',
  telemetry: { enabled: false },
  devtools: { enabled: true, telemetry: false },
  srcDir: 'src',
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://bytewave.co',
    name: 'Bytewave',
  },
  dir: {
    public: 'src/public',
  },
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
  sitemap: {
    autoI18n: false,
    strictNuxtContentPaths: true,
    credits: false,
    xsl: false,
    exclude: ['/ingest/**'],
    defaults: {
      changefreq: 'monthly',
      priority: 0.5,
    },
  },
  robots: {
    allow: ['/'],
    disallow: ['/ingest/'],
    sitemap: 'https://bytewave.co/sitemap.xml',
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
