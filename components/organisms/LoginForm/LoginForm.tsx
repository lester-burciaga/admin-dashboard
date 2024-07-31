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
import { Input } from '@/components/ui/input';
import { LoginFormSchema } from './LoginFormSchema';

/**
 * @typedef PostForm
 *
 * Form used for editing posts with react-hook-form and zod validation
 *
 * https://react-hook-form.com/get-started
 * https://zod.dev/?id=installation
 */
export default function LoginForm() {
  const { push } = useRouter();
  // Set up the form using the zod schema and empty default values
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Get the isDirty state of the form to enable/disable the submit button
  const { isDirty } = useFormState(form);

  // Handle form submission
  function handleSubmit(
    data: z.infer<typeof LoginFormSchema>
  ) {
    // Go to home page
    push('/');
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Log into your account with your credentials
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
            <Button
              type='submit'
              disabled={!isDirty}
              className='w-full'
            >
              Sign In
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
