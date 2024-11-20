import { API_LOGIN_ENDPOINT } from "../constants/api.js";

export async function loginUser({ email, password }) {
  try {
    const response = await fetch(API_LOGIN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(message) || "Login failed";
    }

    const { data } = await response.json();
    const { accessToken, name } = data;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userInformation", JSON.stringify({ name, email }));
    return data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}
