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

    container.innerHTML = `<h1 class="h1-secondary">${post.data.title}</h1>
    <img src="${post.data.media?.url || ""}" alt="${
      post.media?.alt || "Post image"
    }" />
   
   <p>${post.data.body}</p>
   
      <p><strong>Author:</strong> ${post.data.author?.name || "Unknown"}</p>
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
