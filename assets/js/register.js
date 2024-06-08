//________________________________Register____________________________

var userNameReg = document.getElementById("registerName");
var userEmailReg = document.getElementById("registerEmail");
var userPasswordReg = document.getElementById("registerPassword");
var formReg = document.getElementById("registerform");
var regButton = document.getElementById("submitReg");
var emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
var accounts = [];

if(localStorage.getItem("users") != null ){
accounts = JSON.parse(localStorage.getItem('users'))
}

console.log(accounts);

function validation(user){
var res = true
if (user.name.length < 3 ){
    Swal.fire({
        title: "error",
        html: "Name length error",
        icon: "error"
      })
res = false 

}

if (user.password.length < 6 ){
    Swal.fire({
        title: "error",
        html: "password length error",
        icon: "error"
      })
res = false 
}

if (emailPattern.test(user.email) == false  ){
    Swal.fire({
        title: "error",
        html: "email not-valid",
        icon: "error"
      })
res = false 
}


for (var i = 0; i < accounts.length; i++) {
  
  if(accounts[i].email == user.email  ){
    Swal.fire({
      title: "error",
      html: "email already in use ",
      icon: "error"
    })
    res = false 
  }
}





return res
}

regButton.addEventListener("click", function (e) {
  e.preventDefault();
  var Name = userNameReg.value;
  var Email = userEmailReg.value;
  var Password = userPasswordReg.value;

  var newUser = {
    name: Name,
    email: Email,
    password: Password,
  };

var valid = validation(newUser)

if(valid == true){
    updatedata(newUser)
 window.open("index.html","_self")   
}

});


function updatedata(user){
    accounts.push(user)
localStorage.setItem("users",JSON.stringify(accounts))
}
















