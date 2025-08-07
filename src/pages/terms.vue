<script setup>
definePageMeta({
  layout: 'document',
})

const { data: page } = await useAsyncData(() =>
  queryCollection('content').path('/terms').first(),
)

useSeoMeta({
  title: 'Terms of Use — Bytewave',
  ogTitle: 'Terms of Use — Bytewave',
  description:
    'Read Bytewave’s Terms of Use governing our websites and services.',
  ogDescription:
    'Read Bytewave’s Terms of Use governing our websites and services.',
  ogSiteName: 'Bytewave',
})
</script>

<template>
  <section>
    <ContentRenderer v-if="page" :value="page" />
  </section>
</template>
