<template>
  <app-slide :slide-number="1">
    <div id="brand">
      <bytewave-logo />
      <bytewave-text-logo />
    </div>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSlideManager } from '../store';
import BytewaveLogo from '../assets/bytewave-logo.svg';
import BytewaveTextLogo from '../assets/bytewave-text.svg';
import AppSlide from '../components/AppSlide.vue';
import ProgressIndicator from '../components/ProgressIndicator.vue';

export default defineComponent({
  components: {
    AppSlide,
    BytewaveLogo,
    BytewaveTextLogo,
    ProgressIndicator,
  },
  setup() {
    const slideManager = useSlideManager();

    return { slideManager };
  },
  mounted() {
    this.slideManager.setScrollRange();

    document.addEventListener('wheel', this.onWheel.bind(this), false);
  },
  unmounted() {
    document.removeEventListener('wheel', this.onWheel.bind(this), false);
  },
  methods: {
    onWheel(event: WheelEvent) {
      this.slideManager.addToScrollPosition(event.deltaY);
    },
  },
});
</script>

<style lang="scss">
#brand {
  display: grid;
  grid-template-columns: 48px 160px;
  column-gap: 1rem;
  justify-content: center;
  justify-items: center;
  align-items: center;
}
</style>
