<template>
  <div
    :class="{
      'h-[130px]': true,
      flex: true,
      'w-full': true,
      'bg-black': true,
      'pointer-events-none': true,
      'user-select-none': true,
      relative: true,
      'overflow-hidden': true,
    }">
    <div absolute flex items-center justify-start w-full h-full whitespace-nowrap>
      <div class="flex animate-[scroll_40s_linear_infinite]">
        <img
          src="~/assets/img/Bytewave-Secondary-Logo.svg"
          alt="Bytewave logo"
          class="h-[40px] my-auto mx-8" />
        <h1
          :class="{
            'inline-block': true,
            'text-[120px]': true,
            'font-extrabold': true,
            'text-white': true,
            'whitespace-nowrap': true,
            'm-0': true,
          }">
          CRAFTING ELEGANT &amp; BOLD BRANDS
        </h1>
        <img
          src="~/assets/img/Bytewave-Secondary-Logo.svg"
          alt="Bytewave logo"
          class="h-[40px]" />
        <h1>CRAFTING ELEGANT &amp; BOLD BRANDS</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
