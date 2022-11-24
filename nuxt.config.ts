import path from "path";

export default defineNuxtConfig({
  ssr: true,
  srcDir: "src",
  typescript: {
    shim: false,
  },
  app: {
    head: {
      title: "Bytewave of Sheridan, WY",
      meta: [
        {
          name: "description",
          content:
            /* eslint-disable-next-line max-len */
            "Bytewave is a software company located in Sheridan, WY that offers website design, marketing, social media management, SEO optimization, and more.",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          sizes: "any",
          href: "/favicon.ico",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
    },
  },
  schemaOrg: {
    canonicalHost: 'https://bytewave.co',
  },
  hooks: {
    "imports:dirs": (dirs: string[]) => {
      dirs.push(path.resolve(__dirname, "src/stores"));
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxt/content",
    "@nuxtjs/robots",
    "nuxt-schema-org",
  ],
  buildModules: [
    "@nuxtjs/web-vitals",
  ]
});
