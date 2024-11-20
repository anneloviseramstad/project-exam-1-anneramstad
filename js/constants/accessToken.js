export function getAccessToken() {
  return localStorage.getItem("accessToken");
}

export function isUserLoggedIn() {
  const accessToken = getAccessToken();
  return accessToken !== null;
}

export function logOut() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("username");
  alert("You are now logged out");
  window.location.href = "../account/login.html";
}

export function loginStatus() {
  const username = localStorage.getItem("username");
  return username;
}
