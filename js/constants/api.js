// API ENDPOINTS

// Base Url for the API.
const API_BASE_URL = "https://v2.api.noroff.dev/";

// API KEY used for authentication and access.
export const API_KEY = "9ee9e075-41d7-4ef6-a5f9-60041cd14c05";

// Authentication Endpoints
export const API_REGISTER_ENDPOINT = `${API_BASE_URL}auth/register`;
export const API_LOGIN_ENDPOINT = `${API_BASE_URL}auth/login`;

// Username for the blog
const BLOG_NAME = "oliviacooks";

// Blog post Endpoints
export const GET_ALL_POSTS = `${API_BASE_URL}blog/posts/${BLOG_NAME}`;
export const CREATE_POST = `${API_BASE_URL}blog/posts/${BLOG_NAME}`;
