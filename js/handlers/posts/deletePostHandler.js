import { deletePost } from "../../api/posts/deletePost.js";

export async function deletePostHandler(event) {
  const postId = event.target.dataset.postId;
  const postElement = event.target.closest(".post");

  if (!postId) {
    console.error("Post ID not found in data-post-id attribute.");
    return;
  }

  if (confirm("Are you sure you want to delete this post?")) {
    const success = await deletePost(postId);

    if (success) {
      alert("Post deleted successfully.");
      if (window.location.pathname.includes("post")) {
        window.location.href = "/post/manage";
      } else {
        postElement.remove();
      }
    } else {
      alert("Failed to delete post.");
    }
  }
}
