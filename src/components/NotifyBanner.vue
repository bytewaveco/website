<template>
  <div :class="`notify-banner notify--${variant}`">
    <icon
      v-if="variant === 'info'"
      name="ph:info"
      size="32"
    />
    <div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    variant: {
      type: String,
      default: 'info',
      validator: (value: string) => ['info', 'alert'].includes(value),
    },
  },
})
</script>

<style lang="scss" scoped>
.notify-banner {
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  padding: 2rem 3rem;
  row-gap: 1rem;
  background-color: rgb(var(--c-primary-50));
  border-radius: 4px;
}
</style>
