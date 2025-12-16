<template>
  <div class="relative h-[512px]">
    <NuxtImg
      src="/img/water.webp"
      height="500"
      alt="Moody water"
      class="pointer-events-none absolute z-10 h-[500px] w-full object-cover"
      loading="lazy"
    />
    <div ref="waterCta" class="z-0 opacity-10">
      <div
        class="absolute right-0 left-0 !m-0 grid items-center justify-center gap-2 text-blue-500"
        :style="{
          top: `${waterCtaY}px`,
        }"
      >
        <h4 class="!m-0">SCROLL DOWN</h4>
        <div class="mx-auto flex gap-2">
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
