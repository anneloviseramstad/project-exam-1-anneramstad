import { API_LOGIN_ENDPOINT } from "../constants/api.js";
import { navUpdate } from "../auth/auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginButton = document.getElementById("loginButton");
  const idLogin = document.getElementById("idLogin");
  const pwLogin = document.getElementById("pwLogin");

  const handleIdInput = (event) => {
    console.log("ID input:", event.target.value);
  };

  const handlePwInput = (event) => {
    console.log("Password input:", event.target.value);
  };

  const enableLoginButton = () => {
    return !(!idLogin.value || !pwLogin.value);
  };

  const changeLoginButtonStyle = () => {
    return enableLoginButton() ? "disabled" : "enabled";
  };

  const clickLogin = (e) => {
    e.preventDefault();

    const idValue = idLogin.value;
    const pwValue = pwLogin.value;

    fetch("API_LOGIN_ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "Login successful") {
          alert("You are logged in.");
        } else {
          alert("Please check your login information.");
        }
      });
  };

  idLogin.addEventListener("input", handleIdInput);
  pwLogin.addEventListener("input", handlePwInput);
  loginForm.addEventListener("submit", clickLogin);

  loginButton.disabled = enableLoginButton();
});
