declare interface SlidesStore {
  slides: string[]
  slideSize: {
    width: number
    height: number
  }
  scrollPosition: number
  scrollRange: [number, number]
  raf: number | undefined
  targetY: number
  touchStartY: number
  ease: number
}
