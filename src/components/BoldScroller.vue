<template>
  <div class="grid items-center bg-black">
    <UPageMarquee :overlay="false" :ui="{ content: 'shrink' }">
      <h3 class="text-white font-extrabold !m-0">
        CRAFTING ELEGANT &amp; BOLD BRANDS
      </h3>
      <div class="flex items-center justify-center">
        <NuxtImg
          src="/img/Bytewave-Secondary-Logo.svg"
          alt="Bytewave logo"
          class="h-[40px]"
          loading="lazy"
        />
      </div>
    </UPageMarquee>
  </div>
</template>
