export async function setupCarousel(posts) {
  if (!posts || posts.length === 0) {
    console.error("No posts found");
    return;
  }
}

const latestPosts = posts
  .sort((a, b) => new Date(b.created) - new Date(a.created))
  .slice(0, 3);

const carouselImage = document.querySelector(".carousel-image");
const carouselTitle = document.getElementById("carousel-title");
const scrollLeftBtn = document.querySelector(".btn-left");
const scrollRightBtn = document.querySelector(".btn-right");

let currentIndex = 0;

function updateCarousel() {
  const currentPost = latestPosts[currentIndex];
  carouselImage.src = currentPost.imageUrl;
  carouselTitle.textContent = currentPost.title || "No title";
}


<div class="carousel">
        <button class="btn-left" aria-label="Previous">
          <i class="fa-solid fa-arrow-left"></i>
        </button>

        <button class="btn-right" aria-label="Next">
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>