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
  padding-top: 4rem;
  padding-bottom: 8rem;
  text-align: center;
  row-gap: 6rem;

  img {
    height: auto;
    pointer-events: none;
    user-select: none;
    padding: 1rem;
    box-sizing: border-box;
  }

  p {
    width: fit-content;
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 1260px) {
  section {
    img {
      width: 100%;
      margin: 0 auto;
      box-sizing: border-box;
    }

    p {
      width: 100%;
      padding: 0 1rem;
      box-sizing: border-box;
    }
  }
}
</style>
