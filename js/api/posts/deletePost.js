import { DELETE_POST } from "../../constants/api.js";
import { getApiKey } from "../../constants/accessToken.js";

export async function deletePost(postId) {
  const token = getApiKey();
  if (!token) {
    throw new Error("User is not logged in.");
  }
  try {
    const response = await fetch(DELETE_POST(postId), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(errorData.message || "Failed to delete post");
    }
    return { message: "Post deleted successfully" };
  } catch (error) {
    console.error("Error deleting post:", error.message);
    throw error;
  }
}
