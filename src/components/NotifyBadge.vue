<template>
  <div
    v-if="count > 0"
    :class="{ 'notify-button': true }"
  >
    <span>{{ countReadable }}</span>
    <slot />
  </div>
  <slot v-else />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const countReadable = ref(String(props.count))

    if (props.count > 9) {
      countReadable.value = '9+'
    }

    return { countReadable }
  },
})
</script>

<style lang="scss" scoped>
.notify-button {
  position: relative;
  width: fit-content;
  height: fit-content;

  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -2px;
    right: -4px;
    width: 1rem;
    height: 1rem;
    padding: 2px;
    background-color: rgb(var(--c-error));
    color: rgb(var(--c-background));
    font-size: 0.75rem;
    border-radius: 100%;
    box-shadow: var(--shadow-0);
    pointer-events: none;
    user-select: none;
    z-index: 999;
  }
}
</style>
