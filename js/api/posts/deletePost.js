import { GET_ALL_POSTS } from "../../constants/api.js";
import { headers } from "../../constants/headers.js";

/**
 * Deletes a blog post by its ID.
 *
 * @param {string} id - The ID of the post to delete.
 *
 * @returns {Promise<boolean>} `true` if the post was successfully deleted, `false` otherwise.
 * @throws {Error} Logs error to the console if the deletion request fails.
 */

export async function deletePost(id) {
  try {
    const response = await fetch(`${GET_ALL_POSTS}/${id}`, {
      method: "DELETE",
      headers: headers(),
    });
    if (!response.ok) {
      console.error(
        "Error deleting post:",
        response.status,
        response.statusText
      );
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error deleting post:", error);
    return false;
  }
}
