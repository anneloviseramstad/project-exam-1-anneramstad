import { editPost } from "../../api/posts/editPost.js";

export async function editPostHandler(event, id) {
  event.preventDefault();

  try {
    const title = event.target.title.value.trim();
    const body = event.target.body.value.trim();
    const tags = event.target.tags.value
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
    const mediaUrl = event.target.mediaUrl.value.trim();
    const mediaAlt = event.target.mediaAlt.value.trim();
    const media =
      mediaUrl || mediaAlt
        ? { url: mediaUrl || "", alt: mediaAlt || "" }
        : null;

    if (!title || !body) {
      alert("Title and body are required.");
      return;
    }

    await editPost(id, { title, body, tags, media });

    window.location.href = `/`;
  } catch (error) {
    console.error("Error updating post:", error.message);
    alert(`Error updating post: ${error.message}`);
  }
}
