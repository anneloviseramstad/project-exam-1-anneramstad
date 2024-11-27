import { API_REGISTER_ENDPOINT } from "../../constants/api.js";
import { headers } from "../../constants/headers.js";

export async function registerUser({ name, email, password }) {
  const url = `${API_REGISTER_ENDPOINT}`;
  const body = {
    name,
    email,
    password,
  };

  if (!name || !email || !password) {
    alert("Please fill out all fields.");
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(`Registration failed: ${data.message || "Unknown error"}`);
      return;
    }

    alert("Registration successful!");
    window.location.href = "/account/login";
  } catch (error) {
    console.error("Registration failed:", error);
    alert("An error occurred while registering. Please try again.");
  }
}
