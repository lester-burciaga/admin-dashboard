import * as z from 'zod';
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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PostFormSchema } from './PostFormSchema';
import type { PostFormProps } from './PostFormProps';

/**
 * @typedef PostForm
 *
 * Form used for editing posts with react-hook-form and zod validation
 *
 * https://react-hook-form.com/get-started
 * https://zod.dev/?id=installation
 */
export default function PostForm({
  post,
  handleSubmit,
}: PostFormProps) {
  // Set up the form with the post data
  const form = useForm<z.infer<typeof PostFormSchema>>({
    resolver: zodResolver(PostFormSchema),
    defaultValues: {
      title: post?.title || '',
      body: post?.body || '',
      author: post?.author || '',
      date: post?.date || '',
    },
  });

  const { isDirty, isValid } = useFormState(form);

  return (
    <Form {...form}>
      <form
        role='form'
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                Title
              </FormLabel>
              <FormControl>
                <Input
                  className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-offset-0 text-black dark:text-white'
                  placeholder='Enter Title'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='body'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                Body
              </FormLabel>
              <FormControl>
                <Textarea
                  className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-offset-0 text-black dark:text-white'
                  placeholder='Body'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='author'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                Author
              </FormLabel>
              <FormControl>
                <Input
                  className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-offset-0 text-black dark:text-white'
                  placeholder='Author'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='date'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input
                  className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-offset-0 text-black dark:text-white'
                  placeholder='Date'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className='w-full mt-4 dark:bg-slate-800 dark:text-white md:w-auto md:float-right'
          type='submit'
          disabled={!isValid}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
