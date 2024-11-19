// Base Url
const API_BASE_URL = "https://v2.api.noroff.dev/";

// Auth Endpoints
export const API_REGISTER_ENDPOINT = `${API_BASE_URL}auth/register`;
export const API_LOGIN_ENDPOINT = `${API_BASE_URL}auth/login`;
export const CREATE_API_KEY = `${API_BASE_URL}auth/create-api-key`;

// Blog-post Endpoints
const BLOG_NAME = "culinaryCreations";
export const GET_ALL_POSTS = `${API_BASE_URL}blog/posts/${BLOG_NAME}`;
export const GET_POST_BY_ID = (postId) =>
  `${API_BASE_URL}blog/posts/${BLOG_NAME}/${postId}`;
export const UPDATE_POST_BY_ID = (postId) =>
  `${API_BASE_URL}blog/posts/${BLOG_NAME}/${postId}`;
export const DELETE_POST_BY_ID = (postId) =>
  `${API_BASE_URL}blog/posts/${BLOG_NAME}/${postId}`;
