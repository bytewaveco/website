<template>
  <main>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
    <app-footer />
  </main>
</template>

<script lang="ts" setup>
import '@fontsource/raleway/variable.css'

useSchemaOrg([
  defineOrganization({
    name: 'Bytewave',
    logo: '/logo.png',
    sameAs: [
      'https://www.facebook.com/bytewaveco',
      'https://www.instagram.com/bytewaveco',
      'https://github.com/bytewaveco',
    ],
  }),
  defineWebSite({
    name: 'Bytewave of Sheridan, WY',
  }),
  defineWebPage({
    canonicalHost: 'https://bytewave.co',
  }),
])
</script>

<style lang="scss">
:root {
  --c-text: 0, 0, 0;
  --c-background: 255, 255, 255;
  --c-gray: 119, 119, 119;
  --c-primary: 54, 139, 163;
  --c-secondary: 113, 172, 188;
}

html,
body {
  margin: 0;
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  color: rgb(var(--c-text));
  background-color: rgb(var(--c-background));
  width: 100%;
  overflow: hidden;
  overflow-y: overlay;

  #__nuxt {
    width: 100%;

    main {
      position: relative;
      width: 100%;
    }
  }
}

h1 {
  font-size: 3.5rem;
  margin: 0.5rem 0;
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
  scrollbar-color: rgba(var(--c-primary), 0) rgba(var(--c-primary), 0.15);
}

*::-webkit-scrollbar {
  width: 4px;
}

*::-webkit-scrollbar-track {
  background: rgba(var(--c-primary), 0);
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(var(--c-primary), 0.15);
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
