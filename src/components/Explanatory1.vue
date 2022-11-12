<template>
  <section>
    <img
      src="~/assets/img/us.webp"
      alt="Bytewave Staff"
      loading="lazy"
    />
    <h4>
      WE ARE DARING CREATORS <br />
      &amp; EDUCATORS THAT HELP <br />
      BUSINESSES THRIVE ONLINE
    </h4>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  row-gap: 2rem;
  width: fit-content;
  height: fit-content;
  margin: 8rem auto;

  h4 {
    margin: 0;
  }

  img {
    min-width: 170px;
    width: 13vw;
    min-height: 170px;
    height: 13vw;
    pointer-events: none;
    user-select: none;
  }
}

@media only screen and (max-width: 1260px) {
  section {
    grid-template-columns: 1fr;
    width: calc(100% - 4rem) !important;
    padding: 0 2rem;
  }
}
</style>
