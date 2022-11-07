<template>
  <section data-testid="main">
    <template v-if="user.isLoggedIn && user.hasCompletedSetup">
      <h1 class="hero">{{ greeting }}, {{ user.name_first }}</h1>
      <span>Today is {{ time.format('dddd, MMM D') }}</span>
    </template>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
})

const greeting = ref(
  ['Howdy', 'Welcome', 'Hi again', 'Hey there'][Math.floor(Math.random() * 4)]
)
const user = useUser()
const time = useTime()
</script>
