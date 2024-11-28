export async function getLatestPosts(limit = 3) {
  const posts = JSON.parse(localStorage.getItem("posts"));

  if (!posts) {
    return [];
  }

  return posts.slice(0, limit);
}
