import { getPosts } from "../../api/posts/getPosts.js";

let currentPage = 1;
const postsPerPage = 12;

/**
 * Displays paginated blog posts and manages the pagination logic.
 *
 * - Fetches posts for the current page and displays them using the `displayBlogPosts` function.
 * - Handles pagination, updating the page number and loading the correct posts when the user clicks "Previous" or "Next".
 * - Shows a message if no posts are found or if there's an error loading the posts.
 *
 * @param {Function} displayBlogPosts - A function to display the fetched blog posts in the UI.
 */

export async function displayPaginatedPosts(displayBlogPosts) {
  const postListContainer = document.querySelector(".blog-posts");
  const paginationInfo = document.getElementById("pagination-info");
  const previousButton = document.querySelector(".pagination-previous");
  const nextButton = document.querySelector(".pagination-next");

  // Function to render the posts based on the current page

  async function renderPosts() {
    try {
      const posts = await getPosts(postsPerPage, currentPage);

      if (posts.length === 0) {
        postListContainer.innerHTML = "<p>No blog posts available.</p>";
        return;
      }

      postListContainer.innerHTML = "";
      displayBlogPosts(posts);

      updatePaginationInfo();
    } catch (error) {
      console.error("Error rendering posts:", error);
      postListContainer.innerHTML =
        "<p>Error loading posts. Please try again.</p>";
    }
  }

  // Function to update the displayed pagination information

  function updatePaginationInfo() {
    paginationInfo.textContent = `Page ${currentPage}`;
  }

  previousButton.addEventListener("click", async () => {
    if (currentPage > 1) {
      currentPage--;
      await renderPosts();
    }
  });

  nextButton.addEventListener("click", async () => {
    currentPage++;
    await renderPosts();
  });

  await renderPosts();
}
