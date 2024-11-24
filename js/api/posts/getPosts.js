import { GET_ALL_POSTS } from "../../constants/api.js";
import { headers } from "../../constants/headers.js";

export async function getPosts() {
  try {
    const response = await fetch(GET_ALL_POSTS, {
      method: "GET",
      headers: headers(),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching posts:", response.status);
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

const posts = await getPosts();
