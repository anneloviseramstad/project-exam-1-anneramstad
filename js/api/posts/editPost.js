import { GET_ALL_POSTS } from "../../constants/api.js";
import { headers } from "../../constants/headers.js";

/**
 * Edits an existing blog post by updating its details.
 *
 * @param {string} id - The ID of the post to edit.
 * @param {Object} postDetails - The new details for the blog post.
 * @param {string} postDetails.title - The updated title of the post.
 * @param {string} postDetails.body - The updated content of the post.
 * @param {Array<string>} postDetails.tags - The updated tags for the post.
 * @param {Object} postDetails.media - The updated media object containing a URL and alt text.
 *
 * @returns {Promise<Object>} The updated post data if successful.
 * @throws {Error} Throws an error if the post update fails.
 */

export async function editPost(id, { title, body, tags, media }) {
  try {
    const response = await fetch(`${GET_ALL_POSTS}/${id}`, {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify({
        title,
        body,
        tags,
        media: media ? { url: media.url, alt: media.alt } : null,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update post.");
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating post:", error.message);
    throw error;
  }
}
