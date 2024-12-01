import { getPosts } from "../../api/posts/getPosts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createPostElement } from "../../ui/posts/createPostElement.js";
import { filterPosts } from "./filterPosts.js";

/**
 * Handles the logic for displaying and paginating posts on the index page.
 *
 * - Fetches posts and updates the display based on pagination and filters.
 * - Allows sorting by date, title, and tag, as well as searching posts.
 * - Updates pagination info and enables/disables pagination buttons.
 * - Displays a message if no posts are found or if there is an error.
 */

export async function indexPageHandler() {
  const container = document.querySelector("#postsContainer");
  const paginationInfo = document.getElementById("pagination-info");
  const previousButton = document.querySelector(".pagination-previous");
  const nextButton = document.querySelector(".pagination-next");

  let currentPage = 1;
  const postsPerPage = 12;

  let isInitialLoad = true;

  // Updates the display of posts based on current page and filters.
  async function updatePostsDisplay() {
    try {
      const posts = await getPosts(postsPerPage, currentPage);

      let postsToDisplay = posts;

      // Initial load sorts posts by date
      if (isInitialLoad) {
        postsToDisplay.sort(
          (a, b) =>
            new Date(b.created).getTime() - new Date(a.created).getTime()
        );
        isInitialLoad = false;
      } else {
        postsToDisplay = filterPosts(posts);
      }

      if (postsToDisplay.length > 0) {
        container.innerHTML = "";
        postsToDisplay.forEach((post) => {
          createPostElement(container, post); // Create post elements dynamically
        });

        const totalPosts = 20;
        const totalPages = Math.ceil(totalPosts / postsPerPage);
        paginationInfo.textContent = `Page ${currentPage} of ${totalPages}`; // For pagination, update based on real data

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

  // Event listeners for filters and search input

  document.getElementById("searchInput").addEventListener("input", () => {
    console.log(
      "Search filter updated:",
      document.getElementById("searchInput").value
    );
    currentPage = 1;
    updatePostsDisplay();
  });

  document.getElementById("sortByDate").addEventListener("change", () => {
    console.log(
      "Date filter updated:",
      document.getElementById("sortByDate").value
    );
    currentPage = 1;
    updatePostsDisplay();
  });

  document.getElementById("sortByTitle").addEventListener("change", () => {
    console.log(
      "Title filter updated:",
      document.getElementById("sortByTitle").value
    );
    currentPage = 1;
    updatePostsDisplay();
  });

  document.getElementById("sortByTag").addEventListener("change", () => {
    console.log(
      "Tag filter updated:",
      document.getElementById("sortByTag").value
    );
    currentPage = 1;
    updatePostsDisplay();
  });

  // Pagination buttons

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

  updatePostsDisplay(); // Initial load of posts
}
