import { headers } from "../../constants/headers.js";
import { CREATE_POST } from "../../constants/api.js";

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
