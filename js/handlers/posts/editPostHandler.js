import { editPost } from "../../api/posts/editPost.js";

/**
 * Handles the form submission to edit an existing blog post.
 *
 * @param {Event} event - The form submit event.
 * @param {string} id - The ID of the post to edit.
 *
 * - Collects form data (title, body, tags, media) and validates required fields.
 * - Calls `editPost` to update the post.
 * - On success, redirects to the homepage.
 * - On failure, logs the error and shows an alert with the error message.
 */

export async function editPostHandler(event, id) {
  event.preventDefault();

  try {
    const title = event.target.title.value.trim();
    const body = event.target.body.value.trim();
    const tags = event.target.tags.value
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
    const mediaUrl = event.target.mediaUrl.value.trim();
    const mediaAlt = event.target.mediaAlt.value.trim();
    const media =
      mediaUrl || mediaAlt
        ? { url: mediaUrl || "", alt: mediaAlt || "" }
        : null;

    if (!title || !body) {
      alert("Title and body are required.");
      return;
    }

    await editPost(id, { title, body, tags, media });

    window.location.href = `/`;
  } catch (error) {
    console.error("Error updating post:", error.message);
    alert(`Error updating post: ${error.message}`);
  }
}
