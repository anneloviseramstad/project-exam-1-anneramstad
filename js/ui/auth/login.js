import { loginHandler } from "../../handlers/auth/loginHandler.js";

/**
 * Initializes the login form by attaching the login handler to the form submission event.
 *
 * - Attaches the `loginHandler` to the login form's submit event.
 * - Logs an error if the login form is not found on the page.
 */

export function initLogin() {
  const loginForm = document.querySelector("#loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", loginHandler);
  } else {
    console.error("Login form not found");
  }
}
