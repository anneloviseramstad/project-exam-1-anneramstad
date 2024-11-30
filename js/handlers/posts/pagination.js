import { getPosts } from "../../api/posts/getPosts.js";

let currentPage = 1;
const postsPerPage = 12;

export async function displayPaginatedPosts(displayBlogPosts) {
  const postListContainer = document.querySelector(".blog-posts");
  const paginationInfo = document.getElementById("pagination-info");
  const previousButton = document.querySelector("#prev-btn");
  const nextButton = document.querySelector("#next-btn");

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
