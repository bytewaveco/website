<template>
  <div class="relative h-[512px]">
    <NuxtImg
      src="/img/water.webp"
      height="500"
      alt="Moody water"
      class="absolute pointer-events-none h-[500px] w-full object-cover z-10"
      loading="lazy"
    />
    <div ref="waterCta" class="opacity-10 z-0">
      <div
        class="!m-0 text-blue-500 absolute left-0 right-0 grid gap-2 items-center justify-center"
        :style="{
          top: `${waterCtaY}px`,
        }"
      >
        <h4 class="!m-0">SCROLL DOWN</h4>
        <div class="flex gap-2 mx-auto">
          <UIcon name="ph:arrow-down" class="text-blue-500" />
          <UIcon name="ph:arrow-down" class="text-blue-500" />
          <UIcon name="ph:arrow-down" class="text-blue-500" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { animate } from 'motion'

const waterCta = useTemplateRef('waterCta')
const waterCtaBounds = useElementBounding(waterCta)
const { y: scrollY } = useScroll(window)
const waterCtaY = computed(() =>
  Math.max(
    -80,
    Math.min(
      250 - 4 * waterCtaBounds.height.value,
      -80 + scrollY.value - waterCtaBounds.y.value,
    ),
  ),
)

onMounted(() => {
  animate(
    waterCta.value,
    {
      opacity: 1,
    },
    {
      duration: 2,
      repeat: Infinity,
      repeatType: 'mirror',
    },
  )
})
</script>
