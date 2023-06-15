<template>
  <div id="about-us" class="w-full max-w-[992px] mx-auto py-32 px-4 box-border">
    <h2>ABOUT US</h2>
    <p>
      WE CREATED BYTEWAVE IN 2018 WITH THE INTENT TO EDUCATE BUSINESSES AND HELP THEM
      THRIVE ONLINE. WE CULTIVATE MEANINGFUL BRANDS USING DATA-BACKED STRATEGIES.
    </p>
    <div flex flex-col gap-16 w-full mt-16 items-center>
      <div aria-label="Kaden, Founder and Software Engineer" flex-1>
        <div flex rounded p-2 bg-black box-border w-fit h-fit>
          <img
            src="~/assets/img/kaden.webp"
            alt="Kaden, Founder and Software Engineer"
            loading="lazy"
            :class="{
              'w-[13vw]': true,
              'h-[13vw]': true,
              'min-w-[170px]': true,
              'min-h-[170px]': true,
              'max-w-[350px]': true,
              'pointer-events-none': true,
              'user-select-none': true,
              'rounded-[3px]': true,
            }" />
        </div>
        <h5 font-extrabold>KADEN GRIFFITH</h5>
        <h5>FOUNDER AND SOFTWARE ENGINEER</h5>
        <p w-full>
          I'M A SOFTWARE ENGINEER AND FOUNDER OF BYTEWAVE. I HAVE A PASSION FOR CREATING
          VALUABLE AND INNOVATIVE TOOLS FOR FINANCE, EDUCATION, AND BUSINESS. I LOVE CARS,
          TECHNOLOGY, AND THE MOUNTAINS.
        </p>
      </div>
      <div aria-label="Winter, our Multi-media Creative Director" flex-1>
        <div flex rounded p-2 bg-black box-border w-fit h-fit>
          <img
            src="~/assets/img/winter.webp"
            alt="Winter, our Multi-media Creative Director"
            loading="lazy"
            :class="{
              'w-[13vw]': true,
              'h-[13vw]': true,
              'min-w-[170px]': true,
              'min-h-[170px]': true,
              'max-w-[350px]': true,
              'pointer-events-none': true,
              'user-select-none': true,
              'rounded-[3px]': true,
            }" />
        </div>
        <h5 font-extrabold>WINTER BLOCK</h5>
        <h5>MULTI-MEDIA CREATIVE DIRECTOR</h5>
        <p w-full>
          HI, I'M WINTER! I LOVE PLAYING VIDEO GAMES, EATING, AND WATCHING SHOWS. I ALSO
          THINK THE HEAD OF PUPLICK RELATIONS IS CUTE AND KIND OF OBSESSED WITH ME.
        </p>
      </div>
      <div aria-label="Koda, our Head of Puplick Relations" flex-1>
        <div flex rounded p-2 bg-black box-border w-fit h-fit>
          <img
            src="~/assets/img/koda.webp"
            alt="Koda, our Head of Puplick Relations"
            loading="lazy"
            :class="{
              'w-[13vw]': true,
              'h-[13vw]': true,
              'min-w-[170px]': true,
              'min-h-[170px]': true,
              'max-w-[350px]': true,
              'pointer-events-none': true,
              'user-select-none': true,
              'rounded-[3px]': true,
            }" />
        </div>
        <h5 font-extrabold>KODA BEAR</h5>
        <h5>HEAD OF PUPLICK RELATIONS</h5>
        <p w-full>
          HI, I'M KODA! I LOVE COOKIES, MY BABIES, AND SNUGGLING IN FRONT OF THE
          FIREPLACE. I'M OBSESSED WITH MY PARENTS AND SPEND EVERY DAY SUPERVISING THEIR
          EVERY MOVE.
        </p>
      </div>
    </div>
  </div>
</template>
