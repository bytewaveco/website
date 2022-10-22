<template>
  <entry-wrapper :class="`${name}--wrapper`">
    <entry-label
      :label="label"
      :label-for="name"
      :disabled="isDisabled"
    />
    <input
      v-model="internalValue"
      :tabindex="0"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :aria-label="label"
      :class="{ success: isSuccess, error: isError, disabled: isDisabled }"
      :disabled="isDisabled"
      :autocomplete="autocomplete"
    />
    <entry-hint
      :hint-text="hintText"
      :has-success="isSuccess"
      :has-error="isError"
      :disabled="isDisabled"
    />
  </entry-wrapper>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '#imports'

const instances = {}

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    statusMap: {
      type: Object,
      default: () => ({
        default: [() => [true, '']],
        success: [],
        error: [],
        disabled: [],
      }),
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    if (instances[props.type]) {
      instances[props.type]++
    } else {
      instances[props.type] = 0
    }

    const name = ref(`entry-${props.type}-${instances[props.type]}`)
    const internalValue = ref(props.modelValue)
    const isDisabled = ref(false)
    const isError = ref(false)
    const isSuccess = ref(false)
    const isDefault = ref(false)
    const hintText = ref('')

    /**
     * Set the input status based on the status map.
     */
    function setStatus() {
      isDisabled.value = false
      isError.value = false
      isSuccess.value = false
      isDefault.value = false

      for (const statusType of ['disabled', 'error', 'success', 'default']) {
        let statusFound = false

        if (Array.isArray(props.statusMap[statusType])) {
          for (const [condition, hint] of props.statusMap[statusType]) {
            if (typeof condition === 'function' && condition()) {
              hintText.value = hint

              switch (statusType) {
                case 'disabled':
                  isDisabled.value = true
                  break
                case 'error':
                  isError.value = true
                  break
                case 'success':
                  isSuccess.value = true
                  break
                case 'default':
                  isDefault.value = true
                  break
              }

              statusFound = true
              break
            }
          }

          if (statusFound) {
            break
          }
        }
      }
    }

    /**
     * Update the model value.
     */
    const updateValue = useDebounceFn(() => {
      emit('update:modelValue', internalValue.value)
      setStatus()
    }, 300)

    setStatus()

    watch(internalValue, updateValue)

    return { name, hintText, internalValue, isDisabled, isError, isSuccess, isDefault }
  },
})
</script>

<style lang="scss">
input {
  appearance: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1rem;
  margin: 0;
  background-color: transparent;
  color: rgb(var(--c-text));
  border: 1px solid rgba(var(--c-text), 0.9);
  border-radius: 4px;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    $box-shadow: 0 0 0 64px rgb(var(--c-background)) inset !important;
    box-shadow: $box-shadow;
    -webkit-box-shadow: $box-shadow;
  }

  &::placeholder {
    color: rgb(var(--c-text));
    opacity: 0.8;
  }

  &:focus {
    border-color: rgb(var(--c-text));
  }

  &:disabled {
    border-color: rgba(var(--c-text), 0.4);
    color: rgba(var(--c-text), 0.4);
    cursor: not-allowed;
  }

  &[disabled]::placeholder {
    color: rgba(var(--c-text), 0.4);
  }

  &.error {
    border-color: rgb(var(--c-error));
    color: rgb(var(--c-error));

    &::placeholder {
      color: rgb(var(--c-error));
    }
  }

  &.success {
    border-color: rgb(var(--c-success));
    color: rgb(var(--c-success));

    &::placeholder {
      color: rgb(var(--c-success));
    }
  }
}
</style>
