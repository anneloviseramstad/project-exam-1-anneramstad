import { createEditButton, createDeleteButton } from "./createButton.js";
import { isUserLoggedIn } from "../../constants/accessToken.js";

export function createPostElement(container, post, deletePostHandler) {
  const postElement = document.createElement("div");
  postElement.classList.add("post-card");

  const link = document.createElement("a");
  link.href = `/post?id=${post.id}`;
  link.classList.add("post-link");

  const heading = document.createElement("h2");
  heading.textContent = post.title;

  const content = document.createElement("div");
  content.innerHTML = post.body;

  const readMoreButton = document.createElement("button");
  readMoreButton.textContent = "Read more..";
  readMoreButton.classList.add("read-more-btn");

  const metaInfoContainer = document.createElement("div");
  metaInfoContainer.innerHTML = `
    <h3><strong>Tags:</strong> ${post.tags.join(", ")}</h3>
    <h3><strong>Author:</strong> ${post.author?.name || "Unknown"}</h3>
    <h3><strong>Created:</strong> ${post.created.toLocaleString()}</h3>
  `;

  if (post.media?.url) {
    const image = document.createElement("img");
    image.src = post.media.url;
    image.alt = post.media.alt || "Post image";
    image.className = "postImage";
    link.appendChild(image);
  }

  link.appendChild(heading);
  link.appendChild(content);
  link.appendChild(readMoreButton);
  link.appendChild(metaInfoContainer);

  postElement.appendChild(link);

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("post-buttons");

  const editButton = createEditButton(post.id);
  editButton.classList.add("edit-button");

  const deleteButton = createDeleteButton(post.id, deletePostHandler);
  deleteButton.classList.add("delete-button");

  if (!isUserLoggedIn()) {
    buttonsContainer.classList.add("hidden");
  }

  buttonsContainer.appendChild(editButton);
  buttonsContainer.appendChild(deleteButton);

  postElement.appendChild(buttonsContainer);
  container.appendChild(postElement);
}
