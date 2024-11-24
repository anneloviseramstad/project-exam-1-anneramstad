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

    if (response.ok) {
      const data = await response.json();
      console.log("Response data:", data);
      return data;
    } else {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `Login failed with status ${response.status}`
      );
    }
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}
