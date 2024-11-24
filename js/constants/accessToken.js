export function getAccessToken() {
  return localStorage.getItem("accesstoken");
}

export function isUserLoggedIn() {
  const accesstoken = localStorage.getItem("accesstoken");
  return accesstoken !== null;
}

export function logOut() {
  localStorage.removeItem("accesstoken");
  localStorage.removeItem("username");
  alert("You are now logged out");
  window.location.href = "../account/login.html";
}

export function loginStatus() {
  const username = localStorage.getItem("username");
  return username;
}
