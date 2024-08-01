import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { useForm, useFormState } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { CircleAlert } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { RegisterFormSchema } from './RegisterFormSchema';

/**
 * @typedef RegisterForm
 *
 * Form used for user registration using react-hook-form and zod validation
 *
 * https://react-hook-form.com/get-started
 * https://zod.dev/?id=installation
 */
export default function RegisterForm() {
  const { push } = useRouter();
  // Set up the form using the zod schema and empty default values
  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  // Get the isDirty state of the form to enable/disable the submit button
  const { isDirty } = useFormState(form);

  // Handle form submission
  function handleSubmit(
    data: z.infer<typeof RegisterFormSchema>
  ) {
    // Go to home page
    push('/');
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Sign up by adding the information below.
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <Form {...form}>
          <form
            role='form'
            onSubmit={form.handleSubmit(handleSubmit)}
            className='space-y-6'
          >
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-offset-0 text-black dark:text-white'
                      placeholder='Enter Name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-offset-0 text-black dark:text-white'
                      placeholder='Enter Email'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                    Password
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <CircleAlert className='ml-2 h-4 w-4 text-red-400' />
                        </TooltipTrigger>
                        <TooltipContent
                          className='w-64 text-xs text-red-400 dark:text-white text-justify'
                          side='right'
                        >
                          <p>
                            Password must be at least 8
                            characters long and contain at
                            least one uppercase letter, one
                            lowercase letter, one number and
                            one special character.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-offset-0 text-black dark:text-white'
                      placeholder='Password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-offset-0 text-black dark:text-white'
                      placeholder='Confirm Password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type='submit'
              disabled={!isDirty}
              className='w-full'
            >
              Sign Up
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
