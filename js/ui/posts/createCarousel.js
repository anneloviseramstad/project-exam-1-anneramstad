import { getLatestPosts } from "../../api/posts/getLatestPosts.js";

export async function createCarousel() {
  const carouselItems = document.querySelector("#carouselItems");
  const prevButton = document.querySelector("#prevButton");
  const nextButton = document.querySelector("#nextButton");

  try {
    const posts = await getLatestPosts(3); // Hent innleggene

    localStorage.setItem("posts", JSON.stringify(posts));

    const cardsHTML = posts.data.map(
      (post) => `
        <div class="carousel-card" style="background-image: url('${
          post.media?.url || "/default-image.jpg"
        }')" data-id="${post.id}">
          <h2>${post.title}</h2>
        </div>
      `
    );

    carouselItems.innerHTML = cardsHTML.join("");

    let currentIndex = 0;

    function updateCarousel() {
      carouselItems.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + posts.length) % posts.length;
      updateCarousel();
    });

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % posts.length;
      updateCarousel();
    });

    document.querySelectorAll(".carousel-card").forEach((card) => {
      card.addEventListener("click", (event) => {
        const postId = event.currentTarget.getAttribute("data-id");
        window.location.href = `/post/${postId}`;
      });
    });

    updateCarousel();
  } catch (error) {
    console.error("Error creating carousel:", error);
    document.querySelector("#carouselContainer").innerHTML = `
      <p>Failed to load the carousel. Please try again later.</p>
    `;
  }
}
