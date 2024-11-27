import { API_REGISTER_ENDPOINT } from "../../constants/api.js";
import { headers } from "../../constants/headers.js";

export async function registerUser(user) {
  const body = {
    name: user.name,
    email: user.email,
    password: user.password,
  };

  if (!user.name || !user.email || !user.password) {
    alert("Please fill out all fields.");
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(user.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (user.password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  try {
    const response = await fetch(API_REGISTER_ENDPOINT, {
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
