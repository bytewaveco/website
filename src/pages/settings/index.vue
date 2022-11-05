<template>
  <section
    id="settings"
    data-testid="main"
  >
    <entry-search />
    <h3>Settings</h3>
    <settings-account />
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
  layout: 'dashboard',
})
</script>

<style lang="scss" scoped>
#settings {
  margin: 4rem 0 0;
}
</style>
