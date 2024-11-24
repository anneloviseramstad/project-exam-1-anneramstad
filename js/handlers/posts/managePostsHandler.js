import { getPosts } from "../../api/posts/getPosts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";

export async function managePostsHandler() {
  const container = document.querySelector("#postsContainer");

  try {
    const posts = await getPosts();
    if (posts.length > 0) {
      posts.forEach((post) => {
        const postElement = createPostElement(post);
        container.appendChild(postElement);
      });
    } else {
      displayMessage(container, "warning", "No posts found.");
    }
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    displayMessage(container, "error", "Failed to fetch posts.");
  }
}
