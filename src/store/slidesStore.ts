import { defineStore } from 'pinia'

export const slidesStore = defineStore('slidesStore', {
  state: (): SlidesStore => ({
    slides: [],
    slideSize: {
      width: 0,
      height: 0,
    },
    scrollPosition: 0,
    scrollRange: [0, 0],
    raf: undefined,
    targetY: 0,
    touchStartY: 0,
    ease: 0.075,
  }),
  getters: {
    numberSlides(state) {
      return state.slides.length
    },
    activeSlide(state) {
      return Math.max(0, state.slides.indexOf(useRoute()?.path))
    },
  },
  actions: {
    setScrollRange() {
      if (this.numberSlides > 0) {
        this.scrollRange[1] = this.slideSize.height * this.numberSlides
      }
    },
    onWheel(event: WheelEvent) {
      this.targetY = Math.max(
        this.scrollRange[0],
        Math.min(this.scrollRange[1], this.targetY + event.deltaY)
      )
      this.startAnimation()
    },
    onTouchstart(event: TouchEvent) {
      if (event.touches.length > 0) {
        this.touchStartY = event.touches[0].pageY
      }
    },
    onTouchmove(event: TouchEvent) {
      if (event.touches.length > 0) {
        this.targetY = Math.max(
          this.scrollRange[0],
          Math.min(
            this.scrollRange[1],
            this.targetY + (this.touchStartY - event.touches[0].pageY) * 0.05
          )
        )
        this.startAnimation()
      }
    },
    setScrollPosition(position: number, route = true) {
      if (position < this.scrollRange[0]) {
        this.scrollPosition = this.scrollRange[0]
      } else if (position > this.scrollRange[1]) {
        this.scrollPosition = this.scrollRange[1]
      } else {
        this.scrollPosition = position
      }

      this.setScrollRange()

      if (route) {
        const newRoute =
          this.slides[
            Math.min(
              this.numberSlides - 1,
              Math.max(0, Math.floor(this.scrollPosition / this.slideSize.height))
            )
          ]

        if (newRoute !== useRoute().path) {
          useRouter().push(newRoute)
        }
      }

      document.documentElement.style.setProperty(
        '--slide-manager-scroll-position',
        `${(this.scrollPosition / this.scrollRange[1]) * 100}%`
      )
    },
    toTarget(target: number, route = true) {
      this.cancelAnimation()

      document.documentElement.style.setProperty('--slide-animation-duration', '0s')

      this.targetY = target

      this.setScrollPosition(this.targetY, route)

      setTimeout(() => {
        document.documentElement.style.removeProperty('--slide-animation-duration')
      }, 100)
    },
    prevSlide() {
      if (this.activeSlide >= 0) {
        this.toTarget(this.slideSize.height * (this.activeSlide - 1))
      }
    },
    nextSlide() {
      if (this.activeSlide < this.numberSlides - 1) {
        this.toTarget(this.slideSize.height * (this.activeSlide + 1))
      }
    },
    goToSlideByRoute(path: string, route = false) {
      if (this.slides.includes(path)) {
        this.toTarget(this.slideSize.height * this.slides.indexOf(path), route)
      }
    },
    cancelAnimation() {
      if (this.raf) {
        cancelAnimationFrame(this.raf)
        this.raf = undefined
      }
    },
    animate() {
      const diff = this.targetY - this.scrollPosition
      const delta = Math.abs(diff) < 0.1 ? 0 : diff * this.ease

      if (delta !== 0) {
        this.scrollPosition += delta
        this.scrollPosition = parseFloat(this.scrollPosition.toFixed(2))
        this.raf = requestAnimationFrame(this.animate.bind(this))
      } else {
        this.scrollPosition = this.targetY
        this.cancelAnimation()
      }

      this.setScrollPosition(this.scrollPosition)
    },
    startAnimation() {
      if (typeof this.raf === 'undefined') {
        this.raf = requestAnimationFrame(this.animate.bind(this))
      }
    },
  },
})
