import { GET_ALL_POSTS } from "../../constants/api.js";
import { headers } from "../../constants/headers.js";

export async function getPosts(limit = 12, tag) {
  try {
    const params = new URLSearchParams({
      limit: limit.toString(),
      page: page.toString(),
      ...(tag && { tag }),
    });

    const response = await fetch(`${GET_ALL_POSTS}?${params}`, {
      method: "GET",
      headers: headers(),
    });

    if (response.ok) {
      const { data } = await response.json();

      localStorage.setItem("posts", JSON.stringify(data));

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
