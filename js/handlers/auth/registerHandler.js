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

  console.log(data);

  const fieldset = form.querySelector("fieldset");
  const button = form.querySelector("button");

  try {
    fieldset.disabled = true;
    await registerUser(data);

    displayMessage(
      "#message",
      "success",
      "Registration successful! Please log in."
    );
    form.reset();
  } catch (error) {
    console.error(error);
    displayMessage(container, "warning", error.message);
  } finally {
    fieldset.disabled = false;
  }
}
