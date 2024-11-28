export async function getLatestPosts(limit = 3) {
  const posts = JSON.parse(localStorage.getItem("postId"));

  if (!postId) {
    return [];
  }

  return posts.slice(0, limit);
}
