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

    console.log("User data:", userData);

    const { data } = userData || {};
    const { accessToken, name } = data || {};

    if (accessToken && name) {
      // Store credentials in localStorage
      localStorage.setItem("apiKey", "c3ffc844-20e9-405d-b93a-d32b9871798f");
      localStorage.setItem("username", name);

      // Update UI (e.g., Navbar) and redirect
      updateNav(name);
      window.location.href = "../post/manage.html";
    } else {
      console.error("Login failed: Missing access token or username.");
      alert("Login failed: Missing access token or username.");
    }
  } catch (error) {
    console.error("Login failed:", error);
    alert("Login failed: " + (error.message || "Unexpected error occurred."));
  }
}
