<script setup>
const route = useRoute()

const siteUrl = 'https://bytewave.co'
const currentPath = route.path || '/'
const normalizedPath =
  currentPath !== '/' && currentPath.endsWith('/')
    ? currentPath.slice(0, -1)
    : currentPath
const canonicalUrl =
  normalizedPath === '/' ? siteUrl : `${siteUrl}${normalizedPath}`

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
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', sizes: 'any' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'canonical', href: canonicalUrl },
  ],
}))

useSchemaOrg([
  defineLocalBusiness({
    '@type': 'ProfessionalService',
    name: 'Bytewave',
    description:
      'Bytewave is a software company located in Gillette, WY. We offer website design, marketing, social media management, SEO optimization, Software Development, and more.',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
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
    url: siteUrl,
  }),
])

useSeoMeta({
  description:
    'Bytewave is a software company located in Gillette, WY. We offer website design, marketing, social media management, SEO optimization, Software Development, and more.',
  ogTitle: 'Bytewave of Gillette, WY. Your Digital Marketing Team.',
  ogDescription:
    'Bytewave is a software company located in Gillette, WY. We offer website design, marketing, social media management, SEO optimization, Software Development, and more.',
  ogType: 'website',
  ogImage: {
    type: 'image/png',
    url: 'https://bytewave.co/social-card.png',
    width: 1200,
    height: 675,
  },
  ogUrl: canonicalUrl,
  twitterTitle: 'Bytewave of Gillette, WY. Your Digital Marketing Team.',
  twitterDescription:
    'Bytewave is a software company located in Gillette, WY. We offer website design, marketing, social media management, SEO optimization, Software Development, and more.',
  twitterImage: {
    type: 'image/png',
    url: 'https://bytewave.co/social-card.png',
    width: 1200,
    height: 675,
  },
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="prose max-w-full! prose-neutral lg:prose-xl">
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>
