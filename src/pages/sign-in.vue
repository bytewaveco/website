<template>
  <tile-base id="sign-in">
    <form @submit.stop.prevent="signIn">
      <h1 class="hero">Sign in</h1>
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
        autocomplete="current-password"
      />
      <entry-button type="submit">Sign in</entry-button>
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

const email = ref('')
const password = ref('')
const supabase = useSupabaseClient()

async function signIn() {
  const { error } = await supabase.auth.signInWithPassword({
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
