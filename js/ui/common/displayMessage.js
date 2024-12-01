/**
 * Displays a message in the specified container with a custom style.
 *
 * @param {Element | string} container - The container element or a selector string where the message will be displayed.
 * @param {string} messageType - The type of the message, used to apply a custom style (e.g., "success", "error", "warning").
 * @param {string} message - The message text to display inside the container.
 *
 * The function creates a div element, applies a CSS class based on the message type,
 * and then appends the message to the specified container. If the container is invalid, an error is logged.
 */

export function displayMessage(container, messageType, message) {
  let parent = container;

  // If container is a string, convert it to an element using querySelector
  if (typeof container === "string") {
    parent = document.querySelector(container);
  }

  // Check if the container is a valid DOM element
  if (!parent || !(parent instanceof Element)) {
    console.error("Message container not found or invalid:", container);
    return;
  }

  // Create a new div for the message with a dynamic class based on message type
  const messageDiv = document.createElement("div");
  messageDiv.className = `custom-alert custom-alert--${messageType}`;
  messageDiv.textContent = message;

  // Clear existing content in the container and append the new message
  parent.innerHTML = "";
  parent.appendChild(messageDiv);
}
