import { getPosts } from "../../api/posts/getPosts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createPostElement } from "../../ui/posts/createPostElement.js";
import { filterPosts } from "./filterPosts.js";

export async function indexPageHandler() {
  const container = document.querySelector("#postsContainer");

  container.innerHTML = "";
  try {
    const posts = await getPosts();

    if (posts.length > 0) {
      function updatePostsDisplay() {
        const filteredPosts = filterPosts(posts);
        container.innerHTML = "";
        filteredPosts.forEach((post) => {
          createPostElement(container, post);
        });
      }

      // Event listeners for filtrering og sortering
      document
        .getElementById("searchInput")
        .addEventListener("input", updatePostsDisplay);

      document
        .getElementById("sortByDate")
        .addEventListener("change", updatePostsDisplay);

      document
        .getElementById("sortByTitle")
        .addEventListener("change", updatePostsDisplay);

      document
        .getElementById("sortByTag")
        .addEventListener("change", updatePostsDisplay);

      updatePostsDisplay();
    } else {
      displayMessage(container, "warning", "No posts found.");
    }
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    displayMessage(container, "error", "Failed to fetch posts.");
  }
}
