// REGISTER LOGIC

import { registerUser } from "../../api/auth/register.js";
import { displayMessage } from "../../ui/common/displayMessage.js";

export function registerHandler() {
  const form = document.querySelector("#registerForm");
  if (form) {
    form.addEventListener("submit", submitForm);
  }
}

async function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const container = document.querySelector("#message");

  try {
    await registerUser(data);
    displayMessage(container, "success", "Registration successful!");
    form.reset();
  } catch (error) {
    displayMessage(container, "warning", error.message);
  }
}
