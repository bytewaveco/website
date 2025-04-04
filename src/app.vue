<template>
  <div class="!max-w-full prose lg:prose-xl prose-neutral">
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>

<script lang="ts" setup>
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
