<template>
  <tile-base>
    <form @submit.stop.prevent="signIn">
      <h1 class="hero">Sign in</h1>
      <entry-text
        v-model="email"
        label="Email"
        placeholder="Email"
        autocomplete="email"
        :status-map="{
          error: [[() => isEmailValid === false, 'Please enter a valid email.']],
        }"
      />
      <entry-text
        v-model="password"
        label="Password"
        placeholder="Password"
        type="password"
        autocomplete="current-password"
      />
      <entry-button
        type="submit"
        :disabled="!isEmailValid || !isPasswordValid"
      >
        Sign in
      </entry-button>
    </form>
    <p>Trouble signing in? <nuxt-link to="/recovery">Account recovery.</nuxt-link></p>
    <p>Don't have an account? <nuxt-link to="/sign-up">Sign up!</nuxt-link></p>
  </tile-base>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['unauth'],
  layout: 'sign-in',
})

const user = useUser()
const email = ref('')
const password = ref('')
const emailValidator = useEmailValidator()
const passwordValidator = usePasswordValidator()
const isEmailValid = ref<boolean | null>(null)
const isPasswordValid = ref<boolean | null>(null)

watch(email, (newEmail) => {
  isEmailValid.value = emailValidator.validate(newEmail)
})

watch(password, (newPassword) => {
  isPasswordValid.value = passwordValidator.validate(newPassword)
})

async function signIn() {
  if (isEmailValid && isPasswordValid) {
    await user.signIn(email.value, password.value)
  }
}
</script>
