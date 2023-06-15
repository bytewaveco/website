<template>
  <section
    :class="{
      grid: true,
      'grid-cols-1': true,
      'items-center': true,
      'justify-center': true,
      'w-full': true,
      'max-w-[992px]': true,
      'mx-auto': true,
      'pt-16': true,
      'pb-32': true,
      'text-center': true,
      'gap-y-24': true,
      'box-border': true,
    }">
    <img
      src="~/assets/img/Bytewave-Text-Logo.svg"
      alt="Bytewave text logo"
      :class="{
        'min-w-[100px]': true,
        'w-[10vw]': true,
        'max-w-[140px]': true,
        'p-4': true,
        'pointer-events-none': true,
      }" />
    <img
      src="~/assets/img/hero.svg"
      height="600"
      alt="Digital Marketing & Software Development"
      :class="{
        'w-full': true,
        'h-auto': true,
        'pointer-events-none': true,
        'user-select-none': true,
        'p-4': true,
        'box-border': true,
      }" />
    <p w-fit text-2xl mx-auto>BYTEWAVE SPECIALIZES IN CRAFTING ELEGANT & BOLD BRANDS</p>
  </section>
</template>
