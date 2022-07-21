<template>
  <div id="slide-progress">
    <button @click.stop.prevent="slideManager.prevSlide()">
      <font-awesome-icon icon="fa-duotone fa-chevron-up" />
    </button>
    <div id="slide-progress-bar-container">
      <div id="slide-progress-bar-progress" />
    </div>
    <button @click.stop.prevent="slideManager.nextSlide()">
      <font-awesome-icon icon="fa-duotone fa-chevron-down" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSlideManager } from '../store';

export default defineComponent({
  setup() {
    const slideManager = useSlideManager();

    return { slideManager };
  },
});
</script>

<style lang="scss" scoped>
#slide-progress {
  position: absolute;
  top: 15vh;
  right: 3rem;
  bottom: 15vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 1rem;
  align-items: center;
  justify-items: center;
  z-index: 999;

  button {
    appearance: none;
    outline: none;
    font-size: 22px;
    background-color: transparent;
    border: none;
  }

  #slide-progress-bar-container {
    display: block;
    width: 4px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    overflow: hidden;

    #slide-progress-bar-progress {
      width: 4px;
      height: var(--slide-manager-scroll-position);
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>
