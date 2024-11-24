// createButton.js

export function createDeleteButton(postId, onDeletePost) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this post?")) {
      onDeletePost(postId);
    }
  });
  return deleteButton;
}

export function createEditButton(postId) {
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => {
    window.location.href = `/post/edit.html?id=${postId}`;
  });
  return editButton;
}
