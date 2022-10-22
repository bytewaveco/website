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
  </section>
</template>

<script lang="ts" setup>
const test = ref('test')

watch(test, () => {
  console.log('TEST', test.value)
})
</script>
