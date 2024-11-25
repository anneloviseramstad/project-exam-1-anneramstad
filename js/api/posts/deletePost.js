import { GET_ALL_POSTS } from "../../constants/api.js";
import { headers } from "../../constants/headers.js";

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
