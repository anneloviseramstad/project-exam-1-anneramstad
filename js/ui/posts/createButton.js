/**
 * Creates a delete button for a post.
 * - Sets the button text to "Delete".
 * - Associates the button with a post ID using a data attribute.
 * - Adds an event listener that calls the deletePostHandler when clicked.
 *
 * @param {string} postId - The ID of the post to be deleted.
 * @param {Function} deletePostHandler - The handler function to be called when the button is clicked.
 * @returns {HTMLButtonElement} - The delete button element.
 */

export function createDeleteButton(postId, deletePostHandler) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.dataset.postId = postId;
  deleteButton.addEventListener("click", deletePostHandler);
  return deleteButton;
}

export function createEditButton(postId) {
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => {
    window.location.href = `/post/edit?id=${postId}`;
    localStorage.setItem("postId", JSON.stringify(postId));
  });
  return editButton;
}
