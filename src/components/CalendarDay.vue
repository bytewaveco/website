<template>
  <div :class="`calendar-day ${offset === 0 ? 'calendar-day--today' : ''}`">
    <span>{{ dayWeekday }}</span>
    <h2>{{ dayNum }}</h2>
    <div
      v-if="hasEvent"
      class="calendar-day-event-indicator"
    />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    offset: {
      type: Number,
      default: 0,
    },
    hasEvent: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const now = useTime().tz(useTime.tz.guess())
    const date = now.add(props.offset, 'day')
    const dayNum = ref(date.date())
    const dayWeekday = ref(date.format('dd'))

    return { dayNum, dayWeekday }
  },
})
</script>

<style lang="scss" scoped>
.calendar-day {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr 8px;
  align-items: center;
  justify-content: center;
  justify-items: center;
  height: 100%;
  width: fit-content;
  padding: 2rem;
  border-radius: 4px;
  user-select: none;

  &.calendar-day--today {
    background-color: rgb(var(--c-primary));
    color: rgb(var(--c-background));
    box-shadow: var(--shadow-0);

    span {
      color: rgb(var(--c-background));
    }

    .calendar-day-event-indicator {
      background-color: rgb(var(--c-background));
    }
  }

  span {
    display: block;
    width: fit-content;
    font-size: 0.75rem;
  }

  h2 {
    align-self: flex-start;
    margin: 1rem 0 0.5rem;
  }

  .calendar-day-event-indicator {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: rgb(var(--c-text));
  }
}
</style>
