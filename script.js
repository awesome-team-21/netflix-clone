const emailInput = document.querySelector("#landing-email-address-field");
const emailSubmitButton = document.querySelector("#email-submit-button");

const returnToEmailField = () => {
  emailInput.focus();
};

emailSubmitButton.addEventListener("click", () => {
  const email = emailInput.value;

  console.log(`|${email}|`);

  if (email == "") {
    // no input, focus on email page
    returnToEmailField();
  } else {
    // passing email address to sign in page
    window.open(`./login/index.html?email=${email}`, "_self");
  }
});
