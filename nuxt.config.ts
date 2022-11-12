import path from 'path'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src',
  typescript: {
    shim: false,
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
          rel: 'icon',
          type: 'image/x-icon',
          sizes: 'any',
          href: '/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
      ],
    },
  },
  hooks: {
    'imports:dirs': (dirs: string[]) => {
      dirs.push(path.resolve(__dirname, 'src/stores'))
    },
  },
  modules: ['nuxt-icon', '@nuxt/content'],
})
