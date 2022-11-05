<template>
  <section data-testid="dashboard-main">
    <h1 class="hero">Account Settings</h1>
    <p v-if="!user.user">Please take a moment to complete your profile.</p>
    <form @submit.stop.prevent="update">
      <entry-text
        v-model="firstName"
        label="First name"
        placeholder="First name"
        autocomplete="given-name"
      />
      <entry-text
        v-model="lastName"
        label="Last name"
        placeholder="Last name"
        autocomplete="family-name"
      />
      <entry-text
        v-model="email"
        label="Email"
        placeholder="Email"
        autocomplete="current-email"
        :status-map="{
          disabled: [[() => true, '']],
        }"
      />
      <entry-text
        v-model="phone"
        label="Phone number"
        placeholder="Phone number"
        autocomplete="tel"
        disabled
      />
      <entry-button
        type="submit"
        :disabled="!firstName.length || !lastName.length"
      >
        Update
      </entry-button>
    </form>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
  layout: 'dashboard',
})

const supabase = useSupabaseClient()
const supabaseUser = useSupabaseUser()
const user = useUser()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')

if (supabaseUser.value) {
  email.value = supabaseUser.value.email
}

if (user.user) {
  firstName.value = user.user.name_first
  lastName.value = user.user.name_last
  phone.value = user.user.phone
}

async function update() {
  if (firstName.value && lastName.value) {
    const { error } = user.user
      ? await supabase
          .from('users')
          .update({
            name_first: firstName.value,
            name_last: lastName.value,
            email: email.value,
            phone: phone.value,
          })
          .eq('id', user.user.id)
      : await supabase.from('users').insert({
          id: supabaseUser.value.id,
          name_first: firstName.value,
          name_last: lastName.value,
          email: email.value,
          phone: phone.value,
        })

    if (error) {
      console.error(error)
    } else {
      user.sync()
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  width: calc(100% - 2rem);
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
</style>
