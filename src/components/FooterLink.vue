<template>
  <a
    v-if="external"
    target="_blank"
    rel="noopener noreferrer"
    text-white
    transition-all
    decoration-none
    hover:text-blue
    hover:underline>
    <slot />
  </a>
  <nuxt-link
    v-else
    text-white
    transition-all
    decoration-none
    hover:text-blue
    hover:underline>
    <slot />
  </nuxt-link>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ external?: boolean }>(), {
  external: false,
})
</script>
