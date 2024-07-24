/**
 * @typedef PostFormProps
 *
 * @property {Post} post - Post data
 * @property {Function} handleSubmit - Handle form submission
 */

import type { Post } from '@/types/posts';

export interface PostFormProps {
  post: Post | undefined;
  handleSubmit: (data: any) => void;
}
