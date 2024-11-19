// Base URL for the API

const API_BASE_URL = "https://v2.api.noroff.dev";

const CREATE_API_KEY = 

// Authentication endpoints

export const API_REGISTER_ENDPOINT = `${API_BASE_URL}/auth/register`;
export const API_LOGIN_ENDPOINT = `${API_BASE_URL}/auth/login`;

// Blog post endpoints

export const BLOG_NAME = "sweetBite";
export const BLOG_POSTS = `${API_BASE_URL}/blog/posts/${BLOG_NAME}`;

export const GET_POST_BY_ID = (postId) =>
  `${API_BASE_URL}/blog/posts/${BLOG_NAME}/${postId}`;

export const EDIT_POST_BY_ID = (postId) =>
  `${API_BASE_URL}/blog/posts/${BLOG_NAME}/${postId}`;

export const DELETE_POST = (postId) =>
  `${API_BASE_URL}/blog/posts/${BLOG_NAME}/${postId}`;
