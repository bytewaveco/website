<template>
  <div
    :class="{
      toast: true,
      [`toast--${toast.variant}`]: true,
      'toast--removing': isRemoving,
    }"
    :style="{ '--toast-delay': `${toastService.delayMs}ms` }"
    @mouseenter.stop.prevent="handleMouseenter"
    @mouseleave.stop.prevent="handleMouseleave"
    @click.stop.prevent="toastService.removeNow(toast.ref)"
  >
    <icon
      v-if="toast.variant === 'success'"
      name="ph:check-circle"
    />
    <icon
      v-if="toast.variant === 'error'"
      name="ph:x-circle"
    />
    <icon
      v-if="toast.variant === 'warning'"
      name="ph:warning"
    />
    <icon
      v-if="toast.variant === 'info'"
      name="ph:info"
    />
    <span>{{ toast.message }}</span>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    toast: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const toastService = useToast()
    const isHovered = ref(false)
    const isRemoving = ref(false)

    function onBeforeRemove(event: CustomEvent) {
      if (event.detail.ref === props.toast.ref) {
        isRemoving.value = true
      }
    }

    function handleMouseenter() {
      isHovered.value = true
      toastService.holdToast(props.toast.ref)
    }

    function handleMouseleave() {
      isHovered.value = false
      toastService.unholdToast(props.toast.ref)
    }

    return {
      toastService,
      isHovered,
      isRemoving,
      onBeforeRemove,
      handleMouseenter,
      handleMouseleave,
    }
  },
  mounted() {
    window.addEventListener(
      'toast-before-remove',
      this.onBeforeRemove.bind(this) as EventListener,
      false
    )
  },
  unmounted() {
    window.removeEventListener(
      'toast-before-remove',
      this.onBeforeRemove.bind(this) as EventListener,
      false
    )
  },
})
</script>

<style lang="scss" scoped>
.toast {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 0.5rem;
  width: calc(100% - 3.5rem);
  color: rgb(var(--c-text));
  background-color: rgb(var(--c-background));
  padding: 1rem 2rem 1rem 1.5rem;
  border-radius: 4px;
  box-shadow: var(--shadow-2);
  cursor: pointer;
  transition: all var(--toast-delay) ease-in-out;
  animation: appear var(--toast-delay) ease-in-out forwards;
  filter: blur(10px);
  opacity: 0;
  overflow: hidden;

  &:hover {
    box-shadow: var(--shadow-0);

    &::before {
      opacity: 0;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.05);
      animation: brighten 130ms ease-in-out forwards;
    }
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

  &.toast--removing {
    animation: disappear var(--toast-delay) ease-in-out forwards;
  }

  svg {
    width: 20px;
    height: 20px;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
}

@keyframes disappear {
  0% {
    opacity: 1;
    filter: blur(0);
  }
  100% {
    opacity: 0;
    filter: blur(10px);
  }
}

@keyframes brighten {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
