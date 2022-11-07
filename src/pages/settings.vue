<template>
  <section
    id="settings"
    data-testid="main"
  >
    <h3>Settings</h3>
    <notify-banner v-if="user.isLoggedIn && !user.hasCompletedSetup">
      <p>Please take a moment to complete your profile using the form below.</p>
    </notify-banner>
    <settings-account />
    <notify-banner v-if="user.hasRequestedPasswordReset">
      <p>
        It looks like you're having trouble signing in. Please reset your password using
        the form below.
      </p>
    </notify-banner>
    <settings-password-reset />
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
  layout: 'dashboard',
})

const user = useUser()
</script>

<style lang="scss" scoped>
:deep(form) {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h5 {
    width: 100%;
  }
}
</style>
