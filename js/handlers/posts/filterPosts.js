import { createPostElement } from "../../ui/posts/createPostElement.js";

export function filterPosts(posts) {
  const searchInput = document.querySelector("#search");

  if (searchInput) {
    searchInput.addEventListener("input", handleFilter);
  }

  function handleFilter(event) {
    const filterValue = event.target.value.trim().toLowerCase();

    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().startsWith(filterValue)
    );

    const container = document.querySelector("#postsContainer");
    container.innerHTML = "";

    filteredPosts.forEach((post) => {
      createPostElement(container, post);
    });
  }
}
