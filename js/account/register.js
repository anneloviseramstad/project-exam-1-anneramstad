import { API_REGISTER_ENDPOINT } from "../constants/api.js";

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.querySelector("#registerForm");
  const registerNameInput = document.querySelector("#username-input");
  const registerEmailInput = document.querySelector("#email-input");
  const registerPasswordInput = document.querySelector("#password-input");

  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      registerUser();
    });
  }

  async function registerUser() {
    const name = registerNameInput.value;
    const email = registerEmailInput.value;
    const password = registerPasswordInput.value;

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

      const response = await fetch(API_REGISTER_ENDPOINT, options);

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          "Error. Status: ${response.status}. Message: ${errorText}"
        );
        throw new Error("Error. Status ${response.status}");
      }

      const json = await response.json();
      console.log("Registration response:", json);
      alert(
        "Registration was a success. You are now being redirected to the log in page.."
      );
      window.location.href = "../account/login.html";
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed: ${error.message} ");
    }
  }
});
