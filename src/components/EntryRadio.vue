<template>
  <entry-wrapper :class="`${name}--wrapper`">
    <entry-label
      :label="label"
      :label-for="name"
      :disabled="status.isDisabled"
    />
    <div class="entry-radio--options">
      <div
        v-for="(option, index) in (options as Array<{ label: string; value: string }>)"
        :key="index"
        class="entry-radio--option"
      >
        <input
          :id="`${name}--${index}`"
          type="radio"
          :name="name"
          :aria-label="label"
          :value="option.value"
          :disabled="status.isDisabled"
        />
        <label :for="`${name}--${index}`">{{ option.label }}</label>
      </div>
    </div>
    <entry-hint
      :hint-text="status.hintText"
      :has-success="status.isSuccess"
      :has-error="status.isError"
      :disabled="status.isDisabled"
    />
  </entry-wrapper>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '#imports'

let instance = 0

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
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
        default: [() => [true, '']],
      }),
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const name = ref(`entry-radio-${instance++}`)
    const internalValue = ref(props.modelValue)
    const status = ref(useEntryStatus(props.statusMap))

    /**
     * Update the model value.
     */
    function updateValue() {
      emit('update:modelValue', internalValue.value)
      status.value = useEntryStatus(props.statusMap)
    }

    watch(internalValue, updateValue)

    return { name, internalValue, status }
  },
})
</script>

<style lang="scss" scoped>
.entry-radio--options {
  display: grid;
  grid-template-columns: auto;
  row-gap: 4px;
  width: fit-content;

  .entry-radio--option {
    display: grid;
    grid-template-columns: 1.5rem auto;
    column-gap: 4px;
    align-items: center;
    width: fit-content;
    padding-left: 0.5rem;

    input[type='radio'] {
      display: grid;
      place-content: center;
      appearance: none;
      outline: none;
      background-color: rgb(var(--c-background));
      margin: 0;
      font: inherit;
      color: currentColor;
      width: 1em;
      height: 1em;
      border: 1px solid currentColor;
      border-radius: 50%;
      transform: translateY(-0.075em);

      &:focus {
        outline: max(2px, 1px) solid currentColor;
        outline-offset: max(2px, 1px);
      }

      &:focus-within {
        color: currentColor;
      }

      &::before {
        content: '';
        width: 0.6em;
        height: 0.6em;
        border-radius: 50%;
        transform: scale(0);
        transition: 100ms transform ease-in-out;
        box-shadow: inset 1em 1em currentColor;
        background-color: CanvasText;
      }

      &:checked::before {
        transform: scale(1);
      }
    }

    label {
      width: 100%;
    }
  }
}
</style>
