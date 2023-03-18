import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public

  if (config.isAnalyticsEnabled) {
    nuxtApp.vueApp.use(
      createGtm({
        id: config.googleAnalyticsId,
        defer: false,
        compatibility: false,
        enabled: true,
        debug: false,
        loadScript: true,
        vueRouter: useRouter(),
        trackOnNextTick: false,
      }),
    )
  }
})
