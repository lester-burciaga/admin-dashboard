import * as z from 'zod';

/**
 * @typedef LoginFormSchema
 *
 * Validation schema for the login form using zod validation library.
 *
 * https://zod.dev/?id=basic-usage
 *
 */
export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({
      message: 'Please enter a valid email',
    }),
  password: z
    .string()
    .min(1, { message: 'Password is required' }),
});
