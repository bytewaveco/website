import dayjs from 'dayjs'
import timezonePlugin from 'dayjs/plugin/timezone'
import utcPlugin from 'dayjs/plugin/utc'

dayjs.extend(utcPlugin)
dayjs.extend(timezonePlugin)

export const useTime = dayjs
