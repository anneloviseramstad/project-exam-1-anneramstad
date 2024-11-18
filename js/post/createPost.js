// Form Submission and Validation

document
  .getElementById("createPostForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const postTitle = document.getElementById("postTitle").value;
    const postContent = document.getElementById("postContent").value;
    const imageURL = document.getElementById("imageURL").value;
    const imageAltText = document.getElementById("imageAltText").value;
    const tags = document.getElementById("tags").value;

    const blogName = "culinaryCreations";
    const endpoint = `${API_BASE_URL}/blog/posts/${blogName}`;

    const postData = {
      title: postTitle,
      content: postContent,
      imageUrl: imageURL,
      imageAltText: imageAltText,
      tags: tags.split(",").map((tag) => tag.trim()),
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const result = await response.json();
        document.getElementById("message").innerText =
          "Blog post successfully created! Redirecting to the blog posts page...";
        document.getElementById("message").style.color = "green";
        console.log("Server response:", result);

        setTimeout(() => {
          window.location.href = "../post/manage.html";
        }, 2000);
      } else {
        const errorText = await response.text();
        document.getElementById("message").innerText =
          "Error: ${response.status} ${error}";
        document.getElementById("message").style.color = "red";
      }
    } catch (error) {
      console.error("Request failed:", error);
      document.getElementById("message").innerText =
        "An error occured while creating blog post.";
      document.getElementById("message").style.color = "red";
    }

    document.getElementById("createPostForm").reset();
  });
