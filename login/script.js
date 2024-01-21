window.addEventListener("load", () => {
  const searchParams = new URLSearchParams(window.location.search);
  const usernameField = document.querySelector("#username");

  if (!searchParams.has("email")) {
    return;
  }

  const email = searchParams.get("email");
  usernameField.value = email;
});
