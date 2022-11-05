declare type ToastType = 'success' | 'error' | 'warning' | 'info'

declare interface Toast {
  ref: string
  message: string
  variant: ToastType
  order: number
}
