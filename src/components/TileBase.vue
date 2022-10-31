<template>
  <div class="tile"><slot /></div>
</template>

<style lang="scss" scoped>
.tile {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  justify-items: center;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  user-select: none;
  background-color: rgb(var(--c-background));
  box-shadow: var(--shadow-0);
}
</style>
