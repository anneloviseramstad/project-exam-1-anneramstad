/**
 * Logs the user out by removing their authentication data from localStorage.
 * - Removes "accessToken" and "userInfo" from localStorage.
 * - Displays an alert informing the user that they are logged out.
 * - Redirects the user to the login page.
 */

export function onLogOut() {
  ["accessToken", "userInfo"].forEach((item) => localStorage.removeItem(item));
  alert("You are now logged out.");
  window.location.href = "/account/login";
}

/**
 * Sets up the logout button by attaching the `onLogOut` function to its click event.
 * - Finds the element with the ID "logout-button" and adds an event listener.
 * - Triggers the `onLogOut` function when the button is clicked.
 */

export function setUpLogoutButton() {
  const logoutButton = document.querySelector("#logout-button");

  if (logoutButton) {
    logoutButton.addEventListener("click", onLogOut);
  }
}
