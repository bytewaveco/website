<template>
  <section id="projects" w-full text-white bg-black>
    <div class="mx-auto box-border w-full max-w-[992px] px-4 py-32 lg:w-[80vw]">
      <h2>PROJECTS</h2>
      <div ref="projects" class="relative h-[500px]">
        <AppProject>
          <NuxtImg
            src="/img/projects/trbo.svg"
            alt="TRBO"
            class="size-[20vw] object-contain object-center"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }"
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
          />
        </AppProject>
        <AppProject>
          <NuxtImg
            src="/img/projects/catfish.webp"
            alt="Catfish"
            class="size-full object-contain object-center"
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
          />
        </AppProject>
        <AppProject>
          <NuxtImg
            src="/img/projects/rogue-ocean.webp"
            alt="Rogue Ocean"
            class="size-full object-cover object-center"
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
          />
          <NuxtImg
            src="/img/projects/austin.svg"
            alt="Procar - Austin Track"
            class="left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 opacity-20"
            :style="{
              transform: 'scale(1.5)',
            }"
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
          />
        </AppProject>
      </div>
    </div>
  </section>
</template>

<script setup>
import { animate } from 'motion/mini'
import { spring } from 'motion'

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

      animate(
        project,
        {
          top: `-${adjustedIndex * 80}px`,
          left: `${adjustedIndex * 300}px`,
        },
        {
          type: spring,
          bounce: 0.3,
          duration: 2,
        },
      )
    })
  }

  frame = window.requestAnimationFrame(update)
}

onMounted(() => {
  frame = window.requestAnimationFrame(update)
})

onUnmounted(() => {
  if (frame) {
    window.cancelAnimationFrame(frame)
  }
})
</script>

<style lang="scss" scoped>
:deep(.project) {
  @for $i from 1 through 12 {
    &:nth-child(#{$i}) {
      $i: $i - 1;

      will-change: top, left;
      top: $i * -80px;
      left: $i * 300px;
      z-index: 1000 - $i;
    }
  }
}
</style>
