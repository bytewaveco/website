<template>
  <div
    ref="toastElement"
    :class="{
      toast: true,
      'toast--success': variant === 'success',
      'toast--warning': variant === 'warning',
      'toast--error': variant === 'error',
      'toast--info': variant === 'info',
    }"
    :style="{
      '--toast-duration': `${toast.durationMs}ms`,
      '--toast-offset': `${offset * 100}%`,
    }"
    @click.stop.prevent="toast.removeNow(refId)"
  >
    <icon
      v-if="variant === 'success'"
      name="ph:check-circle"
    />
    <icon
      v-if="variant === 'error'"
      name="ph:x-circle"
    />
    <icon
      v-if="variant === 'warning'"
      name="ph:warning"
    />
    <icon
      v-if="variant === 'info'"
      name="ph:info"
    />
    {{ message }}
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    refId: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    offset: {
      type: Number,
      required: true,
    },
    variant: {
      type: String,
      required: true,
      validator: (value: string) =>
        ['success', 'error', 'warning', 'info'].includes(value),
    },
  },
  setup() {
    const toastElement = ref(null)
    const toast = useToast()

    return {
      toastElement,
      toast,
    }
  },
})
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 1rem;
  left: 50%;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  min-width: calc(20vw - 4rem);
  max-width: calc(100vw - 4rem);
  color: rgb(var(--c-text));
  background-color: rgb(var(--c-background));
  padding: 1rem 2rem 1rem 1.5rem;
  border-radius: 4px;
  box-shadow: var(--shadow-1);
  cursor: pointer;
  transition: all 130ms ease-in-out;
  animation: appear-and-fade var(--toast-duration) ease-in-out;
  transform: translateX(-50%) translateY(-100%);
  filter: blur(10px);
  opacity: 0;
  z-index: 999;

  &:hover {
    filter: brightness(110%);
  }

  &.toast--success {
    color: rgb(var(--c-background));
    background-color: rgb(var(--c-success));
  }

  &.toast--warning {
    color: rgb(var(--c-background));
    background-color: rgb(var(--c-info));
  }

  &.toast--error {
    color: rgb(var(--c-background));
    background-color: rgb(var(--c-error));
  }
}

@keyframes appear-and-fade {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-100%);
    filter: blur(10px);
  }
  10% {
    opacity: 1;
    transform: translateX(-50%) translateY(var(--toast-offset));
    filter: blur(0px);
  }
  95% {
    opacity: 1;
    transform: translateX(-50%) translateY(var(--toast-offset));
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(var(--toast-offset));
    filter: blur(10px);
  }
}
</style>
