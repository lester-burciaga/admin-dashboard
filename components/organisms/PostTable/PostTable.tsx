import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Post } from '@/types/posts';
import type { PostTableProps } from './PostTableProps';

/**
 * @typedef PostTableProps
 *
 * Table of posts published in the blog
 */
export default function PostTable({ limit, title, posts }: PostTableProps) {
  // Sort the posts by date in descending order
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Filter the posts based on the limit
  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <div className='mt-10'>
      {posts.length ? (
        <>
          <h3 className='text-2xl mb-4 font-semibold'>
            {title ? title : 'Posts'}
          </h3>
          <Table>
            <TableCaption>A list of recent posts</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className='text-bold'>Title</TableHead>
                <TableHead className='text-bold hidden md:table-cell'>
                  Author
                </TableHead>
                <TableHead className='text-bold hidden md:table-cell text-center'>
                  Date
                </TableHead>
                <TableHead className='text-bold'>View</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>{post.title}</TableCell>
                  <TableCell className='hidden md:table-cell'>
                    {post.author}
                  </TableCell>
                  <TableCell className='hidden md:table-cell text-right'>
                    {post.date}
                  </TableCell>
                  <TableCell>
                    <Link href={`/posts/edit/${post.id}`}>
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs'>
                        Edit
                      </button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      ) : (
        <p className='text-2xl mb-4 font-semibold text-center'>
          No posts found.
        </p>
      )}
    </div>
  );
}
