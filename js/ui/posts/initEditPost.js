import { editPostHandler } from "../../handlers/posts/editPostHandler.js";
import { getPostById } from "../../api/posts/getPostById.js";

// Retrieve postId from localStorage or set it to null if not found
const postId = JSON.parse(localStorage.getItem("postId")) || null;

// Reference to the edit post form
const editPostForm = document.getElementById("editPostForm");

// Function to initialize the post editing
export async function initEditPost() {
  if (!postId) {
    console.error("No postId found in localStorage.");
    alert("Post ID is missing. Cannot load the post.");
    return;
  }

  try {
    // Fetch the post data using the postId
    const post = await getPostById(postId);

    if (!post || !post.data) {
      console.error("Post not found or data is missing.");
      alert("Could not load the post. Please try again later.");
      return;
    }

    const { title, body, tags = [], media } = post.data;

    // Populate the form with the retrieved post data
    editPostForm.title.value = title || "";
    editPostForm.body.value = body || "";
    editPostForm.tags.value = tags.join(", ") || "";
    editPostForm.mediaUrl.value = media?.url || "";
    editPostForm.mediaAlt.value = media?.alt || "";
  } catch (error) {
    console.error("Error fetching post:", error.message);
    alert("An error occurred while loading the post data.");
  }

  // Attach the submit event handler for editing the post
  editPostForm.addEventListener("submit", (event) => {
    editPostHandler(event, postId);
  });
}

// Only run the function when on the correct page
if (window.location.pathname === "/post/edit") {
  initEditPost();
}
