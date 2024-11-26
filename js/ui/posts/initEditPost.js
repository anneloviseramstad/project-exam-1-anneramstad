import { editPostHandler } from "../../handlers/posts/editPostHandler.js";
import { getPosts } from "../../api/posts/getPosts.js";

const postId = JSON.parse(localStorage.getItem("postId")) || null;
const editPostForm = document.getElementById("editPostForm");

export async function initEditPost() {
  try {
    const posts = await getPosts(postId);
    if (posts && posts.data) {
      const { title, body, tags = [], media } = posts.data;
      editPostForm.title.value = title;
      editPostForm.body.value = body;
      editPostForm.tags.value = tags.join(", ");
      editPostForm.mediaUrl.value = media ? media.url : "";
      editPostForm.mediaAlt.value = media ? media.alt : "";
    } else {
      console.error("Post not found");
    }
  } catch (error) {
    console.error("Error fetching post:", error.message);
  }
  editPostForm.addEventListener("submit", (event) => {
    editPostHandler(event, postId);
  });
}

initEditPost();
