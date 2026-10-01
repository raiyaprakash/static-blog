import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    author: z.string().default('AstroJyotish'),
    featured: z.boolean().default(false)
  })
});

export const collections = { posts };
