export function onLogOut() {
  ["accessToken", "userInfo"].forEach((item) => localStorage.removeItem(item));
  alert("You are now logged out.");
  window.location.href = "../account/login.html";
}

export function setUpLogoutButton() {
  const logoutButton = document.querySelector("#logout-button");

  if (logoutButton) {
    logoutButton.addEventListener("click", onLogOut);
  }
}
