<template>
  <section>
    <img
      src="~/assets/img/hero.svg"
      height="600"
      alt="Digital Marketing & Software Development" />
    <p>BYTEWAVE SPECIALIZES IN CRAFTING ELEGANT & BOLD BRANDS</p>
  </section>
</template>

<style lang="scss" scoped>
section {
  position: relative;
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 8rem;
  text-align: center;
  row-gap: 6rem;

  img {
    height: auto;
    pointer-events: none;
    user-select: none;
  }

  p {
    width: fit-content;
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 1260px) {
  section {
    img {
      width: calc(100% - 4rem);
      margin: 0 auto;
    }

    p {
      width: calc(100% - 4rem);
      padding: 0 2rem;
    }
  }
}
</style>
