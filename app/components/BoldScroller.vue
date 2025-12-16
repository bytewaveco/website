<template>
  <div class="grid items-center bg-black">
    <UMarquee :overlay="false" :ui="{ content: 'shrink' }">
      <h3 class="m-0! font-extrabold text-white">
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
    </UMarquee>
  </div>
</template>
