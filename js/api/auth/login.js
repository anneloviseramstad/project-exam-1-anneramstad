import { API_LOGIN_ENDPOINT } from "../../constants/api.js";

/**
 * Logs in a user by sending their credentials to the API login endpoint.
 *

 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 *
 * @returns {Promise<Object>} The API response as a JSON object if the login is successful.
 * @throws {Error} Throws an error if the login fails or the server responds with an error.
 */

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
      throw new Error(errorData.message || "Login failed.");
    }

    return await response.json();
  } catch (error) {
    console.error("Login failed:", error);
    throw new Error("Login failed.");
  }
}
