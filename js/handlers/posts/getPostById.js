import { getPostById } from "../../api/posts/getPostById.js";
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

    container.innerHTML = `<div class="h1-secondary">
        <h1>${post.data.title}</h1>
      </div>
    <img class="post-id-image" src="${post.data.media?.url || ""}" alt="${
      post.media?.alt || "Post image"
    }" />
   
   <div class="post-body">${post.data.body}</div>



      <h3><strong>Author:</strong> ${post.data.author?.name || "Unknown"}</h3>
      <h3><strong>Created:</strong> ${new Date(
        post.data.created
      ).toLocaleString()}</h3>
      <h3> <strong>Tags:</strong> ${post.data.tags.join(", ")}</h3>
      <div id="shareButton" class="share-icon" title="Share">
    <i class="fa-solid fa-link"></i>
  </div>
   `;

    const shareButton = document.getElementById("shareButton");
    shareButton.addEventListener("click", () => copyShareableUrl(id));
  } catch (error) {
    console.error("Error fetching post:", error);
    displayMessage(
      container,
      "danger",
      "An error occurred while fetching the post."
    );
  }
}

function copyShareableUrl(postId) {
  const currentUrl = window.location.href.split("?")[0];
  const shareableUrl = `${currentUrl}?id=${postId}`;

  navigator.clipboard
    .writeText(shareableUrl)
    .then(() => {
      alert("Shareable URL copied to clipboard: " + shareableUrl);
    })
    .catch((err) => {
      console.error("Error copying shareable URL:", err);
      alert("Failed to copy shareable URL.");
    });
}
