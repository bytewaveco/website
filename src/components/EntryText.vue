<template>
  <entry-wrapper :class="`${name}--wrapper`">
    <entry-label
      :label="`${label}${required ? '*' : ''}`"
      :label-for="name"
      :disabled="status[0] === 'disabled'"
    />
    <input
      v-model="internalValue"
      :tabindex="0"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :aria-label="label"
      :class="`entry-input entry-input--${status[0]}`"
      :disabled="status[0] === 'disabled'"
      :autocomplete="autocomplete"
    />
    <entry-hint
      :type="status[0]"
      :hint-text="status[1]"
    />
  </entry-wrapper>
</template>

<script lang="ts">
// These are needed for storybook until we get some better working auto import plugins
import useEntryStatus from '@/composables/useEntryStatus'
import { useDebounceFn } from '@vueuse/core'

const instances: Record<string, number> = {}

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
    required: {
      type: Boolean,
      default: false,
    },
    statusMap: {
      type: Object,
      default: () => ({
        default: [[() => true, '']],
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
    const status = ref(useEntryStatus(props.statusMap, internalValue.value))

    watch(
      internalValue,
      useDebounceFn((updatedValue) => {
        status.value = useEntryStatus(props.statusMap, internalValue.value)
        emit('update:modelValue', updatedValue)
      }, 300) as (updatedValue: string) => void
    )

    return {
      name,
      internalValue,
      status,
    }
  },
  watch: {
    modelValue: {
      handler(update) {
        if (update !== this.internalValue) {
          this.internalValue = update
        }
      },
      immediate: true,
    },
    statusMap: {
      handler(update) {
        this.status = useEntryStatus(update, this.internalValue)
      },
      deep: true,
      immediate: true,
    },
  },
})
</script>

<style lang="scss" scoped>
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

  &:-webkit-autofill {
    -webkit-text-fill-color: rgb(var(--c-text));
  }

  &:-webkit-autofill:focus {
    -webkit-text-fill-color: rgb(var(--c-text));
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

    &:-webkit-autofill {
      -webkit-text-fill-color: rgba(var(--c-text), 0.4);
    }

    &:-webkit-autofill:focus {
      -webkit-text-fill-color: rgba(var(--c-text), 0.4);
    }
  }

  &[disabled]::placeholder {
    color: rgba(var(--c-text), 0.4);
  }

  &.entry-input--error {
    border-color: rgb(var(--c-error));
    color: rgb(var(--c-error));

    &:-webkit-autofill {
      -webkit-text-fill-color: rgb(var(--c-error));
    }

    &:-webkit-autofill:focus {
      -webkit-text-fill-color: rgb(var(--c-error));
    }

    &::placeholder {
      color: rgb(var(--c-error));
    }
  }

  &.entry-input--success {
    border-color: rgb(var(--c-success));
    color: rgb(var(--c-success));

    &:-webkit-autofill {
      -webkit-text-fill-color: rgb(var(--c-success));
    }

    &:-webkit-autofill:focus {
      -webkit-text-fill-color: rgb(var(--c-success));
    }

    &::placeholder {
      color: rgb(var(--c-success));
    }
  }
}
</style>
