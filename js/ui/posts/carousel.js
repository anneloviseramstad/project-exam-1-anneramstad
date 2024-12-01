import { getPosts } from "../../api/posts/getPosts.js";

/**
 * Sets up a carousel to display the latest 3 posts.
 * - Fetches posts from the API.
 * - Sorts them by creation date, and selects the 3 most recent posts.
 * - Updates the carousel content (image, title, and link) based on the selected post.
 * - Allows the user to scroll through the carousel using left and right buttons.
 */

export async function setupCarousel() {
  try {
    const posts = await getPosts();

    if (!posts || posts.length === 0) {
      console.error("No posts found");
      return;
    }

    // Sort posts by creation date and pick the top 3 most recent
    const latestPosts = posts
      .sort((a, b) => new Date(b.created) - new Date(a.created))
      .slice(0, 3);

    // Select DOM elements for carousel functionality
    const carouselLink = document.querySelector(".carousel-link");
    const carouselImage = document.querySelector(".carousel-image");
    const carouselTitle = document.getElementById("carouselTitle");
    const scrollLeftBtn = document.querySelector(".btn-left");
    const scrollRightBtn = document.querySelector(".btn-right");

    let currentIndex = 0;

    // Update carousel content based on currentIndex
    function updateCarousel() {
      const currentPost = latestPosts[currentIndex];

      carouselLink.href = `/post?id=${currentPost.id}`;

      carouselImage.src = currentPost.media?.url || "/default-image.jpg";
      carouselTitle.textContent = currentPost.title || "No title";
    }

    // Scroll left in the carousel
    function scrollLeft() {
      currentIndex =
        (currentIndex - 1 + latestPosts.length) % latestPosts.length;
      updateCarousel();
    }

    // Scroll right in the carousel
    function scrollRight() {
      currentIndex = (currentIndex + 1) % latestPosts.length;
      updateCarousel();
    }

    // Event listeners for scroll buttons
    scrollLeftBtn.addEventListener("click", scrollLeft);
    scrollRightBtn.addEventListener("click", scrollRight);

    updateCarousel();
  } catch (error) {
    console.error("Error setting up carousel:", error.message);
  }
}
