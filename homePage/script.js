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