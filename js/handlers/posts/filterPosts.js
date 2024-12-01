/**
 * Filters and sorts a list of blog posts based on user inputs.
 *
 * @param {Array} posts - An array of blog post objects to be filtered.
 * @returns {Array} - The filtered and sorted array of blog posts.
 *
 * - Filters posts based on the search input (title search).
 * - Filters posts by selected tag (if any).
 * - Sorts posts by creation date (newest or oldest).
 * - Sorts posts by title (A-Z or Z-A).
 */

export function filterPosts(posts) {
  const sortByDate = document.getElementById("sortByDate").value;
  const sortByTitle = document.getElementById("sortByTitle").value;
  const sortByTag = document.getElementById("sortByTag").value;
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  let filteredPosts = posts;

  if (searchInput) {
    filteredPosts = filteredPosts.filter((post) =>
      post.title.toLowerCase().includes(searchInput)
    );
  }

  if (sortByTag && sortByTag !== "all") {
    filteredPosts = filteredPosts.filter(
      (post) => post.tags && post.tags.includes(sortByTag)
    );
  }

  if (sortByDate === "newest") {
    filteredPosts.sort(
      (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
    );
  } else if (sortByDate === "oldest") {
    filteredPosts.sort(
      (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
    );
  }

  if (sortByTitle === "a-z") {
    filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortByTitle === "z-a") {
    filteredPosts.sort((a, b) => b.title.localeCompare(a.title));
  }

  return filteredPosts;
}
