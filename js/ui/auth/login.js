import { login } from "../api/auth/login.js";

export async function onLogin(event) {
  event.preventDefault();
  const { email, password } = object.fromEntries(new FormData(event.target));

  try {
    const result = await login({ email: email.trim(), password });
    window.location.href = "../post/manage.html";
  } catch (error) {
    alert(`Login failed: ${error}`);
  }
}

document.forms.login.addEventListener("submit", onLogin);
