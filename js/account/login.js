import { API_LOGIN_ENDPOINT } from "../constants/api.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      loginUser();
    });
  }
});

async function loginUser() {
  const loginNameInput = document.querySelector("#nameField");
  const loginEmailInput = document.querySelector("#emailField");
  const loginPasswordInput = document.querySelector("#passwordField");

  const name = loginNameInput.value;
  const email = loginEmailInput.value;
  const password = loginPasswordInput.value;

  if (!email.endsWith("@stud.noroff.no")) {
    alert("Please enter a valid email address");
    return;
  }

  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    };

    const response = await fetch(API_LOGIN_ENDPOINT, options);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error. Status: ${response.status}. Message: ${errorText}");
      throw new Error("Error. Status ${response.status}");
    }

    const json = await response.json();
    console.log("Login response:", json);

    alert("Login successful! Redirecting to home page...");
    window.location.href = "../home/index.html";
  } catch (error) {
    console.error("Login failed:", error);
    alert("Login failed: ${error.message}");
  }
}
