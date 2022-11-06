<template>
  <tile-base>
    <form @submit.stop.prevent="sendPasswordResetLink">
      <h1 class="hero">Account recovery</h1>
      <entry-text
        v-model="email"
        label="Email"
        placeholder="Email"
        autocomplete="email"
        :status-map="{
          error: [[() => isEmailValid === false, 'Please enter a valid email.']],
        }"
      />
      <entry-button
        type="submit"
        :disabled="!email.length || !isEmailValid"
      >
        Send password reset link
      </entry-button>
    </form>
    <p>Remember your password? <nuxt-link to="/sign-in">Sign in.</nuxt-link></p>
  </tile-base>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['unauth'],
  layout: 'sign-in',
})

const email = ref('')
const emailValidator = useEmailValidator()
const supabase = useSupabaseClient()
const toast = useToast()
const isEmailValid = ref<boolean | null>(null)

watch(email, (newEmail) => {
  isEmailValid.value = emailValidator.validate(newEmail)
})

async function sendPasswordResetLink() {
  if (email.value.length) {
    await supabase.auth.resetPasswordForEmail(email.value, {
      redirectTo: `${window.location.origin}/settings`,
    })

    toast.success('Please check your email for account recovery instructions.')
  }
}
</script>
