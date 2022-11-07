<template>
  <section data-testid="main">
    <form @submit.stop.prevent="update">
      <h5>Account</h5>
      <entry-text
        v-model="firstName"
        label="First name"
        placeholder="First name"
        autocomplete="given-name"
        :status-map="{
          default: [[() => true, 'This is public.']],
        }"
        required
      />
      <entry-text
        v-model="lastName"
        label="Last name"
        placeholder="Last name"
        autocomplete="family-name"
        :status-map="{
          default: [[() => true, 'This is public.']],
        }"
        required
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
        :disabled="
          (!firstName.length && firstName !== user.name_first) ||
          (!lastName.length && lastName !== user.name_last) ||
          (!phone.length && phone !== user.phone)
        "
      >
        Update Account
      </entry-button>
    </form>
  </section>
</template>

<script lang="ts" setup>
const user = useUser()
const firstName = ref(user.name_first ?? '')
const lastName = ref(user.name_last ?? '')
const phone = ref(user.phone ?? '')

watch(user, (updatedUser) => {
  if (updatedUser.isLoggedIn && updatedUser.hasCompletedSetup) {
    firstName.value = updatedUser.name_first
    lastName.value = updatedUser.name_last
    phone.value = updatedUser.phone
  }
})

async function update() {
  await user.updateAccount({
    name_first: firstName.value,
    name_last: lastName.value,
    phone: phone.value,
  })
}
</script>
