<template>
  <main class="grid px-4 pb-6">
    <UContainer>
      <NuxtLink to="/">
        <img src="/img/Bytewave-Text-Logo.svg" width="200" alt="Bytewave" />
      </NuxtLink>
      <slot />
    </UContainer>
  </main>
  <AppFooter />
</template>
