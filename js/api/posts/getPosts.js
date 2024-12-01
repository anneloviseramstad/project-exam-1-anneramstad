import { GET_ALL_POSTS } from "../../constants/api.js";
import { headers } from "../../constants/headers.js";

/**
 * Fetches a list of blog posts with optional pagination and tag filtering.
 *
 * @param {number} [limit=12] - The number of posts to fetch.
 * @param {number} [page=1] - The page of posts to fetch.
 * @param {string} [tag] - Optional tag to filter posts by.
 *
 * @returns {Promise<Object[]>} A list of blog posts if successful.
 */

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
