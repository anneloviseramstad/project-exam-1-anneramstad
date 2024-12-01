import { onLogOut } from "../../ui/auth/logout.js";

/**
 * Attaches an event listener to the logout button.
 *
 * - When the logout button is clicked, it calls the `onLogOut` function to log the user out.
 *
 * @returns {void}
 */

export function logoutListener() {
  const logoutButton = document.querySelector("#logout-button");
  logoutButton.addEventListener("click", () => {
    onLogOut();
  });
}
