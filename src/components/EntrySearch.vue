<template>
  <div id="searchbar">
    <icon name="ph:magnifying-glass" />
    <input
      type="text"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts" setup>
const placeholder = ref(
  [
    'Search for events...',
    'Search for people...',
    'Search for places...',
    'Search for settings...',
  ][Math.floor(Math.random() * 3)]
)
</script>

<style lang="scss" scoped>
#searchbar {
  display: flex;
  align-items: center;
  column-gap: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  background-color: rgb(var(--c-primary-50));
  color: rgb(var(--c-primary-800));

  input {
    appearance: none;
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
    width: 100%;
    background: none;
    font-size: 0.75rem;
    line-height: 1rem;

    &::placeholder {
      color: rgba(var(--c-primary-800), 0.6);
    }
  }
}
</style>
