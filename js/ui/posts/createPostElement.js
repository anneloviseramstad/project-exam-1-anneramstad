// createPostElement.js
export function createPostElement(container, post) {
  const postElement = document.createElement("div");
  postElement.classList.add("post-card");

  const link = document.createElement("a");
  link.href = `/post?id=${post.id}`;
  link.classList.add("post-link");

  const heading = document.createElement("h2");
  heading.textContent = post.title;

  const content = document.createElement("p");
  content.textContent = post.body;

  const metaInfoContainer = document.createElement("div");
  metaInfoContainer.innerHTML = `
    <p><strong>Tags:</strong> ${post.tags.join(", ")}</p>
    <p><strong>Author:</strong> ${post.author?.name || "Unknown"}</p>
    <p><strong>Created:</strong> ${new Date(post.created).toLocaleString()}</p>
  `;

  if (post.media?.url) {
    const image = document.createElement("img");
    image.src = post.media.url;
    image.alt = post.media.alt || "Post image";
    image.className = "postImage";
    link.appendChild(image);
  }

  link.appendChild(heading);
  link.appendChild(content);
  link.appendChild(metaInfoContainer);

  postElement.appendChild(link);
  container.appendChild(postElement);
}
