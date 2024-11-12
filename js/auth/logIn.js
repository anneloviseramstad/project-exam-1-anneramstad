document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const loginData = {
    username: document.getElementById("text").value,
    password: document.getElementById("password").value,
  };

  fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "/home/index.html";
      } else {
        console.error("Login failed:", data);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
