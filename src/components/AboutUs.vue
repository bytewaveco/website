<template>
  <div id="about-us">
    <h2>ABOUT US</h2>
    <p>
      WE CREATED BYTEWAVE IN 2018 WITH THE INTENT TO EDUCATE BUSINESSES AND HELP THEM
      THRIVE ONLINE. WE CULTIVATE MEANINGFUL BRANDS USING DATA-BACKED STRATEGIES.
    </p>
    <div id="staff">
      <div class="member" aria-label="Kaden, Founder and Software Engineer">
        <img src="~/assets/img/kaden.webp" alt="Kaden, Founder and Software Engineer" />
        <h5><strong>KADEN GRIFFITH</strong></h5>
        <h5>FOUNDER AND SOFTWARE ENGINEER</h5>
        <p>
          I'M A SOFTWARE ENGINEER AND FOUNDER OF BYTEWAVE. I HAVE A PASSION FOR CREATING
          VALUABLE AND INNOVATIVE TOOLS FOR FINANCE, EDUCATION, AND BUSINESS. I LOVE CARS,
          TECHNOLOGY, AND THE MOUNTAINS.
        </p>
      </div>
      <div class="member" aria-label="Winter, our Multi-media Creative Director">
        <img
          src="~/assets/img/winter.webp"
          alt="Winter, our Multi-media Creative Director" />
        <h5><strong>WINTER BLOCK</strong></h5>
        <h5>MULTI-MEDIA CREATIVE DIRECTOR</h5>
        <p>
          HI, I'M WINTER! I LOVE PLAYING VIDEO GAMES, EATING, AND WATCHING SHOWS. I ALSO
          THINK THE HEAD OF PUPLICK RELATIONS IS CUTE AND KIND OF OBSESSED WITH ME.
        </p>
      </div>
      <div class="member" aria-label="Koda, our Head of Puplick Relations">
        <img src="~/assets/img/koda.webp" alt="Koda, our Head of Puplick Relations" />
        <h5><strong>KODA BEAR </strong></h5>
        <h5>HEAD OF PUPLICK RELATIONS</h5>
        <p>
          HI, I'M KODA! I LOVE COOKIES, MY BABIES, AND SNUGGLING IN FRONT OF THE
          FIREPLACE. I'M OBSESSED WITH MY PARENTS AND SPEND EVERY DAY SUPERVISING THEIR
          EVERY MOVE.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#about-us {
  width: 80vw;
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 0;
  box-sizing: border-box;

  #staff {
    display: flex;
    column-gap: 4rem;
    row-gap: 4rem;
    width: 100%;
    margin-top: 8rem;

    .member {
      flex: 1;

      img {
        width: 100%;
        max-width: 350px;
        pointer-events: none;
        user-select: none;
        border: 8px solid rgb(var(--c-text));
        box-sizing: border-box;
        border-radius: 4px;
      }

      p {
        width: 100%;
      }
    }
  }
}

@media only screen and (max-width: 1260px) {
  #about-us {
    width: 100%;
    padding: 8rem 1rem;
    box-sizing: border-box;

    #staff {
      flex-direction: column;
    }
  }
}

@media only screen and (max-width: 520px) {
  #about-us {
    #staff {
      .member {
        img {
          max-width: 100vw;
        }
      }
    }
  }
}
</style>
