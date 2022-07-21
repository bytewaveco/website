<template>
  <router-view />
</template>

<style lang="scss">
html,
body {
  position: fixed;
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  color: #121212;
}

a {
  color: currentColor;
  text-decoration: none;

  &:hover {
    color: #71acbc;
    text-decoration: underline;
  }
}

h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0 0 1rem;
}
</style>
