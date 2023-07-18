import { z } from 'zod';

const createBookZodSchema = z.object({
  body: z.object({
    title: z.string(),
    author: z.string(),
    genre: z.string(),
    publicationDate: z.string().optional(),
    reviews: z.array(z.string()).optional(),
  }),
});

const createBookUpdateZodSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }).optional(),
    author: z.string({ required_error: 'Author is required' }).optional(),
    genre: z.string({ required_error: 'Genre is required' }).optional(),
    publicationDate: z.string({ required_error: 'Publication Date/Year is required' }).optional(),
    reviews: z.array(z.string()).optional(),
  }),
});

export const BookValidation = {
  createBookZodSchema,
  createBookUpdateZodSchema,
};
