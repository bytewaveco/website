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
      title: 'The Show Portal',
      meta: [
        {
          name: 'description',
          content: '',
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
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [['defineStore', 'definePiniaStore']],
      },
    ],
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    'nuxt-icon',
  ],
})
