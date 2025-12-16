import { defineContentConfig, defineCollection } from '@nuxt/content'
import { resolve } from 'path'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: {
        cwd: resolve(__dirname, 'app', 'content'),
        include: '**/*.md',
      },
    }),
  },
})
