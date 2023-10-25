document.getElementById("login-button").addEventListener("click", function () {
  //get user email
  const emaiField = document.getElementById("user-email");
  const userEmail = emaiField.value;
  // get user password
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;

  if (userEmail == "admin@mail.com" && userPassword == "admin1234") {
    window.location.href = "banking.html";
  } else {
    alert("Sorry, Your user name or password is incorrect!");
  }
});

