document.addEventListener("DOMContentLoaded", async () => {
  const blogName = "culinaryCreations";
  const endpoint = `${API_BASE_URL}/blog/posts/${blogName}`;
  const postsContainer = document.getElementById("postsGrid");

  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const posts = await response.json();
      displayPosts(posts);
    } else {
      postsContainer.innerText = "Failed to load posts.";
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    postsContainer.innerText = "An error occurred while loading posts.";
  }
});

function displayPosts(posts) {
  const postsContainer = document.getElementById("postsGrid");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postCard = `
    <div class="post-card">
    <img src="${post.imageUrl}" alt="${post.imageAltText}" />
    <h3>${post.title}</h3>
    <p>${post.content.substring(0, 100)}...</p>
    <a href="/blog/posts/${post.id}" class="view-post">Read More</a>
    </div>
    `;
    postsContainer.innerHTML += postCard;
  });
}
