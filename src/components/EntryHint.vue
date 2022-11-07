<template>
  <p :class="`entry-hint entry-hint--${type}`">
    {{ hintText }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true,
      validator: (value: string) =>
        ['default', 'disabled', 'success', 'error'].includes(value),
    },
    hintText: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.entry-hint {
  width: 100%;
  height: 1rem;
  margin: 0;
  font-size: 0.75rem;
  color: rgba(var(--c-text), 0.8);
  cursor: default;

  &.entry-hint--success {
    color: rgb(var(--c-success));
  }

  &.entry-hint--error {
    color: rgb(var(--c-error));
  }

  &.entry-hint--disabled {
    color: rgba(var(--c-text), 0.4);
  }
}
</style>
