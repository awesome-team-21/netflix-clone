const emailField = document.querySelector("#username");
const emailLabel = document.querySelector("#username-label");
const passwordField = document.querySelector("#password");
const passwordLabelId = document.querySelector("#password-label");

const labelElementFocusOut = (inputElement, labelElement) => {
  if (!!inputElement.value) {
    labelElement.classList.remove("input-not-focused");
    labelElement.classList.add("input-focused");
  } else {
    labelElement.classList.remove("input-focused");
    labelElement.classList.add("input-not-focused");
  }
};

emailField.addEventListener("focusout", () => {
  labelElementFocusOut(emailField, emailLabel);
});

passwordField.addEventListener("focusout", () => {
  labelElementFocusOut(passwordField, passwordLabelId);
});

passwordField.addEventListener("focusout", () => {
  console.log("password");
});

window.addEventListener("load", () => {
  const searchParams = new URLSearchParams(window.location.search);
  const usernameField = document.querySelector("#username");

  if (!searchParams.has("email")) {
    return;
  }

  const email = searchParams.get("email");
  usernameField.value = email;
  labelElementFocusOut(emailField, emailLabel);
});
