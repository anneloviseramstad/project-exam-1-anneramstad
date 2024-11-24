export function getApiKey() {
  return localStorage.getItem("apiKey");
}

export function isUserLoggedIn() {
  const apiKey = localStorage.getItem("apiKey");
  return apiKey !== null;
}

export function logOut() {
  localStorage.removeItem("apiKey");
  localStorage.removeItem("username");
  alert("You are now logged out");
  window.location.href = "../account/login.html";
}

export function loginStatus() {
  const username = localStorage.getItem("username");
  return username;
}
