import { getPosts } from "../../api/posts/getPosts.js";

export async function filterBar(posts, searchQuery, filterCriteria) {
  if (!Array.isArray(posts)) {
    console.error("Posts is not an array or is undefined");
    return; // Hvis 'posts' ikke er definert, avslutt funksjonen tidlig
  }
  const filteredPosts = posts.filter((post) => {
    const titleMatch = searchQuery
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const tagMatch = filterCriteria.tag
      ? post.tags.includes(filterCriteria.tag)
      : true;

    const authorMatch = filterCriteria.author
      ? post.author.name === filterCriteria.author
      : true;

    return titleMatch && tagMatch && authorMatch;
  });

  if (filterCriteria.dateSort === "newest-oldest") {
    filteredPosts.sort((a, b) => new Date(b.created) - new Date(a.created));
  } else if (filterCriteria.dateSort === "oldest-newest") {
    filteredPosts.sort((a, b) => new Date(a.created) - new Date(b.created));
  }

  const container = document.querySelector("#postsContainer");
  container.innerHTML = "";

  filteredPosts.forEach((post) => {
    getPosts(container, post, deletePostHandler);
  });
}

export function setupFilterBar(posts) {
  const filterForm = document.querySelector("#filterForm");
  filterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const searchQuery = document.querySelector("#searchInput").value;
    const filterCriteria = {
      tag: document.querySelector("#tagSelect").value,
      author: document.querySelector("#authorSelect").value,
      dateSort: document.querySelector("#dateSortSelect").value,
    };

    filterBar(posts, searchQuery, filterCriteria);
  });

  const searchInput = document.querySelector("#searchInput");
  searchInput.addEventListener("input", () => {
    const searchQuery = searchInput.value;
    const filterCriteria = {
      tag: document.querySelector("#tagSelect").value,
      author: document.querySelector("#authorSelect").value,
      dateSort: document.querySelector("#dateSortSelect").value,
    };
    setupFilterBar(posts, searchQuery, filterCriteria);
  });
}
