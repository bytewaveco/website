<template>
  <tile-base>
    <form @submit.stop.prevent="signUp">
      <h1 class="hero">Sign up</h1>
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
        autocomplete="new-password"
        :status-map="{
          default: [[() => true, 'Password must be at least 8 characters.']],
          success: [[() => isPasswordValid, 'Your password is strong.']],
        }"
      />
      <entry-text
        v-model="passwordConfirm"
        label="Confirm password"
        placeholder="Confirm password"
        type="password"
        autocomplete="off"
        :status-map="{
          error: [
            [
              () => isPasswordValid && passwordConfirm !== password,
              'Passwords must match.',
            ],
          ],
          success: [
            [() => isPasswordValid && passwordConfirm === password, 'Passwords match!'],
          ],
        }"
      />
      <entry-button
        type="submit"
        :disabled="!isEmailValid || !isPasswordValid || password !== passwordConfirm"
      >
        Sign up
      </entry-button>
    </form>
    <p>Already have an account? <nuxt-link to="/sign-in">Sign in.</nuxt-link></p>
  </tile-base>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['unauth'],
  layout: 'sign-in',
})

const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const isEmailValid = ref<boolean | null>(null)
const isPasswordValid = ref<boolean | null>(null)
const emailValidator = useEmailValidator()
const passwordValidator = usePasswordValidator()
const user = useUser()

watch(email, (updatedEmailValue) => {
  isEmailValid.value = emailValidator.validate(updatedEmailValue)
})

watch(password, (updatedPasswordValue) => {
  isPasswordValid.value = passwordValidator.validate(updatedPasswordValue)
})

async function signUp() {
  if (
    isEmailValid.value &&
    isPasswordValid.value &&
    password.value === passwordConfirm.value
  ) {
    user.signUp(email.value, password.value)
  }
}
</script>
