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
  console.log(filteredPosts);
  return filteredPosts;
}
