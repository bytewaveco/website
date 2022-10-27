import { type StorybookConfig } from '@storybook/core-common'
import { mergeConfig } from 'vite'
import vitestConfig from '../vitest.config'

export default {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-sass-postcss',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: (vitestConfig as any).plugins,
      resolve: (vitestConfig as any).resolve,
    })
  },
} as StorybookConfig
