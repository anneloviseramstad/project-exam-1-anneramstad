import { getPosts } from "../../path/to/getPosts.js";

export async function setupCarousel() {
  try {
    const posts = await getPosts();
    console.log("Fetched Posts:", posts);

    if (!posts || posts.length === 0) {
      console.error("No posts found");
      return;
    }

    const latestPosts = posts
      .sort((a, b) => new Date(b.created) - new Date(a.created))
      .slice(0, 3);

    const carouselImage = document.querySelector(".carousel-image");
    const carouselTitle = document.getElementById("carouselTitle");
    const scrollLeftBtn = document.querySelector(".btn-left");
    const scrollRightBtn = document.querySelector(".btn-right");

    let currentIndex = 0;

    function updateCarousel() {
      const currentPost = latestPosts[currentIndex];
      carouselImage.src = currentPost.media?.url || "/default-image.jpg";
      carouselTitle.textContent = currentPost.title || "No title";
    }

    function scrollLeft() {
      currentIndex =
        (currentIndex - 1 + latestPosts.length) % latestPosts.length;
      updateCarousel();
    }

    function scrollRight() {
      currentIndex = (currentIndex + 1) % latestPosts.length;
      updateCarousel();
    }

    scrollLeftBtn.addEventListener("click", scrollLeft);
    scrollRightBtn.addEventListener("click", scrollRight);

    updateCarousel();
  } catch (error) {
    console.error("Error setting up carousel:", error.message);
  }
}
