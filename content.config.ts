import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    skateparks: defineCollection({
      source: 'skateparks/**',
      type: 'page',
      schema: z.object({
        title: z.string(),
        street: z.string(),
        city: z.string(),
        state: z.string(),
        zipcode: z.string(),
        latitude: z.string(),
        longitude: z.string(),
        description: z.string(),
        tags: z.string(),
      }),
    }),
  },
})
