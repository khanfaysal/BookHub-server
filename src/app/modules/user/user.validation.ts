import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
  }),
});

const createUserUpdateZodSchema = z.object({
  body: z.object({
    email: z
    .string({
      required_error: 'Email is required',
    })
    .optional(),
    password: z
    .string({
      required_error: 'Password is required',
    })
    .optional(),
  }),
});
 

export const UserValidation = {
  createUserZodSchema,
  createUserUpdateZodSchema
}