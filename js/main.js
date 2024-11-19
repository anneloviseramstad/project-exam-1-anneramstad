import { registerHandler } from "./handlers/auth/registerHandler.js";

function router() {
  const fullPath = window.location.pathname;

  const pathParts = fullPath.split("/").slice(2).join("/");
  const pathname = `/${pathParts}`;

  switch (pathname) {
    case "/":
    case "/index.html":
      console.log("Blog Feed Page");
      break;
    case "/home/index.html":
      console.log("Homepage");
      break;
    case "/account/login.html":
      console.log("Login Page");
      break;
    case "/about/index.html":
      console.log("Aboutpage");
      break;
    case "/post/index.html":
      console.log("Blog Post Public Page");
      break;
    case "/post/manage.html":
      console.log("Manage Posts Page");
      break;
    case "/post/create.html":
      console.log("Create Post Page");
      break;
    case "/post/edit.html":
      console.log("Edit Post Page");
      break;
    case "/account/register.html":
      console.log("Register Page");
      registerHandler();
      break;
    default:
      console.log("Page not found");
  }
}

router();
