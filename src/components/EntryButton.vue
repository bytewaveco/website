<template>
  <button
    :class="{
      'entry-button': true,
      'entry-button--secondary': variant === 'secondary',
      'entry-button--danger': variant === 'danger',
    }"
  >
    <slot />
  </button>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: (value: string) => {
        return ['default', 'secondary', 'danger'].includes(value)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
button {
  appearance: none;
  outline: none;
  background-color: rgb(var(--c-primary-800));
  border: none;
  border-radius: 4px;
  color: rgb(var(--c-background));
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0;
  padding: 0.5rem 1.5rem;
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

  &.entry-button--secondary {
    background-color: rgba(var(--c-text), 0.2);
    color: rgb(var(--c-text));
  }

  &.entry-button--danger {
    background-color: rgb(var(--c-error));
    color: rgb(var(--c-background));
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
}
</style>
