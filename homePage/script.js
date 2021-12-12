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
function validate(){
  if(!(validateAge() && validatePasswords())){
    return false;
  }
}
function validatePasswords(){
 
  let pw1 = document.getElementById("pw1").value;
  let pw2 = document.getElementById("pw2").value;
  
  if(pw1 !== pw2){
    alert("Passwords are different")
    return false;
    }
  else{
    return true;
  }  
}
function validateAge(){
  try{
  let age = document.getElementById("age").value;
  if(!isNumber(age)){
    alert("Please Type a Number")
    return false;
  }
  else if(Number.parseInt(age)<0){
    alert("Age cant be lower then 0");
    return false;
  }
  }
  catch(e){
    console.log(e);
    throw new Error("Access Denied ");
    
  }
  return true;
}
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function changeBackground() {
  var now = new Date();
  var hours = now.getHours();
  var ft = now.toLocaleString("en-AL", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
  });

    console.log(hours);
  if (5 <= hours && hours < 8) {
      document.body.classList.remove('night');
  }
  if (8 <= hours && hours < 17) {
      document.body.classList.remove('night');
  }
  if (17 <= hours && hours < 19) {
      document.body.classList.add('night');
  }
  if (19 <= hours) {
      document.body.classList.add('night');
  }
}
changeBackground();
window.setInterval(changeBackground, 1000);

// sessionStorage

let name = document.getElementById('userName');
let email = document.getElementById('email');
let textArea = document.getElementById('textArea');

window.addEventListener('load', (event) => {
     name.value = sessionStorage.getItem('userName'); 
     email.value = sessionStorage.getItem('email'); 
    textArea.value = sessionStorage.getItem('textArea'); 

});

name.addEventListener("change", function() {
  // And save the results into the session storage object
  sessionStorage.setItem("userName", name.value);
});

email.addEventListener("change", function() {
  // And save the results into the session storage object
  sessionStorage.setItem("email", email.value);
});

function saveText() {
  console.log(textArea.value);
  if(textArea.value != ""){
  sessionStorage.setItem("textArea", textArea.value);
  }
};
