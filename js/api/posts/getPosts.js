import { GET_ALL_POSTS } from "../../constants/api.js";
import { getAccessToken } from "../../constants/accessToken.js";

export async function getPosts() {
  const token = getAccessToken();
  if (!token) {
    throw new Error("User is not logged in.");
  }
  try {
    const response = await fetch(GET_ALL_POSTS, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(errorData.message || "Failed to fetch posts.");
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw error;
  }
}
