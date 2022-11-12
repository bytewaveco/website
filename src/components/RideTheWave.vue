<template>
  <section>
    <h1>RIDE THE WAVE.</h1>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  width: 100%;
  background-color: rgb(var(--c-secondary));

  h1 {
    color: rgb(var(--c-background));
    white-space: nowrap;
    margin: 0;
    padding: 2rem 0;
  }
}

@media only screen and (max-width: 500px) {
  section {
    h1 {
      font-size: 32px;
    }
  }
}
</style>
