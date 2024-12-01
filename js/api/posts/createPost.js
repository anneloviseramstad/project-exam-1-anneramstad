import { headers } from "../../constants/headers.js";
import { CREATE_POST } from "../../constants/api.js";

/**
 * Creates a new blog post by sending the provided data to the API.
 *
 * @param {Object} postDetails - The details of the blog post.
 * @param {string} postDetails.title - The title of the post.
 * @param {string} postDetails.body - The body/content of the post.
 * @param {Array<string>} postDetails.tags - Tags associated with the post.
 * @param {Object} postDetails.media - Media object containing a URL and alt text.
 *
 * @returns {Promise<Object>} The created post data if successful.
 * @throws {Error} Throws an error if the post creation fails.
 */

export async function createPost({ title, body, tags, media }) {
  try {
    const response = await fetch(CREATE_POST, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({
        title,
        body,
        tags,
        media:
          media && media.url && media.alt
            ? { url: media.url, alt: media.alt }
            : null,
      }),
    });

    if (response.ok) {
      const { data } = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      console.error("Error creating post:", errorData.message);
      throw new Error(errorData.message || "Failed to create post.");
    }
  } catch (error) {
    console.error("Error creating post:", error.message);
    throw error;
  }
}
