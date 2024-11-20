//REGISTER API LOGIC

import { API_REGISTER_ENDPOINT } from "../../constants/api.js";

export async function registerUser(user) {
  const url = `${API_REGISTER_ENDPOINT}`;

  const body = {
    name,
    email,
    password,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      alert("Registration successful!");
      window.location.href = "../account/login.html";
    } else {
      const errorData = await response.json();
      alert(`Registration failed: ${errorData.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error("Registration failed:", error);
    alert("An error occurred while registering. Please try again.");
  }
}
