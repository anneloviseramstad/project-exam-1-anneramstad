import { getPosts } from "../../api/posts/getPosts.js";

export async function filterPostsByDate(order) {
  try {
    const posts = await getPosts();

    const sortedPosts = posts.sort((a, b) => {
      const dateA = new Date(a.created);
      const dateB = new Date(b.created);

      if (order === "newest-oldest") {
        return dateB - dateA; // Nyeste til eldste
      } else if (order === "oldest-newest") {
        return dateA - dateB; // Eldste til nyeste
      }
      return 0;
    });

    const container = document.querySelector("#postsContainer");
    container.innerHTML = "";

    sortedPosts.forEach((post) => {
      createPostElement(container, post);
    });
  } catch (error) {
    console.error("Error fetching and sorting posts:", error.message);
  }
}
