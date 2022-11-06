<template>
  <div
    v-if="toast.toasts.length"
    id="toasts"
  >
    <notify-toast
      v-for="t in toast.toasts"
      :key="t.ref"
      :toast="t"
    >
      {{ t }}
    </notify-toast>
  </div>
</template>

<script lang="ts" setup>
const toast = useToast()
</script>

<style lang="scss" scoped>
#toasts {
  position: absolute;
  top: 16px;
  left: 35vw;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  width: 30vw;
  height: fit-content;
  z-index: 999;
}
</style>
