import type { Post } from '@/types/posts';
import { SubmitHandler } from 'react-hook-form';

/**
 * @typedef PostFormFields
 *
 * @property {string} author - Author of the post
 * @property {string} body - Body of the post
 * @property {string} title - Title of the post
 * @property {string} date - Date of the post
 */
export type PostFormFields = {
  author: string;
  body: string;
  title: string;
  date: string;
};

/**
 * @typedef PostFormProps
 *
 * @property {Post} post - Post data
 * @property {Function} handleSubmit - Handle form submission
 */

export interface PostFormProps {
  post: Post | undefined;
  handleSubmit: (data: PostFormFields) => void;
}
