import { createEditButton } from "./createButton.js";

export function createPostElement(container, post) {
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

  const editButton = createEditButton(post.id);
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("post-buttons");
  buttonsContainer.appendChild(editButton);

  postElement.append(heading, content, metaInfoContainer, buttonsContainer);

  return postElement;
}
