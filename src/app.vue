<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script lang="ts" setup>
import '@fontsource-variable/raleway'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
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
})

useSchemaOrg([
  defineOrganization({
    name: 'Bytewave',
    logo: '/logo.png',
    sameAs: [
      'https://www.facebook.com/bytewaveco',
      'https://www.instagram.com/bytewaveco',
      'https://www.tiktok.com/@bytewaveco',
      'https://linktr.ee/bytewaveco',
      'https://github.com/bytewaveco',
      'https://ko-fi.com/bytewaveco',
      'https://bytewaveco.gumroad.com',
      'https://store.bytewave.co',
    ],
  }),
  defineWebSite({
    name: 'Bytewave of Gillette, WY',
  }),
  defineWebPage({
    canonicalHost: 'https://bytewave.co',
  }),
])

useSeoMeta({
  description:
    'Bytewave is a software company located in Gillette, WY that offers website design, marketing, social media management, SEO optimization, and more.',
  ogTitle: 'Bytewave',
  ogDescription:
    'Bytewave is a software company located in Gillette, WY that offers website design, marketing, social media management, SEO optimization, and more.',
  ogImage: {
    type: 'image/png',
    url: 'https://bytewave.co/android-chrome-512x512.png',
    width: 512,
    height: 512,
  },
  ogUrl: 'https://bytewave.co',
  twitterTitle: 'Bytewave',
  twitterDescription:
    'Bytewave is a software company located in Gillette, WY that offers website design, marketing, social media management, SEO optimization, and more.',
  twitterImage: {
    type: 'image/png',
    url: 'https://bytewave.co/android-chrome-512x512.png',
    width: 512,
    height: 512,
  },
  twitterCard: 'summary',
})
</script>

<style lang="scss">
html,
body {
  margin: 0;
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  color: black;
  background-color: white;
  width: 100%;
  overflow: hidden;
  overflow-y: overlay;

  #__nuxt {
    width: 100%;

    main {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
  }
}

h1 {
  font-size: 3.5rem;
  margin: 0.5rem 0;
}

h2 {
  font-size: 3rem;
  margin: 0.5rem 0;
}

h3 {
  font-size: 2.5rem;
  margin: 0.5rem 0;
}

h4 {
  font-size: 2rem;
  margin: 0.5rem 0;
}

h5 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

h6 {
  font-size: 1.15rem;
  margin: 0.5rem 0;
}

p {
  margin-top: 0;
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 102, 255, 0) rgba(0, 102, 255, 1);
}

*::-webkit-scrollbar {
  width: 4px;
}

*::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0);
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(0, 102, 255, 1);
  border-radius: 0;
  border: none;
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

*:-webkit-autofill,
*:-webkit-autofill:hover,
*:-webkit-autofill:focus,
*:-webkit-autofill:active {
  $box-shadow: 0 0 0 64px white inset !important;
  box-shadow: $box-shadow;
  -webkit-box-shadow: $box-shadow;
}
</style>
