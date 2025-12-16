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
  <UPage v-if="page">
    <UPageBody>
      <ContentRenderer v-if="page.body" :value="page" />
    </UPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <UContentToc
        highlight
        highlight-color="neutral"
        color="neutral"
        class="not-prose"
        :links="page.body.toc.links"
      />
    </template>
  </UPage>
</template>
