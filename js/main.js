import { registerHandler } from "./handlers/auth/registerHandler.js";
import { initLogin } from "./ui/auth/login.js";
import { loginStatusAndNavStatus } from "./ui/common/navbar.js";
import { initCreatePost } from "./ui/posts/initCreatePost.js";
import { managePostsHandler } from "./handlers/posts/managePostsHandler.js";
import { indexPageHandler } from "./handlers/posts/indexPageHandler.js";
import { getPostByIdHandler } from "./handlers/posts/getPostById.js";
import { initEditPost } from "./ui/posts/initEditPost.js";
import { setupCarousel } from "./ui/posts/carousel.js";

function router() {
  const fullPath = window.location.pathname;

  const searchParams = new URLSearchParams(window.location.search);
  const postId = searchParams.get("id");

  const pathParts = fullPath.split("/").slice(2).join("/");
  const pathname = `/${pathParts}`;

  loginStatusAndNavStatus();

  if (postId) {
    getPostByIdHandler(postId);
    return;
  }

  switch (pathname) {
    case "/":
      indexPageHandler();
      setupCarousel();
      break;
    case "/home":
      break;
    case "/login":
      initLogin();
      break;
    case "/about":
      break;
    case "/post":
      break;
    case "/manage":
      managePostsHandler();
      setupCarousel();
      break;
    case "/createpost":
      initCreatePost();
      break;
    case "/edit":
      initEditPost();
      break;
    case "/register":
      registerHandler();
      break;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  router();
});

// References:

// https://jessywlee.medium.com/apply-http-post-method-and-fetch-function-to-user-login-js-react-d74a2c19ab7d

// https://www.w3schools.com/js/default.asp

// https://mollify.noroff.dev/content/feu1/javascript-1?nav=

// https://github.com/cnnrbrn/js2-code-arrangement

// https://color-muse-blog-project-exam-1.netlify.app/
