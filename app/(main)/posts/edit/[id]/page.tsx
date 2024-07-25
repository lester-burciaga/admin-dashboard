'use client';
import * as z from 'zod';
import { BackButton } from '@/components/molecules/BackButton';
import { PostFormSchema } from '@/components/organisms/PostForm/PostFormSchema';
import { PostForm } from '@/components/organisms/PostForm';

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
  // Find the post with the given ID
  const post = posts.find((post) => post.id === params.id);

  // Handle form submission
  function handleSubmit(
    data: z.infer<typeof PostFormSchema>
  ) {
    console.log(data);
  }

  return (
    <>
      <BackButton text='Back to Posts' link='/posts' />
      <PostForm post={post} handleSubmit={handleSubmit} />
    </>
  );
}
