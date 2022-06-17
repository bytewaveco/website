<template>
  <div class="slide"><h1>Slide 1</h1></div>
  <div class="slide"><h1>Slide 2</h1></div>
  <div class="slide"><h1>Slide 3</h1></div>
  <div class="slide"><h1>Slide 4</h1></div>
  <div class="slide"><h1>Slide 5</h1></div>
  <div id="slide-progress">
    <button>Prev</button>
    <div id="slide-progress-bar-container">
      <div id="slide-progress-bar-progress" />
    </div>
    <button>Next</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  mounted() {
    document.addEventListener('wheel', this.onWheel.bind(this), false);
  },
  unmounted() {
    document.removeEventListener('wheel', this.onWheel.bind(this), false);
  },
  methods: {
    onWheel(event: WheelEvent) {
      console.log(event);
    },
  },
});
</script>

<style lang="scss">
.slide {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #e9e9e9;
  border: 2px solid red;
  z-index: 0;
}

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

  #slide-progress-bar-container {
    display: block;
    width: 4px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    overflow: hidden;

    #slide-progress-bar-progress {
      width: 4px;
      height: 30%;
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>
