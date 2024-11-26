import { getPostById } from "../../api/posts/getPostById.js";
import { createPostElement } from "../../ui/posts/createPostElement.js";
import { displayMessage } from "../../ui/common/displayMessage.js";

export async function getPostByIdHandler(id) {
  if (!id) {
    window.location.href = "/post/manage";
  }

  const container = document.querySelector("#detailedPostContainer");

  try {
    const post = await getPostById(id);

    if (!post) {
      displayMessage(container, "warning", "Post not found.");
      return;
    }

    container.innerHTML = `<img src="${post.media?.url || ""}" alt="${
      post.media?.alt || "Post image"
    }" />
   <h2>${post.title}</h2>
   <p>${post.body}</p>
    <p><strong>Tags:</strong> ${post.tags.join(", ")}</p>
      <p><strong>Author:</strong> ${post.author?.name || "Unknown"}</p>
      <p><strong>Created:</strong> ${new Date(
        post.created
      ).toLocaleString()}</p>
   `;
  } catch (error) {
    console.error("Error fetching post:", error);
    displayMessage(
      container,
      "danger",
      "An error occurred while fetching the post."
    );
  }
}
