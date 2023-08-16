<template>
  <div
    :class="{
      'h-[130px]': true,
      flex: true,
      'w-full': true,
      'bg-black': true,
      'pointer-events-none': true,
      'select-none': true,
      relative: true,
      'overflow-hidden': true,
    }">
    <div
      w-full
      h-full
      flex
      items-center
      gap-x-4
      class="animate-[scroll_40s_linear_infinite]">
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
    </div>
  </div>
</template>

<style lang="scss">
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
