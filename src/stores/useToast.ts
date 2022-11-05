import { type Stoppable } from '@vueuse/core'
import { v4 } from 'uuid'

let toastNumber = 0

export const useToast = definePiniaStore('toast', {
  state: () => ({
    delayMs: 200,
    durationMs: 5000,
    toastMap: {} as Record<string, Toast & { timeout?: Stoppable }>,
    toasts: [] as Toast[],
  }),
  actions: {
    setToasts() {
      this.toasts = Object.values(this.toastMap).sort((a, b) => a.order - b.order)
    },
    holdToast(ref: string) {
      this.toastMap[ref]?.timeout?.stop()
    },
    unholdToast(ref: string) {
      this.toastMap[ref]?.timeout?.start()
    },
    removeNow(ref: string) {
      const onBeforeRemoveEvent = new CustomEvent('toast-before-remove', {
        detail: {
          ref,
        },
      })

      window.dispatchEvent(onBeforeRemoveEvent)

      setTimeout(() => {
        this.toastMap[ref]?.timeout?.stop()
        delete this.toastMap[ref]

        this.setToasts()
      }, this.delayMs)
    },
    removeInFuture(ref: string) {
      this.toastMap[ref].timeout = useTimeoutFn(() => {
        this.removeNow(ref)
        // Total duration minus the symmetric entry and exit animation durations
      }, this.durationMs - 2 * this.delayMs)
    },
    doToast(message: string, variant: ToastType) {
      const ref = v4()

      this.toastMap[ref] = {
        ref,
        message,
        variant,
        order: toastNumber++,
      }

      this.setToasts()

      this.removeInFuture(ref)

      return this.toastMap[ref]
    },
    info(message: string) {
      return this.doToast(message, 'info')
    },
    success(message: string) {
      return this.doToast(message, 'success')
    },
    warning(message: string) {
      return this.doToast(message, 'warning')
    },
    error(message: string) {
      return this.doToast(message, 'error')
    },
  },
})
