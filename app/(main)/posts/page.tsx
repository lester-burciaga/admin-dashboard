'use client';
import { BackButton } from '@/components/molecules/BackButton';
import { PostPagination } from '@/components/organisms/PostPagination';
import { PostTable } from '@/components/organisms/PostTable';
import posts from '@/data/post';

/**
 * Posts Page
 *
 * It displays a table of posts.
 *
 */
function PostsPage() {
  return (
    <>
      <BackButton text={'Go back'} link={'/'} />
      <PostTable posts={posts} />
      <PostPagination />
    </>
  );
}

export default PostsPage;
