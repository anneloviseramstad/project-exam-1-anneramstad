import {
  isUserLoggedIn,
  loginStatus,
  logOut,
} from "../../constants/accessToken.js";

export function updateNav() {
  const accountLinks = document.querySelector(".account-links");
  const userGreeting = document.querySelector(".user-greeting");
  const logoutButton = document.querySelector(".logout-button");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");

  const username = loginStatus();
  const loggedIn = isUserLoggedIn();

  if (accountLinks) {
    if (loggedIn) {
      if (userGreeting) {
        userGreeting.style.display = "block";
        userGreeting.textContent = `Hello, ${username || "User"}`;
      }
      if (logoutButton) {
        logoutButton.style.display = "block";
        logoutButton.addEventListener("click", logOut);
      }
      if (loginLink) loginLink.style.display = "none";
      if (registerLink) registerLink.style.display = "none";
    } else {
      if (loginLink) loginLink.style.display = "block";
      if (registerLink) registerLink.style.display = "block";
      if (userGreeting) userGreeting.style.display = "none";
      if (logoutButton) logoutButton.style.display = "none";
    }
  }
}

export function loginStatusAndNavStatus() {
  updateNav();
}

document.addEventListener("DOMContentLoaded", () => {
  loginStatusAndNavStatus();
});
