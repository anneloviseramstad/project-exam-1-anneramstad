import { editPostHandler } from "../../handlers/posts/editPostHandler.js";
import { getPostById } from "../../api/posts/getPostById.js";

const postId = JSON.parse(localStorage.getItem("postId")) || null;

const editPostForm = document.getElementById("editPostForm");

export async function initEditPost() {
  if (!postId) {
    console.error("No postId found in localStorage.");
    alert("Post ID is missing. Cannot load the post.");
    return;
  }

  try {
    const post = await getPostById(postId);

    if (!post || !post.data) {
      console.error("Post not found or data is missing.");
      alert("Could not load the post. Please try again later.");
      return;
    }

    const { title, body, tags = [], media } = post.data;

    editPostForm.title.value = title || "";
    editPostForm.body.value = body || "";
    editPostForm.tags.value = tags.join(", ") || "";
    editPostForm.mediaUrl.value = media?.url || "";
    editPostForm.mediaAlt.value = media?.alt || "";
  } catch (error) {
    console.error("Error fetching post:", error.message);
    alert("An error occurred while loading the post data.");
  }

  editPostForm.addEventListener("submit", (event) => {
    editPostHandler(event, postId);
  });
}

if (window.location.pathname === "/post/edit") {
  initEditPost();
}
