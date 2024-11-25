import { createPost } from "../../api/posts/createPost.js";

export async function createPostHandler(event) {
  event.preventDefault();

  const title = event.target.title.value;
  const body = event.target.body.value;
  const tags = event.target.tags.value.split(",").map((tag) => tag.trim());
  const mediaUrl = event.target.mediaUrl.value;
  const mediaAlt = event.target.mediaAlt.value;

  const media = mediaUrl ? { url: mediaUrl, alt: mediaAlt } : null;

  try {
    const newPost = await createPost({ title, body, tags, media });
    form.reset();
    window.location.href = "../post/manage.html";
  } catch (error) {
    console.error("Error creating post:", error.message);
    alert(`Error creating post: " + ${error.message}`);
  }
}
