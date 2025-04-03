<template>
  <main>
    <NuxtLink to="/">
      <img src="/img/Bytewave-Text-Logo.svg" width="200" />
    </NuxtLink>
    <slot />
  </main>
  <AppFooter />
</template>

<style lang="scss" scoped>
main {
  display: grid;
  padding: 4rem 2rem;
  box-sizing: border-box;
  width: 80vw;
  max-width: 992px;
  margin: 0 auto;

  :deep(h2) {
    margin-top: 2rem;
  }

  :deep(a) {
    color: rgb(var(--c-text));
    transition: all 130ms ease-in-out;
    text-decoration: none;

    &:hover {
      color: rgb(var(--c-secondary));
      text-decoration: underline;
    }
  }
}

@media only screen and (max-width: 992px) {
  main {
    width: 100%;

    :deep(h2) {
      font-size: 32px;
    }
  }
}
</style>
