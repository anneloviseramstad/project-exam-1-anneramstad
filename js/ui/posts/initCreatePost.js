import { createPostHandler } from "../../handlers/posts/createPostHandler.js";

/**
 * Initializes the form for creating a new post.
 * Adds an event listener to the form's submit event which triggers the `createPostHandler`.
 */

export function initCreatePost() {
  const form = document.querySelector("#createPostForm");
  if (form) {
    form.addEventListener("submit", createPostHandler);
  } else {
    console.error("Create post form not found");
  }
}
