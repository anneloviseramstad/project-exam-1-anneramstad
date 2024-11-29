import { getPosts } from "../../api/posts/getPosts.js";
import { createPostElement } from "../../ui/posts/createPostElement.js";

export async function filterBar(searchQuery, filterCriteria) {
  try {
    const posts = await getPosts();

    if (!posts || posts.length === 0) {
      console.error("No posts found to filter.");
      return;
    }

    let filteredPosts = posts.filter((post) => {
      const matchesSearchQuery = searchQuery
        ? post.title.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      const matchesTag = filterCriteria.tags
        ? post.tags.some((tags) =>
            tags.toLowerCase().includes(filterCriteria.tag.toLowerCase())
          )
        : true;

      const matchesAuthor = filterCriteria.author
        ? post.author?.name
            .toLowerCase()
            .includes(filterCriteria.author.toLowerCase())
        : true;

      return matchesSearchQuery && matchesTag && matchesAuthor;
    });

    if (filterCriteria.dateSort === "newest-oldest") {
      filteredPosts.sort((a, b) => new Date(b.created) - new Date(a.created));
    } else if (filterCriteria.dateSort === "oldest-newest") {
      filteredPosts.sort((a, b) => new Date(a.created) - new Date(b.created));
    }

    const container = document.querySelector("#postsContainer");
    container.innerHTML = "";

    filteredPosts.forEach((post) => createPostElement(container, post));
  } catch (error) {
    console.error("Error filtering posts:", error.message);
  }
}
