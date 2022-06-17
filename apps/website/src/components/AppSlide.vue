<template>
  <div :class="{ slide: true, active: slideManager.activeSlide === slideNumber }">
    <div class="slide-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSlideManager } from '../store';

export default defineComponent({
  props: {
    slideNumber: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const slideManager = useSlideManager();

    return { slideManager };
  },
});
</script>

<style lang="scss" scoped>
.slide {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 0;
  opacity: 0;
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: all;
  }

  .slide-content {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    margin: 1rem;
  }
}
</style>
