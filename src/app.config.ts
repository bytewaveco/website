export default defineAppConfig({
  uiPro: {
    pageLogos: {
      slots: {
        root: 'relative overflow-hidden',
        title: 'text-lg text-center font-semibold text-(--ui-text-highlighted)',
        logos: 'mt-0',
        logo: 'size-10 shrink-0 !justify-start',
      },
      variants: {
        marquee: {
          false: {
            logos:
              'flex items-center shrink-0 gap-(--gap) [--gap:--spacing(16)]',
          },
        },
      },
    },
  },
})
