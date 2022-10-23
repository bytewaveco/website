<template>
  <main data-testid="main">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </main>
</template>

<style lang="scss">
:root {
  --c-text: 0, 0, 0;
  --c-background: 255, 255, 255;
  --c-primary: 99, 78, 66;
  --c-success: 35, 142, 78;
  --c-error: 197, 1, 2;
  --shadow-0: rgba(0, 0, 0, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  --shadow-1: rgba(0, 0, 0, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

html,
body {
  margin: 0;
  font-size: 16px;
  font-family: sans-serif;
  color: rgb(var(--text));
  background-color: rgb(var(--background));
  width: 100%;
  height: 100%;

  #__nuxt {
    width: 100%;
    height: 100%;

    main {
      width: 100%;
      height: 100%;
    }
  }
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.1);
}

*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.15);
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
