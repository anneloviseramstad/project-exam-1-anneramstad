// LOGIN LOGIC

import { loginUser } from "../../api/auth/login.js";
import { updateNav } from "../../ui/common/navbar.js";

export async function loginHandler(event) {
  const form = event.target;
  const { email, password } = new FormData(form);

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
