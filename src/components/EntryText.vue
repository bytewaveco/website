<template>
  <entry-wrapper :class="`${name}--wrapper`">
    <entry-label
      :label="label"
      :label-for="name"
      :disabled="status.isDisabled"
    />
    <input
      v-model="internalValue"
      :tabindex="0"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :aria-label="label"
      :class="{
        success: status.isSuccess,
        error: status.isError,
        disabled: status.isDisabled,
      }"
      :disabled="status.isDisabled"
      :autocomplete="autocomplete"
    />
    <entry-hint
      :hint-text="status.hintText"
      :has-success="status.isSuccess"
      :has-error="status.isError"
      :disabled="status.isDisabled"
    />
  </entry-wrapper>
</template>

<script lang="ts">
// These are needed for storybook until we get some better working auto import plugins
import useEntryStatus from '@/composables/useEntryStatus'
import { useDebounceFn } from '@vueuse/core'

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
    let status = reactive(useEntryStatus(props.statusMap))

    /**
     * Update the model value.
     */
    const updateValue = useDebounceFn(() => {
      emit('update:modelValue', internalValue.value)
      status = reactive(useEntryStatus(props.statusMap))
    }, 300)

    watch(internalValue, updateValue)

    return {
      name,
      internalValue,
      status,
    }
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
