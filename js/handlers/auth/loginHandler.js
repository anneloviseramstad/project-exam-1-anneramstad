// LOGIN LOGIC

import { loginUser } from "../../api/auth/login.js";
import { updateNav } from "../../ui/common/navbar.js";

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
    localStorage.setItem("accessToken", userData.accessToken);
    localStorage.setItem("username", userData.name);
    updateNav(userData.username);
    window.location.href = "../manage.html";
  } catch (error) {
    alert("Login failed: " + error.message);
  }
}
