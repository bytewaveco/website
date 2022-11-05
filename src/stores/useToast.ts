import { v4 } from 'uuid'

let toastNumber = 0

export const useToast = definePiniaStore('toast', {
  state: () => ({
    durationMs: 5000,
    toastMap: {} as Record<string, Toast & { timeout?: number }>,
  }),
  getters: {
    toasts(): Toast[] {
      return Object.values(this.toastMap).sort((a, b) => a.order - b.order)
    },
  },
  actions: {
    removeNow(ref: string) {
      if (this.toastMap[ref]) {
        if (typeof this.toastMap[ref].timeout === 'number') {
          clearTimeout(this.toastMap[ref].timeout)
        }

        delete this.toastMap[ref]
      }
    },
    removeInFuture(ref: string) {
      this.toastMap[ref].timeout = window.setTimeout(() => {
        if (this.toastMap[ref]) {
          delete this.toastMap[ref]
        }
      }, this.durationMs)
    },
    doToast(message: string, variant: ToastType) {
      const ref = v4()

      this.toastMap[ref] = {
        ref,
        message,
        variant,
        order: toastNumber++,
      }

      this.removeInFuture(ref)
    },
    info(message: string) {
      this.doToast(message, 'info')
    },
    success(message: string) {
      this.doToast(message, 'success')
    },
    warning(message: string) {
      this.doToast(message, 'warning')
    },
    error(message: string) {
      this.doToast(message, 'error')
    },
  },
})
