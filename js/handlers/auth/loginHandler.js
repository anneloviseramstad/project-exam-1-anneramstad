import { loginUser } from "../../api/auth/login.js";
import { updateNav } from "../../ui/common/navbar.js";

/**
 * Handles the login form submission.
 *
 * - Prevents default form submission behavior.
 * - Collects form data (email and password).
 * - Sends the login request and stores the received access token and username.
 * - Redirects to the post management page upon successful login.
 *
 * @param {Event} event - The form submission event.
 *
 * @returns {void}
 */

export async function loginHandler(event) {
  event.preventDefault();

  const form = event.target;
  if (!(form instanceof HTMLFormElement)) {
    console.error("Event target is not a form element.");
    return;
  }

  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const userData = await loginUser({ email, password });

    localStorage.setItem("accesstoken", userData.data.accessToken);
    localStorage.setItem("username", userData.data.name);
    updateNav(userData.username);
    window.location.href = "/post/manage";
  } catch (error) {
    alert("Login failed: " + error.message);
  }
}
