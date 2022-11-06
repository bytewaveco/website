<template>
  <section data-testid="main">
    <img
      src="~/assets/img/logo.png"
      alt="The Show Portal"
    />
    <slot />
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: 1fr 45vw;
  align-items: center;
  justify-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgb(var(--c-primary-50));
  overflow: hidden;
  user-select: none;

  img {
    max-width: 500px;
    pointer-events: none;
  }

  :deep(.tile) {
    width: calc(100% - 4rem) !important;
    height: calc(100% - 10rem) !important ;
    padding: 3rem 0;

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: calc(100% - 4rem);

      h1 {
        width: 100%;
      }
    }
  }
}
</style>
