import { createPostElement } from "../../ui/posts/createPostElement.js";

export function filterByDate(posts, order = "newest-oldest") {
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.created);
    const dateB = new Date(b.created);

    console.log(dateA, dateB);

    if (order === "newest-oldest") {
      return dateB - dateA;
    } else if (order === "oldest-newest") {
      return dateA - dateB;
    }
    return 0;
  });

  const container = document.querySelector("#postsContainer");
  container.innerHTML = "";

  sortedPosts.forEach((post) => {
    createPostElement(container, post);
  });
}
