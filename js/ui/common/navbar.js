import { loginStatus, logOut } from "../../constants/accessToken.js";

export function updateNav(username) {
  const accountLinks = document.querySelector(".account-links");

  if (accountLinks) {
    if (username) {
      document.querySelector(".user-greeting").style.display = "block";
      document.querySelector(".logout-button").style.display = "block";
      document.querySelector("#username").textContent = username;

      document.querySelector(".login-link").style.display = "none";
      document.querySelector(".register-link").style.display = "none";
    } else {
      document.querySelector(".login-link").style.display = "block";
      document.querySelector(".register-link").style.display = "block";

      document.querySelector(".user-greeting").style.display = "none";
      document.querySelector(".logout-button").style.display = "none";
    }

    const logoutButton = document.querySelector("#logout-button");
    if (logoutButton) {
      logoutButton.addEventListener("click", logOut);
    }
  }
}

export function loginStatusAndNavStatus() {
  const username = loginStatus();
  updateNav(username);
}

document.addEventListener("DOMContentLoaded", () => {
  loginStatusAndNavStatus();
});
