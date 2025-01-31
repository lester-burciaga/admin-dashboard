import * as z from 'zod';

/**
 * @typedef PostFormSchema
 *
 * Validation schema for the post form using zod validation library.
 *
 * https://zod.dev/?id=basic-usage
 *
 */
export const PostFormSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title is required' }),
  body: z.string().min(1, { message: 'Body is required' }),
  author: z
    .string()
    .min(1, { message: 'Author is required' }),
  date: z.string().min(1, { message: 'Date is required' }),
});
