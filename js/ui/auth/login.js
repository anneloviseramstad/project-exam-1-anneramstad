import { loginHandler } from "../../handlers/auth/loginHandler.js";

export function initLogin() {
  const loginForm = document.querySelector("#loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", loginHandler);
  } else {
    console.error("Login form not found");
  }
}
