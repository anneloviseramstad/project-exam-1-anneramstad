export function displayMessage(container, messageType, message) {
  let parent = container;

  if (typeof container === "string") {
    parent = document.querySelector(container);
  }

  if (!parent || !(parent instanceof Element)) {
    console.error("Message container not found or invalid:", container);
    return;
  }

  const messageDiv = document.createElement("div");
  messageDiv.className = `custom-alert custom-alert--${messageType}`;
  messageDiv.textContent = message;

  parent.innerHTML = "";
  parent.appendChild(messageDiv);
}
