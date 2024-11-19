import { registerHandler } from "./handlers/auth/registerHandler.js";

function router() {
  const pathname = window.location.pathname;

  console.log(pathname);

  switch (pathname) {
    case "/":
    case "/index.html":
      console.log("Blog Post Public Page");
      break;
    case "/home/index.html":
      console.log("Homepage");
      break;
    case "/account/login.html":
      console.log("Login");
      break;
    case "/account/register/":
      console.log("Registerpage");
      registerHandler;
      break;
  }
}

router();
