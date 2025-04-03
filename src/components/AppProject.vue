<template>
  <div
    class="project absolute w-[80vw] h-[500px] rounded-lg overflow-hidden shadow-lg user-select-none z-50 box-border lg:w-[40vw]"
    :class="{
      'bg-white': !dark,
      'bg-black border-3 border-white': dark,
    }"
    :style="{
      transition: 'top 1000ms ease-in, left 1000ms ease-in',
    }"
  >
    <div class="rounded-lg overflow-hidden">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ dark?: boolean }>(), {
  dark: false,
})
</script>
