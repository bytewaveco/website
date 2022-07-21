<template>
  <section ref="slide">
    <bytewave-logo
      ref="logo"
      id="logo"
    />
    <bytewave-text-logo id="logo-text" />
    <div ref="ctaContainer">
      <h1>Join the wave!</h1>
      <div
        ref="cta"
        class="cta"
      >
        <button @click.stop.prevent="slideManager.nextSlide()">Services</button>
        <button>Contact Us</button>
      </div>
    </div>
    <bytewave-text-alt-logo
      ref="logoText"
      id="logo-text-main"
    />
    <p id="copyright">Copyright 2018-Present © Byte Wave LLC. All rights reserved.</p>
    <div id="terms-and-privacy-policy">
      <router-link to="/"> Terms </router-link>
      &nbsp;&middot;&nbsp;
      <router-link to="/"> Privacy Policy </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BytewaveLogo from '../assets/bytewave-logo.svg';
import BytewaveTextLogo from '../assets/bytewave-text.svg';
import BytewaveTextAltLogo from '../assets/bytewave-text-alt.svg';
import { useSlideManager } from '../store';
import { scale } from '../helpers';

export default defineComponent({
  components: {
    BytewaveLogo,
    BytewaveTextLogo,
    BytewaveTextAltLogo,
  },
  setup() {
    const slideManager = useSlideManager();

    return { slideManager };
  },
  mounted() {
    this.onProgress();
    this.slideManager.$subscribe(this.onProgress);
  },
  methods: {
    onProgress() {
      if (this.$refs.logo && this.$refs.logoText && this.$refs.ctaContainer) {
        const percentage = Math.max(
          0,
          Math.min(
            1,
            this.slideManager.scrollPosition / this.slideManager.slideSize.height
          )
        );

        if (percentage < 0.1) {
          (this.$refs.logo as any).$el.setAttribute('transform', 'scale(1)');
        } else {
          (this.$refs.logo as any).$el.setAttribute(
            'transform',
            `scale(${scale(percentage, 0.1, 1, 1, 300)})`
          );
        }

        if (percentage > 0.35) {
          (this.$refs.ctaContainer as HTMLDivElement).classList.add('inverted');
        } else {
          (this.$refs.ctaContainer as HTMLDivElement).classList.remove('inverted');
        }

        if (percentage > 0.7) {
          (this.$refs.logoText as any).$el.style.setProperty(
            'transform',
            `scale(${scale(percentage, 0.7, 1, 0, 1)})`
          );
        } else {
          (this.$refs.logoText as any).$el.style.setProperty('transform', 'scale(0)');
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
section {
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;

  #logo {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 48px;
    height: 48px;
    transform-box: fill-box;
    transform-origin: center;
    z-index: 1;
  }

  #logo-text {
    position: absolute;
    top: calc(10px + 1rem);
    left: calc(48px + 2rem);
    width: 168px;
    z-index: 0;
  }

  div {
    display: grid;
    align-items: center;
    justify-items: center;
    transition: color 100ms ease-in-out;
    z-index: 2;

    &.inverted {
      color: #f4f4f4;
    }

    h1 {
      margin: 0 auto 6rem;
      width: fit-content;
    }

    .cta {
      display: grid;
      width: fit-content;
      height: fit-content;
      grid-template-columns: auto auto;
      column-gap: 1rem;

      button {
        appearance: none;
        outline: none;
        width: fit-content;
        height: fit-content;
        padding: 0.5rem 1rem;
        background-color: transparent;
        border: 2px solid currentColor;
        border-radius: 20px;
        font-size: 1.2rem;
        cursor: pointer;
        color: currentColor;
      }
    }
  }

  #logo-text-main {
    position: absolute;
    bottom: 10vh;
    left: calc(50vw - 84px);
    width: 168px;
    transform-box: fill-box;
    transform-origin: center;
    transform: scale(0);
    z-index: 2;
  }

  #copyright {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    font-size: 12px;
    color: #f4f4f4;
    margin: 0;
    z-index: 2;
  }

  #terms-and-privacy-policy {
    position: absolute;
    display: flex;
    bottom: 2rem;
    right: 2rem;
    font-size: 12px;
    color: #f4f4f4;
    z-index: 2;
  }
}
</style>
