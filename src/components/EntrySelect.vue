<template>
  <entry-wrapper :class="`${name}--wrapper`">
    <entry-label
      :label="label"
      :label-for="name"
      :disabled="status.isDisabled"
    />
    <select
      v-model="internalValue"
      :tabindex="0"
      :name="name"
      :placeholder="placeholder"
      :aria-label="label"
      :class="{
        success: status.isSuccess,
        error: status.isError,
        disabled: status.isDisabled,
      }"
      :disabled="status.isDisabled"
    >
      <option
        value=""
        disabled
      >
        {{ placeholder }}
      </option>
      <slot />
    </select>
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

let instance = 0

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
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
    const name = ref(`entry-select-${instance++}`)
    const internalValue = ref(props.modelValue)
    let status = reactive(useEntryStatus(props.statusMap))

    /**
     * Update the model value.
     */
    function updateValue() {
      emit('update:modelValue', internalValue.value)
      status = reactive(useEntryStatus(props.statusMap))
    }

    watch(internalValue, updateValue)

    return { name, internalValue, status }
  },
})
</script>

<style lang="scss" scoped>
select {
  appearance: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1rem;
  margin: 0;
  background-color: transparent;
  color: rgba(var(--c-text), 0.9);
  border: 1px solid rgba(var(--c-text), 0.9);
  border-radius: 4px;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' \
  width='20' height='20' viewBox='0 0 256 256'%3E%3Cpath fill='currentColor' \
  d='M128 184a8.5 8.5 0 0 1-5.7-2.3l-80-80a8.1 8.1 0 0 1 11.4-11.4l74.3 \
  74.4l74.3-74.4a8.1 8.1 0 0 1 11.4 11.4l-80 80a8.5 8.5 0 0 1-5.7 2.3Z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 99.5% 50%;

  &:focus {
    color: rgb(var(--c-text));
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
}

option:disabled {
  color: rgb(var(--c-text));
  opacity: 0.8;
}
</style>
