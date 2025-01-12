function login() {
  let submitButton = document.getElementById("login-button");
  let userName = document.getElementById("name");
  let userPassword = document.getElementById("pass");

  let homePage = document.getElementById("home-page");
  let loginPage = document.getElementById("login-page");

  let loginCredentials = [];
  let userCredentials;
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    loginCredentials.push(userName.value);
    loginCredentials.push(userPassword.value);
    userCredentials = JSON.parse(localStorage.getItem("login-credentials"));
    if (userCredentials == null) {
      localStorage.setItem(
        "login-credentials",
        JSON.stringify(loginCredentials)
      );
    } else if (
      userCredentials[0] == userName.value &&
      userCredentials[1] == userPassword.value
    ) {
      loginPage.style.display = "none";
      homePage.style.display = "block";
    } else {
      alert("Incorrect UserName or Password!");
    }
    userName.value = "";
    userPassword.value = "";
  });
}

login();
