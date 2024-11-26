//REGISTER API LOGIC

import { API_REGISTER_ENDPOINT } from "../../constants/api.js";
import { headers } from "../../constants/headers.js";

export async function registerUser(user) {
  const body = {
    name: user.name,
    email: user.email,
    password: user.password,
  };

  try {
    const response = await fetch(API_REGISTER_ENDPOINT, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      const errorData = await response.json();
      alert(`Registration failed: ${errorData.message || "Unknown error"}`);
    } else {
      alert("Registration successful!");
      window.location.href = "/account/login";
    }
  } catch (error) {
    console.error("Registration failed:", error);
    alert("An error occurred while registering. Please try again.");
  }
}
