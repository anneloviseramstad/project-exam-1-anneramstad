import { deletePost } from "../../api/posts/deletePost.js";

export async function deletePostHandler(event) {
  const postId = event.target.dataset.postId;

  if (!postId) {
    console.error("Post ID is missing.");
    return;
  }

  const confirmDelete = confirm("Are you sure you want to delete this post?");
  if (!confirmDelete) return;

  try {
    const success = await deletePost(postId);

    if (success) {
      alert("Post deleted successfully.");

      const postElement = event.target.closest(".post-card");
      if (postElement) {
        postElement.remove();
      }
    }
  } catch (error) {
    console.error("Error deleting post:", error.message);
    alert(`Failed to delete post: ${error.message}`);
  }
}
