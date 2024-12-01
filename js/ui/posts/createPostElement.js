import { createEditButton, createDeleteButton } from "./createButton.js";
import { isUserLoggedIn } from "../../constants/accessToken.js";

/**
 * Creates a post element and appends it to the given container.
 * The post element consists of the post's title, content, media, metadata (tags, author, created time),
 * and includes buttons for editing and deleting the post (if the user is logged in).
 *
 * @param {HTMLElement} container - The container element where the post element will be appended.
 * @param {Object} post - The post object containing the details to be displayed.
 * @param {Function} deletePostHandler - The handler function for deleting a post when the delete button is clicked.
 */

export function createPostElement(container, post, deletePostHandler) {
  // Create the main post container
  const postElement = document.createElement("div");
  postElement.classList.add("post-card");

  // Create a link for the post, allowing it to be clickable
  const link = document.createElement("a");
  link.href = `/post?id=${post.id}`;
  link.classList.add("post-link");

  // Post title
  const heading = document.createElement("h2");
  heading.textContent = post.title;

  // Post content (body)
  const content = document.createElement("div");
  content.innerHTML = post.body;

  // Read more button
  const readMoreButton = document.createElement("button");
  readMoreButton.textContent = "Read more..";
  readMoreButton.classList.add("read-more-btn");

  // Meta information (tags, author, created)
  const metaInfoContainer = document.createElement("div");
  metaInfoContainer.innerHTML = `
    <h3><strong>Tags:</strong> ${post.tags.join(", ")}</h3>
    <h3><strong>Author:</strong> ${post.author?.name || "Unknown"}</h3>
    <h3><strong>Created:</strong> ${post.created.toLocaleString()}</h3>
  `;

  // If post has a media URL, create and append an image
  if (post.media?.url) {
    const image = document.createElement("img");
    image.src = post.media.url;
    image.alt = post.media.alt || "Post image";
    image.className = "postImage";
    link.appendChild(image);
  }

  // Append the title, content, read-more button, and meta information to the link
  link.appendChild(heading);
  link.appendChild(content);
  link.appendChild(readMoreButton);
  link.appendChild(metaInfoContainer);

  // Append the link to the post element
  postElement.appendChild(link);

  // Create the buttons container
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("post-buttons");

  // Create edit and delete buttons
  const editButton = createEditButton(post.id);
  editButton.classList.add("edit-button");

  const deleteButton = createDeleteButton(post.id, deletePostHandler);
  deleteButton.classList.add("delete-button");

  // If user is not logged in, hide the buttons
  if (!isUserLoggedIn()) {
    buttonsContainer.classList.add("hidden");
  }

  // Append the edit and delete buttons to the buttons container
  buttonsContainer.appendChild(editButton);
  buttonsContainer.appendChild(deleteButton);

  // Append the entire post element to the container
  postElement.appendChild(buttonsContainer);
  container.appendChild(postElement);
}
