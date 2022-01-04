function login() {
    document.getElementsByClassName('content')[0].style.filter = 'blur(4px)';
  document.getElementById("login").style.display = "block";
}

function closeLogin() {
  document.getElementById("login").style.display = "none";
  document.getElementsByClassName('content')[0].style.filter = 'blur(0px)';
}

function signUp() {
   document.getElementsByClassName('content')[0].style.filter = 'blur(4px)';
  document.getElementById("sign-up").style.display = "block";
}

function closeSignUp() {
  document.getElementById("sign-up").style.display = "none";
    document.getElementsByClassName('content')[0].style.filter = 'blur(0px)';

}