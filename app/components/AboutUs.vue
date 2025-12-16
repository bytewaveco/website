<template>
  <div
    id="about-us"
    class="mx-auto box-border w-full max-w-screen-lg px-4 py-32"
  >
    <h2>ABOUT US</h2>
    <p>
      WE CREATED BYTEWAVE IN 2018 WITH THE INTENT TO EDUCATE BUSINESSES AND HELP
      THEM THRIVE ONLINE. WE CULTIVATE MEANINGFUL BRANDS USING DATA-BACKED
      STRATEGIES.
    </p>
    <p>
      OUR GOAL IS TO HELP YOU GROW YOUR BUSINESS AND REACH YOUR AUDIENCE
      EFFECTIVELY. CREATING MEANINGFUL CONTENT TO FIT YOUR NEEDS IS OUR TOP
      PRIORITY. WE'RE TECHNICAL PEOPLE WHO CAN COMMUNICATE AND LISTEN TO YOUR
      NEEDS. WE BUILD SOLUTIONS THAT YOU DON'T HAVE TO WORRY ABOUT AND USE THE
      LATEST IN RELIABLE AND SECURE TECHNOLOGY.
    </p>
    <div class="mt-16 flex w-full flex-col gap-16 md:grid md:grid-cols-2">
      <div
        aria-label="Kaden, Founder and Software Engineer"
        class="mx-auto flex-1"
      >
        <NuxtImg
          src="/img/kaden.webp"
          alt="Kaden, Founder and Software Engineer"
          class="pointer-events-none size-[13vw] min-h-[170px] min-w-[170px] rounded border-8 border-black select-none"
          loading="lazy"
        />
        <h5 class="font-extrabold">KADEN GRIFFITH</h5>
        <h5>FOUNDER AND SOFTWARE ENGINEER</h5>
        <p class="w-full text-sm">
          I'M A SOFTWARE ENGINEER AND FOUNDER OF BYTEWAVE. I HAVE A PASSION FOR
          CREATING VALUABLE AND INNOVATIVE TOOLS FOR FINANCE, EDUCATION, AND
          BUSINESS. I LOVE CARS, TECHNOLOGY, AND THE MOUNTAINS.
        </p>
      </div>
      <div
        aria-label="Winter, our Multi-media Creative Director"
        class="mx-auto flex-1"
      >
        <NuxtImg
          src="/img/winter.webp"
          alt="Winter, our Multi-media Creative Director"
          class="pointer-events-none size-[13vw] min-h-[170px] min-w-[170px] rounded border-8 border-black select-none"
          loading="lazy"
        />
        <h5 class="font-extrabold">WINTER BLOCK</h5>
        <h6>MULTI-MEDIA CREATIVE DIRECTOR</h6>
        <p class="w-full text-sm">
          HI, I'M WINTER! I LOVE PLAYING VIDEO GAMES, EATING, AND WATCHING
          SHOWS.
        </p>
      </div>
    </div>
  </div>
</template>
