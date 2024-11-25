import { GET_ALL_POSTS } from "../../constants/api.js";
import { headers } from "../../constants/headers.js";

export async function getPostById(id) {
  try {
    const response = await fetch(`${GET_ALL_POSTS}/${id}?author=true`, {
      method: "GET",
      headers: headers(),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching post:", response.status);
    }
  } catch (error) {
    console.error("Error fetching post:", error);
  }
}
