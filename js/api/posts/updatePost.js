import { UPDATE_POST } from "../../constants/api.js";
import { getApiKey } from "../../constants/accessToken.js";

export async function updatePost(postId, { title, body, tags, media }) {
  const token = getApiKey();
  if (!token) {
    throw new Error("User is not logged in.");
  }
  try {
    const response = await fetch(UPDATE_POST(postId), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
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

    const { updatedPost } = await response.json();
    return updatedPost;
  } catch (error) {
    console.error("Error updating post:", error.message);
    throw error;
  }
}
