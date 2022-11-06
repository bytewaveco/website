<template>
  <section data-testid="sub">
    <notify-banner v-if="user.isLoggedIn && !user.hasCompletedSetup">
      <p>Please take a moment to complete your profile using the form below.</p>
    </notify-banner>
    <h5>Account</h5>
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
      <h6>Password Reset</h6>
      <entry-text
        v-model="password"
        label="New password"
        placeholder="New password"
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
          disabled: [[() => password.length < 8, '']],
        }"
      />
      <entry-button
        type="submit"
        :disabled="
          (!firstName.length && firstName !== user.name_first) ||
          (!lastName.length && lastName !== user.name_last) ||
          (!phone.length && phone !== user.phone) ||
          (password.length && !passwordConfirm.length)
        "
      >
        Update
      </entry-button>
    </form>
  </section>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()
const user = useUser()
const firstName = ref(user.name_first ?? '')
const lastName = ref(user.name_last ?? '')
const email = ref(user.email ?? '')
const phone = ref(user.phone ?? '')
const password = ref('')
const passwordConfirm = ref('')
const toast = useToast()

watch(user, (updatedUser) => {
  if (updatedUser.isLoggedIn && updatedUser.hasCompletedSetup) {
    firstName.value = updatedUser.name_first
    lastName.value = updatedUser.name_last
    email.value = updatedUser.email
    phone.value = updatedUser.phone
  }
})

async function update() {
  try {
    if (firstName.value && lastName.value) {
      if (
        password.value.length &&
        passwordConfirm.value.length &&
        password.value === passwordConfirm.value
      ) {
        const { error } = await supabase.auth.updateUser({
          password: password.value,
        })

        if (error) {
          console.error(error)
          toast.error('Password update failed.')
        }
      }

      const { error } = user.hasCompletedSetup
        ? await supabase
            .from('users')
            .update({
              name_first: firstName.value,
              name_last: lastName.value,
              email: email.value,
              phone: phone.value,
              updated_at: useTime().utc().toISOString(),
            })
            .eq('id', user.id)
        : await supabase.from('users').insert({
            id: user.id,
            name_first: firstName.value,
            name_last: lastName.value,
            email: email.value,
            phone: phone.value,
          })

      if (error) {
        console.error(error)
        toast.error('Something went wrong.')
      } else {
        toast.success('Profile updated.')
      }
    }
  } catch (error) {
    console.error(error)
    toast.error('Something went wrong.')
  }
}
</script>

<style lang="scss" scoped>
section {
  margin: 0;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h6 {
      width: 100%;
    }
  }
}
</style>
