const correctUsername = "20/52ha009";
const correctPassword = "ABCD";
let myConsole = document.getElementById("console");
document.getElementById("submit").addEventListener("click", login);

function login(e) {
  e.preventDefault();
  let username = document.getElementById("user-matric-no");
  let password = document.getElementById("user-password");
  if (
    username.value === correctUsername &&
    password.value === correctPassword
  ) {
    myConsole.innerHTML = "Login Success";
    let anchorTag = document.createElement('a');
    anchorTag.href = "../HTML/profilePage.html"
    anchorTag.innerHTML = "AISHA"
    // let docBody = document.body;
    // docBody.append(anchorTag);
    anchorTag.click()
  } else {
    myConsole.innerHTML = "Login Failure";
  }
}
