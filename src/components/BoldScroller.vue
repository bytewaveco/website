<template>
  <div class="bold-scroll">
    <div class="bold-scroll-text">
      <div>
        <img src="~/assets/img/Bytewave-Secondary-Logo.svg" alt="Bytewave logo" />
        <h1>CRAFTING ELEGANT &amp; BOLD BRANDS</h1>
        <img src="~/assets/img/Bytewave-Secondary-Logo.svg" alt="Bytewave logo" />
        <h1>CRAFTING ELEGANT &amp; BOLD BRANDS</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bold-scroll {
  position: relative;
  display: flex;
  width: 100%;
  height: 130px;
  background-color: rgb(var(--c-text));
  overflow: hidden;
  pointer-events: none;
  user-select: none;

  .bold-scroll-text {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    white-space: nowrap;

    div {
      display: flex;
      animation: scroll 40s infinite linear;

      img {
        height: 40px;
        margin: auto 2rem;
      }

      h1 {
        display: inline-block;
        font-size: 120px;
        font-weight: 800;
        color: rgb(var(--c-background));
        white-space: nowrap;
        margin: 0;
      }

      @supports (font-variation-settings: normal) {
        h1 {
          font-family: 'RalewayVariable';
          font-variation-settings: 'wght' 800;
        }
      }
    }
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
