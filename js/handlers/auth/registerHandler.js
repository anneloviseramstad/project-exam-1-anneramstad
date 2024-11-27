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

  // Validering av skjema-data før vi sender det til registerUser
  if (!data.name || !data.email || !data.password) {
    displayMessage(container, "warning", "Please fill out all fields.");
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    displayMessage(container, "warning", "Please enter a valid email address.");
    return;
  }

  if (data.password.length < 8) {
    displayMessage(
      container,
      "warning",
      "Password must be at least 8 characters long."
    );
    return;
  }

  try {
    // Nå sender vi data til registerUser etter validering
    await registerUser(data);
    displayMessage(container, "success", "Registration successful!");
    form.reset();
  } catch (error) {
    // Hvis feil oppstår i registerUser, vis feilmeldingen
    displayMessage(container, "warning", error.message);
  }
}
