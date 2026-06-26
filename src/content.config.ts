import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    titleId: z.string(),
    excerpt: z.string(),
    excerptId: z.string(),
    category: z.string(),
    date: z.string(),
    readTime: z.string(),
    image: z.string(),
    slug: z.string(),
  }),
});

export const collections = { blog };
