import { defineStore } from 'pinia';

export const useSlideManager = defineStore('slideManager', {
  state: (): SlideManagerStore => ({
    activeSlide: 1,
    numberSlides: 0,
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
  actions: {
    onWheel(event: WheelEvent) {
      this.targetY = Math.max(
        this.scrollRange[0],
        Math.min(this.scrollRange[1], this.targetY + event.deltaY)
      );
      this.startAnimation();
    },
    onTouchstart(event: TouchEvent) {
      if (event.touches.length > 0) {
        this.touchStartY = event.touches[0].pageY;
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
        );
        this.startAnimation();
      }
    },
    prevSlide() {
      this.cancelAnimation();

      document.documentElement.style.setProperty('--slide-animation-duration', '0s');

      this.targetY = this.slideSize.height * (this.activeSlide - 2);

      this.setScrollPosition(this.slideSize.height * (this.activeSlide - 2));

      setTimeout(() => {
        document.documentElement.style.removeProperty('--slide-animation-duration');
      }, 100);
    },
    nextSlide() {
      if (this.activeSlide < this.numberSlides) {
        this.cancelAnimation();

        document.documentElement.style.setProperty('--slide-animation-duration', '0s');

        this.targetY = this.slideSize.height * this.activeSlide;

        this.setScrollPosition(this.slideSize.height * this.activeSlide);

        setTimeout(() => {
          document.documentElement.style.removeProperty('--slide-animation-duration');
        }, 100);
      }
    },
    setScrollRange() {
      const slides = document.getElementsByClassName('slide');
      this.numberSlides = slides.length;

      if (this.numberSlides) {
        const slideBounds = slides[0].getBoundingClientRect();

        this.slideSize = {
          width: slideBounds.width,
          height: slideBounds.height,
        };

        this.scrollRange[1] = this.slideSize.height * this.numberSlides;
      }
    },
    setScrollPosition(position: number) {
      if (position < this.scrollRange[0]) {
        this.scrollPosition = this.scrollRange[0];
      } else if (position > this.scrollRange[1]) {
        this.scrollPosition = this.scrollRange[1];
      } else {
        this.scrollPosition = position;
      }

      this.activeSlide =
        Math.min(
          this.numberSlides - 1,
          Math.max(0, Math.floor(this.scrollPosition / this.slideSize.height))
        ) + 1;

      document.documentElement.style.setProperty(
        '--slide-manager-scroll-position',
        `${(this.scrollPosition / this.scrollRange[1]) * 100}%`
      );
    },
    addToScrollPosition(amount: number) {
      this.setScrollPosition(this.scrollPosition + amount);
    },
    cancelAnimation() {
      if (this.raf) {
        cancelAnimationFrame(this.raf);
        this.raf = undefined;
      }
    },
    animate() {
      const diff = this.targetY - this.scrollPosition;
      const delta = Math.abs(diff) < 0.1 ? 0 : diff * this.ease;

      if (delta !== 0) {
        this.scrollPosition += delta;
        this.scrollPosition = parseFloat(this.scrollPosition.toFixed(2));
        this.raf = requestAnimationFrame(this.animate.bind(this));
      } else {
        this.scrollPosition = this.targetY;
        this.cancelAnimation();
      }

      this.setScrollPosition(this.scrollPosition);
    },
    startAnimation() {
      if (typeof this.raf === 'undefined') {
        this.raf = requestAnimationFrame(this.animate.bind(this));
      }
    },
  },
});
