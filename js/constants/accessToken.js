export function getAccessToken() {
  return localStorage.getItem("accessToken");
}

export function updateNav(username) {
  const accountLinks = document.querySelector(".account-links");

  if (auccountLinks) {
    if (username) {
      accountLinks.innerHTML = `<span>Welcome, ${username}</span><button id="logout-button">Logout</button>`;
    } else {
      accountLinks.innerHTML = `<a href="../account/login.html">Login</a> | <a href="../account/register.html">Register</a>`;
    }

    const logoutButton = document.querySelector("#logout-button");
    if (logoutButton) {
      logoutButton.addEventListener("click", logOut);
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

export function loginStatus() {
  const username = localStorage.getItem("username");
  updateNav(username);
}

document.addEventListener("DOMContentLoaded", () => {
  loginStatus();
});
