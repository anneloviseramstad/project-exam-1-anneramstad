import { GET_ALL_POSTS } from "../../constants/api.js";
import { headers } from "../../constants/headers.js";

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
