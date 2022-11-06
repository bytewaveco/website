<template>
  <section
    id="settings"
    data-testid="main"
  >
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
