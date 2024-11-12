// Base URL for the API

const API_BASE_URL = "https://v2.api.noroff.dev/";
const BLOG_NAME = "culinaryCreations";

// Authentication endpoints

export const API_REGISTER_ENDPOINT = `${API_BASE_URL}auth/register`;
export const API_LOGIN_ENDPOINT = `${API_BASE_URL}auth/login`;

// Blog post endpoints

const BLOG_POSTS_BASE_URL = `${API_BASE_URL}/blog/posts/${BLOG_NAME}`;

export const API_GET_ALL_BLOG_POSTS = `${BLOG_POSTS_BASE_URL}`;
export const API_GET_BLOG_POST_BY_ID = (postId) =>
  `${BLOG_POSTS_BASE_URL}/${postId}`;
export const API_UPDATE_BLOG_POST_BY_ID = (postId) =>
  `${BLOG_POSTS_BASE_URL}/${postId}`;
export const API_DELETE_BLOG_POST_BY_ID = (postId) =>
  `${BLOG_POSTS_BASE_URL}/${postId}`;
