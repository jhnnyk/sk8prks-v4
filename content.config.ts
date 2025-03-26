import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    skateparks: defineCollection({
      source: 'skateparks/**',
      type: 'page',
    }),
  },
})
