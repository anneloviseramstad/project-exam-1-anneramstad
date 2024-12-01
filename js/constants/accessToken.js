/**
 * Retrieves the user's access token from local storage.
 * @returns {string|null} The access token if it exists, otherwise null.
 */

export function getAccessToken() {
  return localStorage.getItem("accesstoken");
}

/**
 * Checks if a user is logged in by verifying the presence of an access token.
 * @returns {boolean} True if an access token exists, false otherwise.
 */

export function isUserLoggedIn() {
  const accesstoken = localStorage.getItem("accesstoken");
  return accesstoken !== null;
}

/**
 * Logs the user out by clearing their access token and username from local storage,
 * displaying a logout message, and redirecting to the login page.
 */

export function logOut() {
  localStorage.removeItem("accesstoken");
  localStorage.removeItem("username");
  alert("You are now logged out");
  window.location.href = "/account/login";
}

/**
 * Retrieves the logged-in user's username from local storage.
 * @returns {string|null} The username if it exists, otherwise null.
 */

export function loginStatus() {
  const username = localStorage.getItem("username");
  console.log(username);
  return username;
}
