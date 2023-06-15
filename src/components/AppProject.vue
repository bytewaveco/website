<template>
  <div
    :class="{
      project: true,
      absolute: true,
      'w-[80vw]': true,
      'h-[500px]': true,
      'rounded-lg': true,
      'overflow-hidden': true,
      'bg-white': !dark,
      'shadow-lg': true,
      'user-select-none': true,
      'z-50': true,
      'bg-black': dark,
      'border-solid': dark,
      'border-3': dark,
      'border-white': dark,
      'box-border': true,
      'lg:w-[40vw]': true,
    }"
    :style="{
      transition: 'top 1000ms ease-in, left 1000ms ease-in',
    }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ dark?: boolean }>(), {
  dark: false,
})
</script>
