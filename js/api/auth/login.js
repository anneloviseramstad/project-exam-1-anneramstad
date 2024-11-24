import { API_LOGIN_ENDPOINT } from "../../constants/api.js";
import { headers } from "../../constants/headers.js";

export async function loginUser({ email, password }) {
  try {
    const response = await fetch(API_LOGIN_ENDPOINT, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(message || "Unknown error");
    }

    const { data } = await response.json();
    const { accessToken, name } = data;

    localStorage.setItem("accesstoken", accessToken);
    localStorage.setItem("username", name);

    JSON.stringify({ name });

    return data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}
