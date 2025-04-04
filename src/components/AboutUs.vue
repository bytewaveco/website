<template>
  <div id="about-us" class="mx-auto box-border w-full max-w-[992px] px-4 py-32">
    <h2>ABOUT US</h2>
    <p>
      WE CREATED BYTEWAVE IN 2018 WITH THE INTENT TO EDUCATE BUSINESSES AND HELP
      THEM THRIVE ONLINE. WE CULTIVATE MEANINGFUL BRANDS USING DATA-BACKED
      STRATEGIES.
    </p>
    <div
      class="mt-16 flex w-full flex-col items-center gap-16 md:grid md:grid-cols-2"
    >
      <div
        aria-label="Kaden, Founder and Software Engineer"
        class="mx-auto max-w-[350px] flex-1"
      >
        <div class="box-border flex size-fit rounded bg-black p-2">
          <NuxtImg
            src="/img/kaden.webp"
            alt="Kaden, Founder and Software Engineer"
            loading="lazy"
            class="pointer-events-none size-[13vw] min-h-[170px] min-w-[170px] max-w-[350px] select-none rounded-[3px]"
          />
        </div>
        <h5 class="font-extrabold">KADEN GRIFFITH</h5>
        <h5>FOUNDER AND SOFTWARE ENGINEER</h5>
        <p class="w-full">
          I'M A SOFTWARE ENGINEER AND FOUNDER OF BYTEWAVE. I HAVE A PASSION FOR
          CREATING VALUABLE AND INNOVATIVE TOOLS FOR FINANCE, EDUCATION, AND
          BUSINESS. I LOVE CARS, TECHNOLOGY, AND THE MOUNTAINS.
        </p>
      </div>
      <div
        aria-label="Winter, our Multi-media Creative Director"
        class="mx-auto max-w-[350px] flex-1"
      >
        <div
          class="box-border flex size-fit rounded bg-black p-2"
          aria-label="Winter, our Multi-media Creative Director"
        >
          <NuxtImg
            src="/img/winter.webp"
            alt="Winter, our Multi-media Creative Director"
            loading="lazy"
            class="pointer-events-none size-[13vw] min-h-[170px] min-w-[170px] max-w-[350px] select-none rounded-[3px]"
          />
        </div>
        <h5 class="font-extrabold">WINTER BLOCK</h5>
        <h5>MULTI-MEDIA CREATIVE DIRECTOR</h5>
        <p class="w-full">
          HI, I'M WINTER! I LOVE PLAYING VIDEO GAMES, EATING, AND WATCHING
          SHOWS.
        </p>
      </div>
    </div>
  </div>
</template>
