<template>
  <a
    v-if="external"
    target="__blank"
    rel="noopener noreferrer"
    class="text-white no-underline transition-all hover:text-blue-500 hover:underline"
  >
    <slot />
  </a>
  <NuxtLink
    v-else
    class="text-white no-underline transition-all hover:text-blue-500 hover:underline"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ external?: boolean }>(), {
  external: false,
})
</script>
