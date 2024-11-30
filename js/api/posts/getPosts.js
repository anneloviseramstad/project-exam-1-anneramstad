import { GET_ALL_POSTS } from "../../constants/api.js";
import { headers } from "../../constants/headers.js";

export async function getPosts(limit = 12, page = 1, tag) {
  try {
    const params = new URLSearchParams({
      limit: limit.toString(),
      page: page.toString(),
      ...(tag && { tag: tag }),
      _author: true,
    });

    const response = await fetch(`${GET_ALL_POSTS}?${params}`, {
      method: "GET",
      headers: headers(),
    });
    if (response.ok) {
      const { data } = await response.json();
      const posts = data;
      return posts;
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
