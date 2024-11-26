import { createEditButton, createDeleteButton } from "./createButton.js";
import { isUserLoggedIn } from "../../constants/accessToken.js"; // For å sjekke om brukeren er logget inn

export function createPostElement(container, post, deletePostHandler) {
  const postElement = document.createElement("div");
  postElement.classList.add("post-card");

  const link = document.createElement("a");
  link.href = `/post?id=${post.id}`;
  link.classList.add("post-link");

  const heading = document.createElement("h2");
  heading.textContent = post.title;

  const content = document.createElement("p");
  content.textContent = post.body;

  const metaInfoContainer = document.createElement("div");
  metaInfoContainer.innerHTML = `
    <p><strong>Tags:</strong> ${post.tags.join(", ")}</p>
    <p><strong>Author:</strong> ${post.author?.name || "Unknown"}</p>
    <p><strong>Created:</strong> ${new Date(post.created).toLocaleString()}</p>
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
