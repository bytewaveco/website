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
  }),
  actions: {
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
  },
});
