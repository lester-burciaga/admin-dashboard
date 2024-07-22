/**
 * @typedef Post
 *
 * @property {string} id - ID of the post
 * @property {string} title - Title of the post
 * @property {string} body - Body of the post
 * @property {string} author - Author of the post
 * @property {string} date - Date of the post
 * @property {PostComment[]} comments - Array of comments
 *
 */
export interface Post {
  id: string;
  title: string;
  body: string;
  author: string;
  date: string;
  comments: PostComment[];
}

/**
 * @typedef PostComment
 *
 * @property {string} id - ID of the comment
 * @property {string} text - Text body of the comment
 * @property {string} username - Username of the comment author
 *
 */
export interface PostComment {
  id: string;
  text: string;
  username: string;
}
