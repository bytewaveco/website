<template>
  <section data-testid="main">
    <notify-banner v-if="user.isLoggedIn && !user.hasCompletedSetup">
      <p>Please take a moment to complete your profile.</p>
      <nuxt-link to="/settings">Take me there.</nuxt-link>
    </notify-banner>
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
