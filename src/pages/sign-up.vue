<template>
  <tile-base id="sign-in">
    <form @submit.stop.prevent="signUp">
      <h1 class="hero">Sign up</h1>
      <entry-text
        v-model="email"
        label="Email"
        placeholder="Email"
        autocomplete="email"
      />
      <entry-text
        v-model="password"
        label="Password"
        placeholder="Password"
        type="password"
        autocomplete="new-password"
        :status-map="{
          default: [[() => true, 'Password must be at least 8 characters.']],
          success: [[() => password.length > 8, 'Your password is strong.']],
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
              () => passwordConfirm.length && passwordConfirm !== password,
              'Passwords must match.',
            ],
          ],
          success: [
            [
              () => passwordConfirm.length && passwordConfirm === password,
              'Passwords match!',
            ],
          ],
        }"
      />
      <entry-button type="submit">Sign up</entry-button>
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
const supabase = useSupabaseClient()

async function signUp() {
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })

  if (error) {
    console.error(error)
  }
}
</script>

<style lang="scss" scoped>
#sign-in {
  width: calc(100% - 4rem);
  height: calc(100% - 10rem);
  padding: 3rem 0;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: calc(100% - 4rem);

    h1 {
      width: 100%;
    }
  }
}
</style>
