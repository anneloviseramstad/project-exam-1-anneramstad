import { getPostById } from "../../api/posts/getPostById.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createEditButton } from "../../ui/posts/createButton.js";

export async function getPostByIdHandler(id) {
  if (!id) {
    window.location.href = "/post/manage";
  }

  const container = document.querySelector("#detailedPostContainer");

  if (!container) {
    console.error("Post container not found.");
    return;
  }

  try {
    const post = await getPostById(id);

    if (!post) {
      displayMessage(container, "warning", "Post not found.");
      return;
    }

    const editButton = createEditButton(id);

    container.innerHTML = `
      <h1 class="h1-secondary">${post.data.title}</h1>
      <img src="${post.data.media?.url || ""}" alt="${
      post.data.media?.alt || "Post image"
    }" />
      <p>${post.data.body}</p>
      <p><strong>Author:</strong> ${post.data.author?.name || "Unknown"}</p>
      <p><strong>Created:</strong> ${new Date(
        post.data.created
      ).toLocaleString()}</p>
    `;

    container.appendChild(editButton);
  } catch (error) {
    console.error("Error fetching post:", error);
    displayMessage(
      container,
      "danger",
      "An error occurred while fetching the post."
    );
  }
}
