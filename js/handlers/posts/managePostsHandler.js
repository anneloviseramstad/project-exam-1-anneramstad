import { getPosts } from "../../api/posts/getPosts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createPostElement } from "../../ui/posts/createPostElement.js";
import { deletePostHandler } from "./deletePostHandler.js";

/**
 * Handles the logic for managing and displaying posts on the admin/manage posts page.
 *
 * - Fetches all posts and displays them using `createPostElement`.
 * - Displays a warning message if no posts are found.
 * - If there's an error fetching posts, it shows an error message.
 * - Each post can be deleted via the `deletePostHandler` function passed to the post element.
 */

export async function managePostsHandler() {
  const container = document.querySelector("#postsContainer");

  container.innerHTML = "";

  try {
    const posts = await getPosts();

    if (posts.length > 0) {
      posts.forEach((post) => {
        createPostElement(container, post, deletePostHandler);
      });
    } else {
      displayMessage(container, "warning", "No posts found.");
    }
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    displayMessage(container, "error", "Failed to fetch posts.");
  }
}
