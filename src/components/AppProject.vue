<template>
  <div
    class="project absolute opacity-0 z-50 box-border h-[500px] w-[80vw] select-none overflow-hidden rounded-lg shadow-lg lg:w-[40vw]"
    :class="{
      'bg-white': !dark,
      'border-2 border-white bg-black': dark,
    }"
    data-motion
  >
    <div
      class="overflow-hidden rounded-lg [&>img]:pointer-events-none [&>img]:absolute"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ dark?: boolean }>(), {
  dark: false,
})
</script>
