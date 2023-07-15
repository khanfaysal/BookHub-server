import { z } from 'zod';

const createBookZodSchema = z.object({
  body: z.object({
    title: z.string(),
    author: z.string(),
    genre: z.string(),
    publicationDate: z.string().optional(),
    reviews: z.string().optional()
  }),
});

export const BookValidation = {
  createBookZodSchema
}