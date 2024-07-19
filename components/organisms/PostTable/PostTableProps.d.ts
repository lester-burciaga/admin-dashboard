import type { Post } from '@/types/posts';

/**
 * @typedef PostTableProps
 *
 * @property {number} limit - Number of posts to display
 * @property {string} title - Title of the table
 * @property {Post[]} posts - Array of posts
 *
 */
export interface PostTableProps {
  limit?: number;
  title?: string;
  posts: Post[];
}
