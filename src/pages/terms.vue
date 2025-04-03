<template>
  <section>
    <ContentRenderer v-if="page" :value="page" />
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'document',
})

const { data: page } = await useAsyncData(() =>
  queryCollection('content').path('/terms').first(),
)
</script>
