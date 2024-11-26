import { registerHandler } from "./handlers/auth/registerHandler.js";
import { initLogin } from "./ui/auth/login.js";
import { loginStatusAndNavStatus } from "./ui/common/navbar.js";
import { initCreatePost } from "./ui/posts/initCreatePost.js";
import { managePostsHandler } from "./handlers/posts/managePostsHandler.js";

function router() {
  const fullPath = window.location.pathname;

  const pathParts = fullPath.split("/").slice(2).join("/");
  const pathname = `/${pathParts}`;

  loginStatusAndNavStatus();

  switch (pathname) {
    case "/":
      console.log("Blog Feed Page");
      managePostsHandler();
      break;
    case "/home/index.html":
    case "/index.html":
      console.log("Homepage");
      break;
    case "/account/login.html":
    case "/login.html":
      console.log("Login Page");
      initLogin();
      break;
    case "/about/index.html":
      console.log("Aboutpage");
      break;
    case "/post/index.html":
      console.log("Blog Post Public Page");
      break;
    case "/post/manage.html":
    case "/manage.html":
      console.log("Manage Posts Page");
      managePostsHandler();
      break;
    case "/post/create.html":
    case "/createpost.html":
      console.log("Create Post Page");
      initCreatePost();
      break;
    case "/post/edit.html":
    case "/edit.html":
      console.log("Edit Post Page");
      break;
    case "/account/register.html":
    case "/register.html":
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
