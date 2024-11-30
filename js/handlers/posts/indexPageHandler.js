import { getPosts } from "../../api/posts/getPosts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createPostElement } from "../../ui/posts/createPostElement.js";
import { filterPosts } from "./filterPosts.js";

export async function indexPageHandler() {
  const container = document.querySelector("#postsContainer");
  const paginationInfo = document.getElementById("pagination-info");
  const previousButton = document.querySelector(".pagination-previous");
  const nextButton = document.querySelector(".pagination-next");

  let currentPage = 1;
  const postsPerPage = 12;

  async function updatePostsDisplay() {
    try {
      const posts = await getPosts(postsPerPage, currentPage);

      if (posts.length > 0) {
        const filteredPosts = filterPosts(posts);

        container.innerHTML = "";

        filteredPosts.forEach((post) => {
          createPostElement(container, post);
        });

        const totalPosts = 100;
        const totalPages = Math.ceil(totalPosts / postsPerPage);
        paginationInfo.textContent = `Page ${currentPage} of ${totalPages}`;

        previousButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
      } else {
        container.innerHTML = "";
        displayMessage(container, "warning", "No posts found.");
      }
    } catch (error) {
      console.error("Error fetching posts:", error.message);
      displayMessage(container, "error", "Failed to fetch posts.");
    }
  }

  previousButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updatePostsDisplay();
    }
  });

  nextButton.addEventListener("click", () => {
    currentPage++;
    updatePostsDisplay();
  });

  updatePostsDisplay();
}