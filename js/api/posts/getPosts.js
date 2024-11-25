import { GET_ALL_POSTS } from "../../constants/api.js";
import { headers } from "../../constants/headers.js";

export async function getPosts() {
  try {
    const response = await fetch(GET_ALL_POSTS, {
      method: "GET",
      headers: headers(),
    });

    if (response.ok) {
      const { data } = await response.json();

      return data;
    } else {
      const errorData = await response.json();
      console.error("Error fetching posts:", errorData.message);
      throw new Error(errorData.message || "Failed to fetch posts.");
    }
  } catch (error) {
    console.error("Error fetching post:", error.message);
    throw error;
  }
}

const posts = await getPosts();
