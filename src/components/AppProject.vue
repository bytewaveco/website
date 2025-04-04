<template>
  <div
    class="project absolute z-50 box-border h-[500px] w-[80vw] select-none overflow-hidden rounded-lg shadow-lg lg:w-[40vw]"
    :class="{
      'bg-white': !dark,
      'border-2 border-white bg-black': dark,
    }"
    :style="{
      transition: 'top 1000ms ease-in, left 1000ms ease-in',
    }"
  >
    <div class="overflow-hidden rounded-lg">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ dark?: boolean }>(), {
  dark: false,
})
</script>
