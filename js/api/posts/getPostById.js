import { GET_POST_BY_ID } from "../../constants/api.js";
import { getApiKey } from "../../constants/accessToken.js";

export async function getPostById(postId) {
  const token = getApiKey();
  if (!token) {
    throw new Error("User is not logged in.");
  }
  try {
    const response = await fetch(GET_POST_BY_ID(postId), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch post.");
    }

    const post = await response.json();
    return post;
  } catch (error) {
    console.error("Error fetching post:", error.message);
    throw error;
  }
}
