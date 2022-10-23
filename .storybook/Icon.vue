<template><Icon :icon="name" /></template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    name: {
      type: String,
      default: 'bell',
    },
  },
})
</script>
