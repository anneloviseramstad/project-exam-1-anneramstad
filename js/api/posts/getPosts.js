import { GET_ALL_POSTS } from "../../constants/api.js";
import { headers } from "../../constants/headers.js";

export async function getPosts({ title, body, tags, media }) {
  try {
    const response = await fetch(GET_ALL_POSTS, {
      method: "GET",
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
      console.error("Error fetching posts:", errorData.message);
      throw new Error(errorData.message || "Failed to fetch posts.");
    }
  } catch (error) {
    console.error("Error fetching post:", error.message);
    throw error;
  }
}
