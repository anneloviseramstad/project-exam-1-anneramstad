import { registerHandler } from "./handlers/auth/registerHandler.js";
import { initLogin } from "./ui/auth/login.js";
import { loginStatusAndNavStatus } from "./ui/common/navbar.js";
import { initCreatePost } from "./ui/posts/initCreatePost.js";
import { managePostsHandler } from "./handlers/posts/managePostsHandler.js";
import { getPostByIdHandler } from "./handlers/posts/getPostById.js";
import { initEditPost } from "./ui/posts/initEditPost.js";
import { createCarousel } from "./ui/posts/createCarousel.js";

function router() {
  const fullPath = window.location.pathname;

  const searchParams = new URLSearchParams(window.location.search);
  const postId = searchParams.get("id");

  const pathParts = fullPath.split("/").slice(2).join("/");
  const pathname = `/${pathParts}`;

  loginStatusAndNavStatus();

  if (postId) {
    console.log("Post details page");
    getPostByIdHandler(postId);
    return;
  }

  switch (pathname) {
    case "/":
      console.log("Blog Feed Page");
      managePostsHandler();
      createCarousel();
      break;
    case "/home":
      console.log("Homepage");
      break;
    case "/login":
      console.log("Login Page");
      initLogin();
      break;
    case "/about":
      console.log("Aboutpage");
      break;
    case "/post":
      console.log("Blog Post Public Page");
      break;
    case "/manage":
      console.log("Manage Posts Page");
      managePostsHandler();
      createCarousel();
      break;
    case "/createpost":
      console.log("Create Post Page");
      initCreatePost();
      break;
    case "/edit":
      console.log("Edit Post Page");
      initEditPost();
      break;
    case "/register":
      console.log("Register Page");
      registerHandler();
      break;
    default:
      console.log("Page not found");
  }
}

// document.addEventListener("DOMContentLoaded", router);

document.addEventListener("DOMContentLoaded", () => {
  console.info("hey");
  router();
});
