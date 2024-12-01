import { API_KEY } from "./api.js";

/**
 * Creates and returns HTTP headers with necessary authentication and content type.
 *
 * - Adds the API key as "X-Noroff-API-Key" if it exists.
 * - Includes a Bearer token in the "Authorization" header if an access token is present in local storage.
 * - Sets the "Content-Type" header to "application/json".
 *
 * @returns {Headers} A Headers object containing the configured headers.
 */

export function headers() {
  const headers = new Headers();

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  const accessToken = localStorage.getItem("accesstoken");

  if (accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  headers.append("Content-Type", "application/json");

  return headers;
}
