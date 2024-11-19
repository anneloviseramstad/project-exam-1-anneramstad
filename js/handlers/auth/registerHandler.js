export function registerHandler() {
  console.log(registerHandler);
  const form = document.querySelector("#registerForm");
  if (form) {
    form.addEventListener("submit", submitForm);
  }
}

function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
}
