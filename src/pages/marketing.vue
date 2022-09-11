<template>
  <section>
    <h1>Marketing</h1>
    <p>
      Get to know your customers, and increase your ROI by maximizing your exposure. Our
      team of experts will build custom marketing strategies for your product or company,
      and help you reach your goals.
    </p>
    <p>
      We're dedicated to delivering data-driven, unique, and lasting marketing plans to
      meet any industry. We use the latest research and tools to help drive your sales up!
    </p>
    <div id="logo-text-main" />
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  background-color: #000;
  color: #fff;

  #logo-text-main {
    position: absolute;
    bottom: 10vh;
    left: calc(50vw - 84px);
    width: 168px;
    height: 40px;
    z-index: 2;
    background: url('../assets/bytewave-text-alt.svg') no-repeat center;
  }
}
</style>
