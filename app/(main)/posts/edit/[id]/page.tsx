'use client';
import * as z from 'zod';
import { BackButton } from '@/components/molecules/BackButton';
import { PostFormSchema } from '@/components/organisms/PostForm/PostFormSchema';
import { PostForm } from '@/components/organisms/PostForm';
import { useToast } from '@/components/ui/use-toast';

import posts from '@/data/post';

// Page parameters
interface PostEditPageProps {
  params: {
    id: string;
  };
}

/**
 * @typedef PostEditPageProps
 *
 * Page for editing a post.
 *
 */
export default function PostEditPage({
  params,
}: PostEditPageProps) {
  const { toast } = useToast();
  // Find the post with the given ID
  const post = posts.find((post) => post.id === params.id);

  // Handle form submission
  function handleSubmit(
    data: z.infer<typeof PostFormSchema>
  ) {
    console.log(data);
    // Update the post in the database
    // TODO

    // Show a success toast
    toast({
      title: 'Post has been updated successfully',
      description: `Updated by ${data?.author} on ${data?.date}.`,
    });
  }

  return (
    <>
      <BackButton text='Back to Posts' link='/posts' />
      <PostForm post={post} handleSubmit={handleSubmit} />
    </>
  );
}
