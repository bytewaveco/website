<template>
  <span :class="`notify-status notify-status--${type}`">{{ typeReadable }}</span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'live',
    },
  },
  setup(props) {
    const typeReadable = ref('Live')

    switch (props.type) {
      case 'live':
        typeReadable.value = 'Live'
        break
      case 'new':
        typeReadable.value = 'New'
        break
    }

    return { typeReadable }
  },
})
</script>

<style lang="scss" scoped>
.notify-status {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  color: rgb(var(--c-background));
  background-color: rgb(var(--c-primary));
  pointer-events: none;
  user-select: none;
  cursor: default;

  &.notify-status--live {
    background-color: rgb(var(--c-error));
  }

  &.notify-status--new {
    background-color: rgb(var(--c-success));
  }
}
</style>
