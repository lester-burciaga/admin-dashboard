import { passwordValidation } from '@/app/utils/constants';
import * as z from 'zod';

/**
 * @typedef RegisterFormSchema
 *
 * Validation schema for the register form using zod validation library.
 *
 * https://zod.dev/?id=basic-usage
 *
 */
export const RegisterFormSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Name is required' }),
    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email({
        message: 'Please enter a valid email',
      }),
    password: z
      .string()
      .min(1, { message: 'Password is required' })
      .regex(passwordValidation, {
        message: 'Password is invalid',
      }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Confirm password is required' }),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      path: ['confirmPassword'],
      message: 'Passwords do not match',
    }
  );
