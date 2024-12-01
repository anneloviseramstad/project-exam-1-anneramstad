import { deletePost } from "../../api/posts/deletePost.js";

/**
 * Handles the deletion of a blog post.
 *
 * @param {Event} event - The click event on the delete button.
 *
 * - Retrieves the post ID from the event target.
 * - Prompts the user with a confirmation dialog before deleting.
 * - Calls `deletePost` to delete the post.
 * - On success, shows an alert, removes the post from the DOM, and updates the UI.
 * - On failure, logs the error and shows an alert with the error message.
 */

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
