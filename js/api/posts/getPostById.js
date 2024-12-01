import { GET_ALL_POSTS } from "../../constants/api.js";
import { headers } from "../../constants/headers.js";

/**
 * Fetches a blog post by its ID, including author details.
 *
 * @param {string} id - The ID of the post to fetch.
 *
 * @returns {Promise<Object>} The post data if successful, or `undefined` if an error occurs.
 * @throws {Error} Logs errors to the console if the request fails or the post is not found.
 */

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
