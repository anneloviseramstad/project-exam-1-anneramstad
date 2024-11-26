import { createPost } from "../../api/posts/createPost.js";

export async function createPostHandler(event) {
  event.preventDefault();
  const form = event.target;
  const title = form.title.value.trim();
  const body = form.body.value.trim();
  const tags = form.tags.value.split(",").map((tag) => tag.trim());
  const mediaUrl = form.mediaUrl.value.trim();
  const mediaAlt = form.mediaAlt.value.trim();
  const media = mediaUrl ? { url: mediaUrl, alt: mediaAlt } : null;
  try {
    const newPost = await createPost({ title, body, tags, media });
    console.log("Post created successfully:", newPost);
    form.reset();
    window.location.href = "../post/manage.html";
  } catch (error) {
    console.error("Error creating post:", error.message);
    alert(`Error creating post: " + ${error.message}`);
  }
}
