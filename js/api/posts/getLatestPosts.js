import { GET_ALL_POSTS } from "../../constants/api.js";

export async function getLatestPosts(limit = 3) {
  const response = await fetch(
    `${GET_ALL_POSTS}?_sort=created_at:desc&_limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch latest posts.");
  }
  const data = await response.json();
  console.log(data);
  return data;
}
