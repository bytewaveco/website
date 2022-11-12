<template>
  <div id="document-content">
    <main>
      <nuxt-link to="/">
        <img
          src="~/assets/img/bytewave-text.svg"
          width="200"
        />
      </nuxt-link>
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
onMounted(() => {
  useRouter().beforeEach(() => {
    window.scrollTo(0, 0)
  })
})
</script>

<style lang="scss" scoped>
#document-content {
  display: grid;
  padding: 4rem 2rem;

  main {
    width: 80vw;
    margin: 0 auto;

    :deep(h2) {
      margin-top: 2rem;
    }

    :deep(a) {
      color: rgb(var(--c-text));
      transition: all 130ms ease-in-out;
      text-decoration: none;

      &:hover {
        color: rgb(var(--c-secondary));
        text-decoration: underline;
      }
    }
  }
}

@media only screen and (max-width: 1260px) {
  #document-content {
    main {
      width: 100%;

      :deep(h2) {
        font-size: 32px;
      }
    }
  }
}
</style>
