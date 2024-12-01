import { registerUser } from "../../api/auth/register.js";
import { displayMessage } from "../../ui/common/displayMessage.js";

/**
 * Initializes the event listener for the registration form submission.
 *
 * - Listens for the form submission and calls the `submitForm` function when submitted.
 *
 * @returns {void}
 */

export function registerHandler() {
  const form = document.querySelector("#registerForm");
  if (form) {
    form.addEventListener("submit", submitForm);
  }
}

/**
 * Handles the registration form submission.
 *
 * - Prevents default form submission behavior.
 * - Collects form data and calls the `registerUser` function.
 * - Displays success or error message based on registration outcome.
 *
 * @param {Event} event - The form submission event.
 * @returns {void}
 */

async function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const container = document.querySelector("#message");

  try {
    await registerUser(data);
    form.reset();
  } catch (error) {
    displayMessage(container, "warning", error.message);
  }
}
