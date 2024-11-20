import { registerUser } from "../api/auth/register.js";

export async function onRegister(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value.trim();

  if (!name || !email || !password) {
    console.error("Please fill in all required fields.");
    return;
  }

  try {
    const result = await registerUser({ name, email, password });
    console.log("Registration successful:", result);
  } catch (error) {
    console.error("Registration failed:", error);
  }
}

document.forms.register.addEventListener("submit", onRegister);
