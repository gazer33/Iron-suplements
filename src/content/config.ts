import { defineCollection, z } from 'astro:content';

const programsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    features: z.array(z.string()),
    image: z.string(),
    order: z.number(),
  }),
});

const trainersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    specialties: z.array(z.string()),
    bio: z.string(),
    image: z.string(),
    certifications: z.array(z.string()).optional(),
    experience: z.string(),
    order: z.number(),
  }),
});

const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    role: z.string().optional(),
    content: z.string(),
    rating: z.number().min(1).max(5),
    image: z.string().optional(),
    date: z.date(),
  }),
});

const faqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  programs: programsCollection,
  trainers: trainersCollection,
  testimonials: testimonialsCollection,
  faq: faqCollection,
};
