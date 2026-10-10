import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ base: './src/content/journal', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['Technology', 'Entertainment', 'Digital Culture']),
    readTime: z.string(),
    featured: z.boolean().default(false)
  })
});

export const collections = { journal };
