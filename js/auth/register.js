import { API_BASE_URL } from "./api.js";

document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const userData = {
      username: document.getElementById("text").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    fetch("/{API_URL}/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          messageDiv.textContent = "Registration successful!";
          messageDiv.style.color = "green";
          document.getElementById("registerForm").reset();
        } else {
          messageDiv.textContent =
            "Registration failed: " + (data.message || "Inknown Error");
          messageDiv.style.color = "red";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        messageDiv.textContent =
          "An error occurred during registration. Please try again.";
        messageDiv.style.color = "red";
      });
  });
