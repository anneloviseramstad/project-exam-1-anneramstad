import { createPostHandler } from "../../handlers/posts/createPostHandler.js";

export function initCreatePost() {
  const form = document.querySelector("#createPostForm");
  if (form) {
    form.addEventListener("submit", createPostHandler);
  } else {
    console.error("Create post form not found");
  }
}
