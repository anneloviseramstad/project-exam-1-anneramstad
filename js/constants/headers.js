import { API_KEY } from "./api.js";

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
