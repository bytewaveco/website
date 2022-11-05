<template>
  <section data-testid="main">
    <entry-search />
    <h3>Events</h3>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
})
</script>

<style lang="scss" scoped>
section {
  margin: 4rem 0 0;
}
</style>
