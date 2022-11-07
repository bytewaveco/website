<template>
  <main data-testid="main">
    <notify-toast-area />
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </main>
</template>

<script lang="ts" setup>
import '@fontsource/montserrat/700.css'
import '@fontsource/inter'

const user = useUser()

await user.hook()

onUnmounted(() => {
  user.unhook()
})
</script>

<style lang="scss">
:root {
  --c-text: 35, 31, 18;
  --c-background: 255, 255, 255;
  --c-info: 48, 50, 89;
  --c-success: 35, 142, 78;
  --c-error: 197, 1, 2;

  --c-primary-50: 245, 243, 235;
  --c-primary-100: 234, 230, 215;
  --c-primary-200: 224, 218, 195;
  --c-primary-300: 206, 197, 160;
  --c-primary-400: 188, 175, 126;
  --c-primary-500: 170, 154, 91;
  --c-primary-600: 138, 124, 71;
  --c-primary-700: 104, 93, 54;
  --c-primary-800: 69, 62, 36;
  --c-primary-900: 35, 31, 18;

  --shadow-0: rgba(0, 0, 0, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  --shadow-1: rgba(0, 0, 0, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  --shadow-2: rgba(0, 0, 0, 0.2) 0px 7px 16px -3px, rgba(0, 0, 0, 0.25) 0px 4px 8px -4px;
}

html,
body {
  margin: 0;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  color: rgb(var(--c-text));
  background-color: rgb(var(--c-background));
  width: 100%;
  height: 100%;

  #__nuxt {
    width: 100%;
    height: 100%;

    main {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
}

h1 {
  font-size: 3.5rem;
  margin: 0.5rem 0;

  &.hero {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
  }
}

h2 {
  font-size: 3rem;
  margin: 0.5rem 0;
}

h3 {
  font-size: 2.5rem;
  margin: 0.5rem 0;
}

h4 {
  font-size: 2rem;
  margin: 0.5rem 0;
}

h5 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

h6 {
  font-size: 1.15rem;
  margin: 0.5rem 0;
}

p {
  margin-top: 0;
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(var(--c-primary-800), 0.15) rgba(var(--c-primary-800), 0.15);
}

*::-webkit-scrollbar {
  width: 4px;
}

*::-webkit-scrollbar-track {
  background: rgba(var(--c-primary-800), 0.15);
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(var(--c-primary-800), 0.15);
  border-radius: 0;
  border: none;
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

*:-webkit-autofill,
*:-webkit-autofill:hover,
*:-webkit-autofill:focus,
*:-webkit-autofill:active {
  $box-shadow: 0 0 0 64px rgb(var(--c-background)) inset !important;
  box-shadow: $box-shadow;
  -webkit-box-shadow: $box-shadow;
}

// a {
//   appearance: none;
//   outline: none;
//   color: rgb(var(--secondary));
//   text-decoration: none;
//   cursor: pointer;

//   &:focus,
//   &:hover {
//     text-decoration: underline;
//     opacity: 0.9;
//   }
// }
</style>
