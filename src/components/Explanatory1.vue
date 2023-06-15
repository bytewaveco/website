<template>
  <section
    grid
    grid-cols-1
    items-center
    justify-center
    justify-items-center
    gap-8
    w-fit
    px-4
    py-32
    box-border
    md:flex>
    <div flex rounded p-2 bg-black box-border w-fit h-fit>
      <img
        src="~/assets/img/us.webp"
        alt="Bytewave Staff"
        loading="lazy"
        :class="{
          'w-[13vw]': true,
          'h-[13vw]': true,
          'min-w-[170px]': true,
          'min-h-[170px]': true,
          'pointer-events-none': true,
          'user-select-none': true,
          'rounded-[3px]': true,
        }" />
    </div>
    <h4 m-0 text-center md:text-left>
      WE ARE <span text-blue>DARING</span> CREATORS <br />
      &amp; EDUCATORS THAT HELP <br />
      BUSINESSES <span text-blue>THRIVE</span> ONLINE
    </h4>
  </section>
</template>
