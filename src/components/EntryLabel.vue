<template>
  <label
    :for="labelFor"
    :class="{ disabled }"
  >
    {{ label }}
  </label>
</template>

<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    labelFor: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
label {
  font-size: 1rem;
  margin: 0;
  cursor: default;

  &.disabled {
    color: rgba(var(--c-text), 0.4);
  }
}
</style>
