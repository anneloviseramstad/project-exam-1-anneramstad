import { getPosts } from "../../api/posts/getPosts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createPostElement } from "../../ui/posts/createPostElement.js";
import { deletePostHandler } from "./deletePostHandler.js";
import { filterPosts } from "./filterPosts.js";
import { filterPostsByDate } from "./filterByDate.js";

export async function managePostsHandler() {
  const container = document.querySelector("#postsContainer");

  container.innerHTML = "";

  try {
    const posts = await getPosts();
    console.log("Fetched posts:", posts);
    if (posts.length > 0) {
      posts.forEach((post) => {
        createPostElement(container, post, deletePostHandler);
      });

      filterPosts(posts);
      filterPostsByDate(posts);
    } else {
      displayMessage(container, "warning", "No posts found.");
    }
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    displayMessage(container, "error", "Failed to fetch posts.");
  }
}
