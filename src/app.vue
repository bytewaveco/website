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
const route = useRoute()

useHead(() => ({
  htmlAttrs: {
    lang: 'en',
  },
  title: 'Bytewave of Gillette, WY. Your Digital Marketing Team.',
  meta: [
    {
      name: 'description',
      content:
        'Bytewave is a software company located in Gillette, WY. We offer website design, marketing, social media management, SEO optimization, Software Development, and more.',
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
    {
      rel: 'canonical',
      href: `https://bytewave.co${route.path}`,
    },
  ],
}))

useSchemaOrg([
  defineLocalBusiness({
    '@type': 'ProfessionalService',
    name: 'Bytewave',
    description:
      'Bytewave is a software company located in Gillette, WY. We offer website design, marketing, social media management, SEO optimization, Software Development, and more.',
    url: 'https://bytewave.co',
    logo: '/logo.png',
    sameAs: [
      'https://trbo.link',
      'https://www.facebook.com/bytewaveco',
      'https://www.instagram.com/bytewaveco',
      'https://www.tiktok.com/@bytewaveco',
      'https://linktr.ee/bytewaveco',
      'https://trbo.link/at/bytewaveco',
      'https://github.com/bytewaveco',
      'https://ko-fi.com/bytewaveco',
      'https://bytewaveco.gumroad.com',
      'https://store.bytewave.co',
    ],
    address: {
      streetAddress: '1306 Small Ct',
      addressLocality: 'Gillette',
      addressRegion: 'WY',
      postalCode: '82718',
      addressCountry: 'US',
    },
  }),
  defineWebSite({
    name: 'Bytewave of Gillette, WY. Your Digital Marketing Team.',
    url: 'https://bytewave.co',
  }),
  defineWebPage({
    canonicalHost: 'https://bytewave.co',
  }),
])

useSeoMeta({
  description:
    'Bytewave is a software company located in Gillette, WY. We offer website design, marketing, social media management, SEO optimization, Software Development, and more.',
  ogTitle: 'Bytewave of Gillette, WY. Your Digital Marketing Team.',
  ogDescription:
    'Bytewave is a software company located in Gillette, WY. We offer website design, marketing, social media management, SEO optimization, Software Development, and more.',
  ogImage: {
    type: 'image/png',
    url: 'https://bytewave.co/android-chrome-512x512.png',
    width: 512,
    height: 512,
  },
  ogUrl: 'https://bytewave.co',
  twitterTitle: 'Bytewave of Gillette, WY. Your Digital Marketing Team.',
  twitterDescription:
    'Bytewave is a software company located in Gillette, WY. We offer website design, marketing, social media management, SEO optimization, Software Development, and more.',
  twitterImage: {
    type: 'image/png',
    url: 'https://bytewave.co/android-chrome-512x512.png',
    width: 512,
    height: 512,
  },
  twitterCard: 'summary',
})
</script>
