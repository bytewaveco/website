<template>
  <button
    :class="{
      'entry-button-ghost': true,
      'entry-button-ghost--danger': type === 'danger',
    }"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (value: string) => {
        return ['default', 'danger'].includes(value)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
button {
  position: relative;
  appearance: none;
  outline: none;
  border: none;
  background-color: transparent;
  border-radius: 4px;
  color: rgb(var(--c-primary));
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0;
  padding: 0.5rem 1.5rem;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  transition: all 130ms ease-in-out;

  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 2px solid rgb(var(--c-primary));
    border-radius: 4px;
    pointer-events: none;
  }

  &:focus,
  &:hover {
    background-color: rgba(var(--c-text), 0.01);
  }

  &.entry-button-ghost--danger {
    color: rgb(var(--c-error));

    &::before {
      border-color: rgb(var(--c-error));
    }
  }

  &:disabled {
    color: rgba(var(--c-text), 0.4);
    cursor: not-allowed;

    &::before {
      border-color: rgba(var(--c-text), 0.1);
    }

    &:focus,
    &:hover {
      background-color: transparent;
    }
  }
}
</style>
