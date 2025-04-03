<template>
  <div id="about-us" class="w-full max-w-[992px] mx-auto py-32 px-4 box-border">
    <h2>ABOUT US</h2>
    <p>
      WE CREATED BYTEWAVE IN 2018 WITH THE INTENT TO EDUCATE BUSINESSES AND HELP
      THEM THRIVE ONLINE. WE CULTIVATE MEANINGFUL BRANDS USING DATA-BACKED
      STRATEGIES.
    </p>
    <div
      class="flex flex-col md:grid md:grid-cols-2 gap-16 w-full mt-16 items-center"
    >
      <div
        aria-label="Kaden, Founder and Software Engineer"
        class="flex-1 max-w-[350px] mx-auto"
      >
        <div class="flex rounded p-2 bg-black box-border w-fit h-fit">
          <NuxtImg
            src="/img/kaden.webp"
            alt="Kaden, Founder and Software Engineer"
            loading="lazy"
            class="w-[13vw] h-[13vw] min-w-[170px] min-h-[170px] max-w-[350px] pointer-events-none user-select-none rounded-[3px]"
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
        class="flex-1 max-w-[350px] mx-auto"
      >
        <div
          class="flex rounded p-2 bg-black box-border w-fit h-fit"
          aria-label="Winter, our Multi-media Creative Director"
        >
          <NuxtImg
            src="/img/winter.webp"
            alt="Winter, our Multi-media Creative Director"
            loading="lazy"
            class="w-[13vw] h-[13vw] min-w-[170px] min-h-[170px] max-w-[350px] pointer-events-none user-select-none rounded-[3px]"
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
