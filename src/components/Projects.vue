<template>
  <section id="projects">
    <div id="projects-container">
      <h2>PROJECTS</h2>
      <div id="project-carousel">
        <div class="project">
          <img
            src="~/assets/img/projects/catfish.webp"
            alt="Catfish"
            loading="lazy"
            :style="{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }"
          />
        </div>
        <div class="project padded">
          <img
            src="~/assets/img/projects/procar.svg"
            alt="Procar"
            loading="lazy"
            :style="{
              width: '20vw',
              height: '20vw',
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
              objectFit: 'contain',
              objectPosition: 'center',
            }"
          />
          <img
            src="~/assets/img/projects/austin.svg"
            alt="Procar"
            loading="lazy"
            :style="{
              width: '80vw',
              top: 'calc(50% - 40vw)',
              left: 'calc(50% - 40vw)',
              objectFit: 'contain',
              objectPosition: 'center',
              opacity: '0.2',
            }"
          />
        </div>
        <div class="project padded">
          <img
            src="~/assets/img/projects/signal.webp"
            alt="Signal"
            loading="lazy"
            :style="{
              width: '20vw',
              height: '20vw',
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
              objectFit: 'contain',
              objectPosition: 'center',
            }"
          />
        </div>
        <div class="project">
          <img
            src="~/assets/img/projects/rogue-ocean.webp"
            alt="Rogue Ocean"
            loading="lazy"
            :style="{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }"
          />
        </div>
        <div class="project">
          <img
            src="~/assets/img/projects/wilsons-lawn-landscape.svg"
            alt="Wilson's Lawn and Landscape"
            loading="lazy"
            :style="{
              width: '20vw',
              height: '20vw',
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
              objectFit: 'contain',
              objectPosition: 'center',
            }"
          />
        </div>
        <div class="project dark">
          <img
            src="~/assets/img/projects/justin-time.svg"
            alt="Justin Time Tile & Design"
            loading="lazy"
            :style="{
              width: '20vw',
              height: '20vw',
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
              objectFit: 'contain',
              objectPosition: 'center',
            }"
          />
        </div>
        <div class="project">
          <img
            src="~/assets/img/projects/broken-heart-stables.svg"
            alt="Broken Heart Stables"
            loading="lazy"
            :style="{
              width: '20vw',
              height: '20vw',
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
              objectFit: 'contain',
              objectPosition: 'center',
            }"
          />
        </div>
        <div class="project dark">
          <img
            src="~/assets/img/projects/inorganic-audio.svg"
            alt="Inorganic Audio"
            loading="lazy"
            :style="{
              width: '20vw',
              height: '20vw',
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
              objectFit: 'contain',
              objectPosition: 'center',
            }"
          />
        </div>
        <div class="project">
          <img
            src="~/assets/img/projects/wyo-pruitt-writing.svg"
            alt="Wyo Pruitt Writing"
            loading="lazy"
            :style="{
              width: '20vw',
              height: '20vw',
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
              objectFit: 'contain',
              objectPosition: 'center',
            }"
          />
        </div>
        <div class="project">
          <img
            src="~/assets/img/projects/heidi-gross-ward-3.webp"
            alt="Heidi Gross Ward 3 Campaign"
            loading="lazy"
            :style="{
              width: '20vw',
              height: '20vw',
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
              objectFit: 'contain',
              objectPosition: 'center',
            }"
          />
        </div>
        <div class="project">
          <img
            src="~/assets/img/projects/nathan-mcleland-mayor.webp"
            alt="Nathan McLeland Mayoral Campaign"
            loading="lazy"
            :style="{
              width: '20vw',
              height: '20vw',
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
              objectFit: 'contain',
              objectPosition: 'center',
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const interval = ref<number>()

onMounted(() => {
  const projects = document.querySelectorAll<HTMLElement>('.project')
  const projectArray = Array.from(projects)

  interval.value = window.setInterval(() => {
    const newLast = projectArray.shift()
    projectArray.push(newLast as HTMLElement)

    for (const [index, project] of projectArray.entries()) {
      project.style.setProperty('top', `-${index * 80}px`)
      project.style.setProperty('left', `${index * 300}px`)
    }

    setTimeout(() => {
      for (const [index, project] of projectArray.entries()) {
        project.style.setProperty('z-index', `${1000 - index}`)
      }
    }, 1000)
  }, 5000)
})

onUnmounted(() => {
  if (interval.value) {
    window.clearInterval(interval.value)
    interval.value = undefined
  }
})
</script>

<style lang="scss" scoped>
#projects {
  width: 100%;
  color: rgb(var(--c-background));
  background-color: rgb(var(--c-text));

  #projects-container {
    width: 80vw;
    padding: 8rem 0;
    margin: 0 auto;

    #project-carousel {
      position: relative;
      height: 500px;

      .project {
        position: absolute;
        width: 40vw;
        height: 500px;
        border-radius: 8px;
        overflow: hidden;
        background-color: rgb(var(--c-background));
        box-shadow: rgba(0, 0, 0, 0.25) 0px 7px 28px, rgba(0, 0, 0, 0.22) 0px 5px 10px;
        transition: all 1000ms ease-in;
        user-select: none;
        z-index: 999;

        @for $i from 1 through 11 {
          &:nth-child(#{$i}) {
            $i: $i - 1;
            top: $i * -80px;
            left: $i * 300px;
            z-index: 1000 - $i;
          }
        }

        &.dark {
          width: calc(40vw - 6px);
          height: calc(500px - 6px);
          background-color: rgb(var(--c-text));
          border: 3px solid rgb(var(--c-background));
        }

        &.padded {
          padding: 2rem;
          width: calc(40vw - 4rem);
          height: calc(500px - 4rem);
        }

        img {
          position: absolute;
          pointer-events: none;
        }
      }
    }
  }
}

@media only screen and (max-width: 1260px) {
  #projects {
    #projects-container {
      width: calc(100% - 4rem);
      padding: 8rem 2rem;

      #project-carousel {
        .project {
          width: 80vw;

          &.dark {
            width: calc(80vw - 6px);
          }

          &.padded {
            width: calc(80vw - 4rem);
          }
        }
      }
    }
  }
}
</style>
