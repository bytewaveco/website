<template>
  <section id="projects" w-full text-white bg-black>
    <div
      :class="{
        'w-full': true,
        'max-w-[992px]': true,
        'py-32': true,
        'px-4': true,
        'mx-auto': true,
        'box-border': true,
        'lg:w-[80vw]': true,
      }">
      <h2>PROJECTS</h2>
      <div ref="projects" :class="{ relative: true, 'h-[500px]': true }">
        <app-project>
          <img
            src="~/assets/img/projects/the-show-portal.webp"
            alt="The Show Portal"
            :class="{
              'w-[20vw]': true,
              'h-[20vw]': true,
              'object-contain': true,
              'object-center': true,
            }"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }" />
          />
        </app-project>
        <app-project>
          <img
            src="~/assets/img/projects/catfish.webp"
            alt="Catfish"
            :class="{
              'w-full': true,
              'h-full': true,
              'object-cover': true,
              'object-center': true,
            }" />
          />
        </app-project>
        <app-project>
          <img
            src="~/assets/img/projects/procar.svg"
            alt="Procar"
            :class="{
              'w-[20vw]': true,
              'h-[20vw]': true,
              'object-contain': true,
              'object-center': true,
            }"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }" />
          <img
            src="~/assets/img/projects/austin.svg"
            alt="Procar - Austin Track"
            :class="{
              'w-[80vw]': true,
              'object-contain': true,
              'object-center': true,
              'opacity-20': true,
            }"
            :style="{
              top: 'calc(50% - 40vw)',
              left: 'calc(50% - 40vw)',
            }" />
        </app-project>
        <app-project>
          <img
            src="~/assets/img/projects/signal.webp"
            alt="Signal"
            :class="{
              'w-[20vw]': true,
              'h-[20vw]': true,
              'object-contain': true,
              'object-center': true,
            }"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }" />
        </app-project>
        <app-project>
          <img
            src="~/assets/img/projects/rogue-ocean.webp"
            alt="Rogue Ocean"
            :class="{
              'w-full': true,
              'h-full': true,
              'object-cover': true,
              'object-center': true,
            }" />
        </app-project>
        <app-project>
          <img
            src="~/assets/img/projects/wilsons-lawn-landscape.svg"
            alt="Wilson's Lawn and Landscape"
            :class="{
              'w-[20vw]': true,
              'h-[20vw]': true,
              'object-contain': true,
              'object-center': true,
            }"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }" />
        </app-project>
        <app-project dark>
          <img
            src="~/assets/img/projects/justin-time.svg"
            alt="Justin Time Tile & Design"
            :class="{
              'w-[20vw]': true,
              'h-[20vw]': true,
              'object-contain': true,
              'object-center': true,
            }"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }" />
        </app-project>
        <app-project>
          <img
            src="~/assets/img/projects/broken-heart-stables.svg"
            alt="Broken Heart Stables"
            :class="{
              'w-[20vw]': true,
              'h-[20vw]': true,
              'object-contain': true,
              'object-center': true,
            }"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }" />
        </app-project>
        <app-project dark>
          <img
            src="~/assets/img/projects/inorganic-audio.svg"
            alt="Inorganic Audio"
            :class="{
              'w-[20vw]': true,
              'h-[20vw]': true,
              'object-contain': true,
              'object-center': true,
            }"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }" />
        </app-project>
        <app-project>
          <img
            src="~/assets/img/projects/wyo-pruitt-writing.svg"
            alt="Wyo Pruitt Writing"
            :class="{
              'w-[20vw]': true,
              'h-[20vw]': true,
              'object-contain': true,
              'object-center': true,
            }"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }" />
        </app-project>
        <app-project>
          <img
            src="~/assets/img/projects/heidi-gross-ward-3.webp"
            alt="Heidi Gross Ward 3 Campaign"
            :class="{
              'w-[20vw]': true,
              'h-[20vw]': true,
              'object-contain': true,
              'object-center': true,
            }"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }" />
        </app-project>
        <app-project>
          <img
            src="~/assets/img/projects/nathan-mcleland-mayor.webp"
            alt="Nathan McLeland Mayoral Campaign"
            :class="{
              'w-[20vw]': true,
              'h-[20vw]': true,
              'object-contain': true,
              'object-center': true,
            }"
            :style="{
              top: 'calc(50% - 10vw)',
              left: 'calc(50% - 10vw)',
            }" />
        </app-project>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const interval = ref<number>()
const projects = ref<HTMLDivElement>()

onMounted(() => {
  const projectElements = projects.value?.querySelectorAll<HTMLElement>('.project')

  if (projectElements) {
    const projectArray = Array.from(projectElements)

    interval.value = window.setInterval(() => {
      const newLast = projectArray.shift()
      projectArray.push(newLast as HTMLElement)

      newLast?.classList.add('blur')

      for (const [index, project] of projectArray.entries()) {
        project.style.setProperty('top', `-${index * 80}px`)
        project.style.setProperty('left', `${index * 300}px`)
      }

      setTimeout(() => {
        newLast?.classList.remove('blur')

        for (const [index, project] of projectArray.entries()) {
          project.style.setProperty('z-index', `${1000 - index}`)
        }
      }, 1000)
    }, 5000)
  }
})

onUnmounted(() => {
  if (interval.value) {
    window.clearInterval(interval.value)
    interval.value = undefined
  }
})
</script>

<style lang="scss" scoped>
:deep(.project) {
  @for $i from 1 through 11 {
    &:nth-child(#{$i}) {
      $i: $i - 1;
      top: $i * -80px;
      left: $i * 300px;
      z-index: 1000 - $i;
    }
  }

  &.blur {
    animation: blur 600ms ease-in forwards;
  }

  img {
    position: absolute;
    pointer-events: none;
  }
}

@keyframes blur {
  100% {
    filter: blur(2px);
  }
}
</style>
