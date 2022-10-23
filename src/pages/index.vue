<template>
  <section>
    <entry-text
      v-model="test"
      label="Text input"
      placeholder="Text input"
      :status-map="{
        default: [[() => true, 'Text']],
        error: [
          [() => test.length < 1, 'Too short!'],
          [() => test.length > 1, 'Too long!'],
        ],
      }"
    />
    <entry-text
      label="Text input w/ success"
      placeholder="Text input w/ success"
      :status-map="{
        success: [[() => true, 'Text']],
      }"
    />
    <entry-text
      label="Text input w/ error"
      placeholder="Text input w/ error"
      :status-map="{
        error: [[() => true, 'Text']],
      }"
    />
    <entry-text
      label="Text input w/ error"
      placeholder="Text input w/ error"
      :status-map="{
        disabled: [[() => true, 'Text']],
      }"
    />
    <entry-select
      label="Select input"
      placeholder="Select input"
      :status-map="{
        default: [[() => true, 'Text']],
      }"
    >
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </entry-select>
    <entry-select
      label="Select input"
      placeholder="Select input"
      :status-map="{
        disabled: [[() => true, 'Text']],
      }"
    >
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </entry-select>
    <entry-radio
      label="Radio input"
      placeholder="Radio input"
      hint-text="Radio input"
      :status-map="{
        default: [[() => true, 'Text']],
      }"
      :options="[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]"
    />
    <entry-button @click.stop.prevent="log">Text</entry-button>
    <entry-button
      type="secondary"
      @click.stop.prevent="log"
    >
      Text
    </entry-button>
    <entry-button
      type="danger"
      @click.stop.prevent="log"
    >
      Text
    </entry-button>
    <entry-button
      disabled
      @click.stop.prevent="log"
    >
      Text
    </entry-button>
    <br />
    <entry-button-ghost @click.stop.prevent="log">Text</entry-button-ghost>
    <entry-button-ghost
      type="danger"
      @click.stop.prevent="log"
    >
      Text
    </entry-button-ghost>
    <entry-button-ghost
      disabled
      @click.stop.prevent="log"
    >
      Text
    </entry-button-ghost>
    <br />
    <entry-button-icon
      icon="airplane"
      @click.stop.prevent="log"
    />
    <entry-button-icon
      icon="airplane"
      disabled
      @click.stop.prevent="log"
    />
  </section>
</template>

<script lang="ts" setup>
const test = ref('test')

watch(test, () => {
  console.log('TEST', test.value)
})

function log(event) {
  console.log('LOG', event)
}
</script>
