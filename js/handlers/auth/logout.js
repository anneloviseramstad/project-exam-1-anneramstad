import { onLogOut } from "../../ui/auth/logout.js";

export function logoutListener() {
  const logoutButton = document.querySelector("#logout-button");
  logoutButton.addEventListener("click", () => {
    onLogOut();
  });
}
