<template>
  <button class="entry-button-icon">
    <icon :name="`ph:${icon}`" />
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    icon: {
      type: String,
      default: 'bell',
    },
  },
})
</script>

<style lang="scss" scoped>
button {
  display: grid;
  grid-template-columns: 2.25rem auto;
  appearance: none;
  outline: none;
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgb(var(--c-primary-800));
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1rem;
  margin-bottom: 0;
  padding: 0.75rem;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  box-shadow: var(--shadow-0);
  transition: all 130ms ease-in-out;

  &:focus,
  &:hover {
    filter: brightness(110%);
    box-shadow: var(--shadow-1);
  }

  &:disabled {
    background-color: rgba(var(--c-text), 0.1);
    color: rgba(var(--c-text), 0.4);
    cursor: not-allowed;

    &:focus,
    &:hover {
      filter: none;
      box-shadow: var(--shadow-0);
    }
  }

  svg {
    fill: rgb(var(--c-background));
    stroke: rgb(var(--c-background));
    color: rgb(var(--c-background));
  }
}
</style>
