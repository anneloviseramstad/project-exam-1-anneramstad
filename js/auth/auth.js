export function getAccessToken() {
  return localStorage.getItem("accessToken");
}

export function navUpdate(username) {
  const accountLinks = document.querySelectorAll(".account-links");

  if (accountLinks) {
    if (username) {
      accountLinks.innerHTML =
        "<span> Welcome, ${username}! </span> <button id='logout'>Logout</button>";
    } else {
      accountLinks.innerHTML =
        "a href='login.html'>Login</a> | <a href='register.html'>Register</a>";
    }

    const logOutBtn = document.querySelector("#logoutBtn");
    if (logOutBtn) {
      logOutBtn.addEventListener("click", logOut);
    }
  }
}

export function isUserLoggedIn() {
  const accessToken = getAccessToken();
  return accessToken !== null;
}

export function logOut() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("username");

  window.location.href = "../account/login.html";
}

export function checkLoginStatus() {
  const username = localStorage.getItem("username");
  navUpdate(username);
}

document.addEventListener("DOMContentLoaded", () => {
  checkLoginStatus();
});
