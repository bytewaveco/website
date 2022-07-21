<template>
  <section
    @wheel.passive.stop="slideManager.onWheel"
    @touchstart.passive.stop="slideManager.onTouchstart"
    @touchmove.passive.stop="slideManager.onTouchmove"
  >
    <app-slide :slide-number="1">
      <slide-1 />
    </app-slide>
    <app-slide :slide-number="2">
      <h1>Slide 2</h1>
    </app-slide>
    <app-slide :slide-number="3">
      <h1>Slide 3</h1>
    </app-slide>
    <app-slide :slide-number="4">
      <h1>Slide 4</h1>
    </app-slide>
    <app-slide :slide-number="5">
      <h1>Slide 5</h1>
    </app-slide>
    <progress-indicator />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSlideManager } from '../store';

import AppSlide from '../components/AppSlide.vue';
import ProgressIndicator from '../components/ProgressIndicator.vue';
import Slide1 from '../components/Slide1.vue';

export default defineComponent({
  components: {
    AppSlide,
    ProgressIndicator,
    Slide1,
  },

  setup() {
    const slideManager = useSlideManager();

    return { slideManager };
  },
  mounted() {
    this.slideManager.setScrollRange();
  },
});
</script>
