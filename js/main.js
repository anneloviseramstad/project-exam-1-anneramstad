import { registerHandler } from "./handlers/auth/registerHandler.js";
import { onRegister } from "./ui/auth/register.js";
import { onLogin } from "./ui/auth/login.js";

function router() {
  const fullPath = window.location.pathname;

  const pathParts = fullPath.split("/").slice(2).join("/");
  const pathname = `/${pathParts}`;

  switch (pathname) {
    case "/":
      console.log("Blog Feed Page");
      break;
    case "/home/index.html":
    case "/index.html":
      console.log("Homepage");
      break;
    case "/account/login.html":
    case "/login.html":
      console.log("Login Page");
      onLogin();
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
      break;
    case "/post/create.html":
    case "/create.html":
      console.log("Create Post Page");
      break;
    case "/post/edit.html":
    case "/edit.html":
      console.log("Edit Post Page");
      break;
    case "/account/register.html":
    case "/register.html":
      console.log("Register Page");
      registerHandler();
      onRegister();
      break;
    default:
      console.log("Page not found");
  }
}

router();
