<template>
  <button :class="{ 'sidebar-button': true, active: active }">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
button {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-items: flex-start;
  justify-content: flex-start;
  column-gap: 0.5rem;
  appearance: none;
  outline: none;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  color: rgb(var(--c-text));
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0;
  padding: 1rem 1rem 1rem 0.5rem;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  transition: all 130ms ease-in-out;

  &.active {
    background-color: rgb(var(--c-primary-800)) !important;
    color: rgb(var(--c-background)) !important;
  }

  &:focus,
  &:hover {
    background-color: rgb(var(--c-primary-50));
  }
}
</style>
