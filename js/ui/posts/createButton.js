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
    window.location.href = `/post/edit.html?id=${postId}`;
    localStorage.setItem("postId", JSON.stringify(postId));
  });
  return editButton;
}
