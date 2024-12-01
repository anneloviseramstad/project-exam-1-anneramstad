import {
  isUserLoggedIn,
  loginStatus,
  logOut,
} from "../../constants/accessToken.js";

/**
 * Updates the navigation elements based on the user's login status.
 * - Displays the user's greeting and logout button if logged in.
 * - Hides the login and register links if logged in.
 * - Shows the login and register links if not logged in.
 */

export function updateNav() {
  const userGreeting = document.querySelector(".user-greeting");
  const logoutButton = document.querySelector(".logout-button");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");

  const username = loginStatus();
  const loggedIn = isUserLoggedIn();

  console.log(loggedIn);
  console.log(username);

  if (loggedIn) {
    if (userGreeting) {
      userGreeting.style.display = "block";
      const usernameSpan = userGreeting.querySelector("#username");
      if (usernameSpan) {
        usernameSpan.textContent = username || "User";
      }
    }
    if (logoutButton) {
      logoutButton.style.display = "block";
      logoutButton
        .querySelector("#logout-button")
        .addEventListener("click", logOut);
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

export function loginStatusAndNavStatus() {
  updateNav();
}

document.addEventListener("DOMContentLoaded", () => {
  loginStatusAndNavStatus();
});
