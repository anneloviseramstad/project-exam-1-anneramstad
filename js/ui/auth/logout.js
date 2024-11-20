export function onLogOut() {
  ["accessToken", "userInfo"].forEach((item) => localStorage.removeItem(item));
  alert("You are now logged out.");
  window.location.href = "../account/login.html";
}
