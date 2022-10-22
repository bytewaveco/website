<template>
  <p
    :class="{
      success: hasSuccess,
      error: hasError,
      disabled: disabled,
    }"
  >
    {{ hintText }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  props: {
    hintText: {
      type: String,
      required: true,
    },
    hasSuccess: {
      type: Boolean,
      default: false,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss">
p {
  width: 100%;
  height: 1rem;
  margin: 0;
  font-size: 0.75rem;
  color: rgba(var(--c-text), 0.8);
  cursor: default;

  &.success {
    color: rgb(var(--c-success));
  }

  &.error {
    color: rgb(var(--c-error));
  }

  &.disabled {
    color: rgba(var(--c-text), 0.4);
  }
}
</style>
