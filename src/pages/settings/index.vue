<template>
  <section data-testid="dashboard-main">
    <h1 class="hero">Settings</h1>
    <nuxt-link to="/settings/account">Account</nuxt-link>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
  layout: 'dashboard',
})
</script>

<style lang="scss" scoped></style>
