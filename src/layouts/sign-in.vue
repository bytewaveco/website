<template>
  <section data-testid="main-section">
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
  grid-template-columns: 1fr 40vw;
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
}
</style>
