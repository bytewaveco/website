<template>
  <main data-testid="main">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </main>
</template>

<style lang="scss">
:root {
  --text: 18, 18, 18;
  --background: 255, 255, 255;
  --primary: 84, 51, 255;
  --secondary: 32, 189, 255;
  --tertiary: 165, 254, 203;
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
  overflow: hidden;

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
