import { getPosts } from "../../api/posts/getPosts.js";

export function filterPosts(posts) {
  const searchInput = document.querySelector("#search");

  if (searchInput) {
    searchInput.addEventListener("input", handleFilter);
  }

  function handleFilter(event) {
    const filterValue = event.target.value.trim().toLowerCase();

    const filterPosts = posts.filter((post) => {
      if (post.title.toLowerCase().startsWith(filterValue)) {
        return true;
      }
    });

    getPosts("#postsContainer", filterPosts);
  }
}
