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
