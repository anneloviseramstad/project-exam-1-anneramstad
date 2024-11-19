import { API_LOGIN_ENDPOINT } from "../constants/api.js";

export async function loginUser(data) {
  const url = `${API_LOGIN_ENDPOINT}`;

  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("Username or password is incorrect");
  }

  return await response.json();
}
