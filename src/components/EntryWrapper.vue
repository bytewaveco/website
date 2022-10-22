<template>
  <div class="entry-wrapper">
    <slot />
  </div>
</template>

<style lang="scss">
.entry-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  row-gap: 4px;
  width: 100%;
  margin-bottom: 1rem;
}
</style>
