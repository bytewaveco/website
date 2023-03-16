<template>
  <div id="document-content">
    <main>
      <nuxt-link to="/">
        <img src="~/assets/img/Bytewave-Text-Logo.svg" width="200" />
      </nuxt-link>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
#document-content {
  display: grid;
  padding: 4rem 2rem;
  box-sizing: border-box;

  main {
    width: 80vw;
    max-width: 1200px;
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
}

@media only screen and (max-width: 1260px) {
  #document-content {
    main {
      width: 100%;

      :deep(h2) {
        font-size: 32px;
      }
    }
  }
}
</style>
