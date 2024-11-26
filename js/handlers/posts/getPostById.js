import { getPostById } from "../../api/posts/getPostById.js";
import { createPostElement } from "../../ui/posts/createPostElement.js";
import { displayMessage } from "../../ui/common/displayMessage.js";

export async function getPostByIdHandler() {
  const id = getQueryParam("id");

  if (!id) {
    window.location.href = "/post/manage";
  }

  const container = document.querySelector("#detailedPostContainer");

  try {
    const post = await getPostById(id);

    createPostElement(container, post);
  } catch (error) {
    console.error("Error fetching post:", error);
    console.log(error.message);
    displayMessage(container, "error", "Failed to fetch post.");
  }
}
