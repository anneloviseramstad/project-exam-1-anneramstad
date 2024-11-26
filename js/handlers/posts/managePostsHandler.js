import { getPosts } from "../../api/posts/getPosts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createPostElement } from "../../ui/posts/createPostElement.js";
import { deletePostHandler } from "./deletePostHandler.js";

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
