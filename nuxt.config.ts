import path from 'path'

export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src',
  typescript: {
    shim: false,
  },
  nitro: {
    preset: 'vercel-edge',
  },
  app: {
    head: {
      title: 'Bytewave of Sheridan, WY',
      meta: [
        {
          name: 'description',
          content:
            /* eslint-disable-next-line max-len */
            'Bytewave is a software company located in Sheridan, WY that offers website design, marketing, social media management, SEO optimization, and more.',
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },

        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
      ],
    },
  },
  schemaOrg: {
    canonicalHost: 'https://bytewave.co',
  },
  hooks: {
    'imports:dirs': (dirs: string[]) => {
      dirs.push(path.resolve(__dirname, 'src/stores'))
    },
  },
  modules: ['nuxt-icon', '@nuxt/content', '@nuxtjs/robots', 'nuxt-schema-org'],
  telemetry: false,
})
