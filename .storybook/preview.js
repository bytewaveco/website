import { app } from '@storybook/vue3'
import Icon from './Icon.vue'
import './main.scss'

app.component('icon', Icon)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
