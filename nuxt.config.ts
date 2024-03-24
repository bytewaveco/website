import path from 'path'

export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src',
  nitro: {
    preset: 'vercel-edge',
  },
  runtimeConfig: {
    public: {
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
      isAnalyticsEnabled: process.env.ANALYTICS_ENABLED === 'true',
    },
  },
  app: {
    head: {
      title: 'Bytewave of Gillette, WY',
      meta: [
        {
          name: 'description',
          content:
            /* eslint-disable-next-line max-len */
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
  modules: ['@nuxt/content', '@nuxtjs/robots', 'nuxt-schema-org', '@unocss/nuxt'],
  telemetry: false,
  devtools: { enabled: true, telemetry: false },
})
