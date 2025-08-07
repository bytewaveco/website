<script setup>
definePageMeta({
  layout: 'document',
})

const { data: page } = await useAsyncData(() =>
  queryCollection('content').path('/privacy').first(),
)

useSeoMeta({
  title: 'Privacy Policy — Bytewave',
  ogTitle: 'Privacy Policy — Bytewave',
  description:
    'Read Bytewave’s Privacy Policy to understand how we collect, use, and protect your information.',
  ogDescription:
    'Read Bytewave’s Privacy Policy to understand how we collect, use, and protect your information.',
  ogSiteName: 'Bytewave',
})
</script>

<template>
  <section>
    <ContentRenderer v-if="page" :value="page" />
  </section>
</template>
