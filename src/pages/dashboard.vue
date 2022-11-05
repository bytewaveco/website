<template>
  <section data-testid="main">
    <entry-search />
    <h1 class="hero">Dashboard</h1>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
})

onMounted(() => {
  useToast().warning('TEst')
})
</script>

<style lang="scss" scoped>
section {
  margin: 4rem 0;
}
</style>
