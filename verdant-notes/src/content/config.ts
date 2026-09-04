import { defineCollection, z } from 'astro:content';

// Schema for every post in src/content/blog/*.md
// Drop a new .md file with matching frontmatter into src/content/blog/
// and Astro will pick it up automatically — no route or import needed.
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // authorSlug must match a slug in src/data/authors.ts so the post links
    // to a full author profile page at /team/[authorSlug]
    authorSlug: z.string().default('asha-fenn'),
    category: z.string().default('General'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
