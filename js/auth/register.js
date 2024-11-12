document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const userData = {
      username: document.getElementById("text").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User registered:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
