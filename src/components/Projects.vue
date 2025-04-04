<template>
  <section id="projects" class="w-full overflow-x-hidden bg-black prose-invert">
    <div
      class="mx-auto box-border w-full max-w-screen-lg px-4 py-32 lg:w-[80vw]"
    >
      <h2>PROJECTS</h2>
      <div ref="projects" class="not-prose relative h-[512px]">
        <AppProject>
          <NuxtImg
            src="/img/projects/trbo.svg"
            alt="TRBO"
            class="size-[20vw] object-contain object-center"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }"
            loading="lazy"
          />
        </AppProject>
        <AppProject>
          <NuxtImg
            src="/img/projects/the-show-portal.webp"
            alt="The Show Portal"
            class="size-[20vw] object-contain object-center"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }"
            loading="lazy"
          />
        </AppProject>
        <AppProject>
          <NuxtImg
            src="/img/projects/catfish.webp"
            alt="Catfish"
            class="size-full object-cover object-center"
            loading="lazy"
          />
        </AppProject>
        <AppProject>
          <NuxtImg
            src="/img/projects/signal.webp"
            alt="Signal"
            class="size-[20vw] object-contain object-center"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }"
            loading="lazy"
          />
        </AppProject>
        <AppProject>
          <NuxtImg
            src="/img/projects/rogue-ocean.webp"
            alt="Rogue Ocean"
            class="size-full object-cover object-center"
            loading="lazy"
          />
        </AppProject>
        <AppProject>
          <NuxtImg
            src="/img/projects/wilsons-lawn-landscape.svg"
            alt="Wilson's Lawn and Landscape"
            class="size-[20vw] object-contain object-center"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }"
            loading="lazy"
          />
        </AppProject>
        <AppProject dark>
          <NuxtImg
            src="/img/projects/justin-time.svg"
            alt="Justin Time Tile & Design"
            class="size-[20vw] object-contain object-center"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }"
            loading="lazy"
          />
        </AppProject>
        <AppProject>
          <NuxtImg
            src="/img/projects/procar.svg"
            alt="Procar"
            class="size-[20vw] object-contain object-center"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }"
            loading="lazy"
          />
          <NuxtImg
            src="/img/projects/austin.svg"
            alt="Procar - Austin Track"
            class="left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 opacity-20"
            :style="{
              transform: 'scale(1.5)',
            }"
            loading="lazy"
          />
        </AppProject>
        <AppProject>
          <NuxtImg
            src="/img/projects/broken-heart-stables.svg"
            alt="Broken Heart Stables"
            class="size-[20vw] object-contain object-center"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }"
            loading="lazy"
          />
        </AppProject>
        <AppProject dark>
          <NuxtImg
            src="/img/projects/inorganic-audio.svg"
            alt="Inorganic Audio"
            class="size-[20vw] object-contain object-center"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }"
            loading="lazy"
          />
        </AppProject>
        <AppProject>
          <NuxtImg
            src="/img/projects/wyo-pruitt-writing.svg"
            alt="Wyo Pruitt Writing"
            class="size-[20vw] object-contain object-center"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }"
            loading="lazy"
          />
        </AppProject>
        <AppProject>
          <NuxtImg
            src="/img/projects/heidi-gross-ward-3.webp"
            alt="Heidi Gross Ward 3 Campaign"
            class="size-[20vw] object-contain object-center"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }"
            loading="lazy"
          />
        </AppProject>
        <AppProject>
          <NuxtImg
            src="/img/projects/nathan-mcleland-mayor.webp"
            alt="Nathan McLeland Mayoral Campaign"
            class="size-[20vw] object-contain object-center"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }"
            loading="lazy"
          />
        </AppProject>
      </div>
    </div>
  </section>
</template>

<script setup>
import { animate, spring } from 'motion'

const intervalMs = 4000
let now = 0
let then = 0
let frame = 0
let offset = 0

function update() {
  now = performance.now()

  if (now - then > intervalMs) {
    then = performance.now()

    const projects = document.querySelectorAll('[data-motion]')
    const length = projects.length

    offset = (offset + 1) % length

    projects.forEach((project, index) => {
      const adjustedIndex = (index - offset + length) % length

      project.dataset.index = adjustedIndex

      animate(
        project,
        {
          top: `${-80 * adjustedIndex}px`,
          left: `${300 * adjustedIndex}px`,
        },
        {
          type: spring,
          bounce: 0.4,
          duration: 1.8,
          onComplete() {
            const projects = Array.from(
              document.querySelectorAll('[data-motion]'),
            ).sort((a, b) => a.dataset.index - b.dataset.index)

            for (let i = 0; i < projects.length; ++i) {
              const project = projects[i]

              project.style.setProperty('z-index', `${1000 - i}`)
            }
          },
        },
      )
    })
  }

  frame = window.requestAnimationFrame(update)
}

onMounted(() => {
  const projects = document.querySelectorAll('[data-motion]')

  for (let i = 0; i < projects.length; ++i) {
    const project = projects[i]

    project.dataset.index = i
    project.style.setProperty('will-change', 'top, left')
    project.style.setProperty('top', `${-80 * i}px`)
    project.style.setProperty('left', `${300 * i}px`)
    project.style.setProperty('z-index', `${1000 - i}`)
  }

  for (let i = 0; i < projects.length; ++i) {
    projects[i].style.setProperty('opacity', 1)
  }

  frame = window.requestAnimationFrame(update)
})

onUnmounted(() => {
  if (frame) {
    window.cancelAnimationFrame(frame)
  }
})
</script>
