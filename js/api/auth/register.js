import { API_REGISTER_ENDPOINT } from "../../constants/api.js";
import { headers } from "../../constants/headers.js";
import { displayMessage } from "../../ui/common/displayMessage.js";

/**
 * Registers a new user by sending their details to the API register endpoint.
 *
 * @param {string} name - The user's name.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 *
 * @returns {void}
 *
 * - Validates the input fields for completeness, email format, and password length.
 * - Alerts the user if validation fails or registration is unsuccessful.
 * - Redirects to the login page if registration succeeds.
 * @throws {Error} Logs an error to the console if an unexpected error occurs.
 */

export async function registerUser({ name, email, password }) {
  const url = `${API_REGISTER_ENDPOINT}`;
  const body = {
    name,
    email,
    password,
  };

  if (!name || !email || !password) {
    displayMessage("Please fill out all fields.");
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    displayMessage("Please enter a valid email address.");
    return;
  }

  if (password.length < 8) {
    displayMessage("Password must be at least 8 characters long.");
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
      if (data.errors && data.errors.length > 0) {
        displayMessage(`Registration failed: ${data.errors[0].message}`);
      } else {
        displayMessage(
          `Registration failed: ${data.message || "Unknown error"}`
        );
      }
      return;
    }

    alert("Registration successful!");
    window.location.href = "/account/login";
  } catch (error) {
    console.error("Registration failed:", error);
    alert("An error occurred while registering. Please try again.");
  }
}
