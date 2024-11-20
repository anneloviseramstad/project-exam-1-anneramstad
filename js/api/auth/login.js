// LOGIN API LOGIC

import { API_LOGIN_ENDPOINT } from "../../constants/api.js";

export async function loginUser({ email, password }) {
  const url = `${API_LOGIN_ENDPOINT}`;

  const body = {
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
      const errorData = await response.json();
      throw new Error(errorData.message || "Invalid credentials");
    }

    return await response.json();
  } catch (error) {
    console.error("Login failed:", error);
    throw new Error("An error occurred while logging in. Please try again.");
  }
}
