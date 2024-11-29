import { GET_ALL_POSTS } from "../../constants/api.js";
import { headers } from "../../constants/headers.js";

let currentPage = 1;

export async function getPosts(limit = 12, tag) {
  try {
    const params = new URLSearchParams({
      limit: limit.toString(),
      page: page.toString(),
      ...(tag && { tag }),
    });

    const response = await fetch(`${GET_ALL_POSTS}?${params}`, {
      method: "GET",
      headers: headers(),
    });

    if (response.ok) {
      const { data, totalPages } = await response.json();

      localStorage.setItem("posts", JSON.stringify(data));

      return data;
    } else {
      const errorData = await response.json();
      console.error("Error fetching posts:", errorData.message);
      throw new Error(errorData.message || "Failed to fetch posts.");
    }
  } catch (error) {
    console.error("Error fetching post:", error.message);
    throw error;
  }
}

function updatePagination(totalPages) {
  const paginationContainer = document.querySelector("#paginationContainer");

  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.innerText = i;
    pageButton.classList.add("page-button");
    if (i === currentPage) {
      pageButton.disabled = true;
    }
    pageButton.addEventListener("click", () => changePage(i));
    paginationContainer.appendChild(pageButton);
  }
}

function changePage(pageNumber) {
  currentPage = pageNumber;
  loadPosts();
}

async function loadPosts() {
  const posts = await getPosts();
  const postsContainer = document.getElementById("postsContainer");

  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerText = post.title;
    postsContainer.appendChild(postElement);
  });
}
loadPosts();
