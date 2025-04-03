<template>
  <a
    v-if="external"
    target="__blank"
    rel="noopener noreferrer"
    class="text-white transition-all decoration-none hover:text-blue-500 hover:underline"
  >
    <slot />
  </a>
  <NuxtLink
    v-else
    class="text-white transition-all decoration-none hover:text-blue-500 hover:underline"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ external?: boolean }>(), {
  external: false,
})
</script>
