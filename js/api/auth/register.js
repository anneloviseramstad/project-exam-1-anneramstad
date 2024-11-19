import { API_REGISTER_ENDPOINT } from "../../constants/api.js";

export async function registerUser(user) {
  const url = `${API_REGISTER_ENDPOINT}`;

  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  };

  const response = await fetch(url, options);
  const json = await response.json();

  console.log(response);

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
  return json;
}
