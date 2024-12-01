import { createPost } from "../../api/posts/createPost.js";

/**
 * Handles the form submission to create a new blog post.
 *
 * @param {Event} event - The form submit event.
 *
 * - Prevents the default form submission behavior.
 * - Collects form data (title, body, tags, media) and prepares it for the API request.
 * - Calls the `createPost` function to create a new post.
 * - On success, resets the form, logs the created post, and redirects to the post management page.
 * - On failure, logs the error and shows an alert to the user.
 */

export async function createPostHandler(event) {
  event.preventDefault();
  const form = event.target;
  const title = form.title.value.trim();
  const body = form.body.value.trim();
  const tags = form.tags.value.split(",").map((tag) => tag.trim());
  const mediaUrl = form.mediaUrl.value.trim();
  const mediaAlt = form.mediaAlt.value.trim();
  const media = mediaUrl ? { url: mediaUrl, alt: mediaAlt } : null;
  try {
    const newPost = await createPost({ title, body, tags, media });
    console.log("Post created successfully:", newPost);
    form.reset();
    window.location.href = "/post/manage";
  } catch (error) {
    console.error("Error creating post:", error.message);
    alert(`Error creating post: " + ${error.message}`);
  }
}
