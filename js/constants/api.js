const baseUrl = "https://v2.api.noroff.dev/";

export const registerUrl = `${baseUrl}auth/register`;
export const loginUrl = `${baseUrl}auth/login`;

const registerUsername = "sweetBites";
export const allBlogPosts = `${baseUrl}/blog/posts/${registerUsername}`;

export const getBlogPostsById = (postId) =>
  `${baseUrl}/blog/posts/${registerUsername}/${postId}`;


export const editBlogPostById = (postId) =>
  `${baseUrl}/blog/posts/${registerUsername}/${postId}`

export const deleteBlogPostById = (postId) =>