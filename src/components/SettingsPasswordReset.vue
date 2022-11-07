<template>
  <section data-testid="main">
    <form @submit.stop.prevent="update">
      <h5>Password Reset</h5>
      <entry-text
        v-model="email"
        label="Email"
        placeholder="Email"
        type="email"
        autocomplete="username"
        :status-map="{
          disabled: [[() => true, 'We do not support changing your email at this time.']],
        }"
      />
      <entry-text
        v-model="password"
        label="New password"
        placeholder="New password"
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
              () => passwordConfirm.length && passwordConfirm !== password,
              'Passwords must match.',
            ],
          ],
          success: [
            [() => isPasswordValid && passwordConfirm === password, 'Passwords match!'],
          ],
          disabled: [
            [
              () => !isPasswordValid,
              'Please enter a valid new password to enable this field.',
            ],
          ],
        }"
      />
      <entry-button
        type="submit"
        :disabled="
          !password.length || !passwordConfirm.length || password !== passwordConfirm
        "
      >
        Update Password
      </entry-button>
    </form>
  </section>
</template>

<script lang="ts" setup>
const user = useUser()
const email = ref(user.email ?? '')
const password = ref('')
const passwordConfirm = ref('')
const isPasswordValid = ref<boolean | null>(null)
const passwordValidator = usePasswordValidator()

user.$subscribe(() => {
  if (user.isLoggedIn) {
    email.value = user.email
  }
})

watch(password, (updatedPasswordValue) => {
  isPasswordValid.value = passwordValidator.validate(updatedPasswordValue)
})

async function update() {
  if (
    password.value.length &&
    passwordConfirm.value.length &&
    password.value === passwordConfirm.value
  ) {
    await user.updatePassword(password.value)
  }
}
</script>
