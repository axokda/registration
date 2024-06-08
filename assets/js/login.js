var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var form = document.getElementById("loginfrom");
var accounts = [];

if (localStorage.getItem("users") != null) {
  accounts = JSON.parse(localStorage.getItem("users"));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  for (var i = 0; i < accounts.length; i++) {
    
    if (
      loginEmail.value == accounts[i].email &&
      loginPassword.value == accounts[i].password
    ) {
      localStorage.setItem('logininfo',JSON.stringify(accounts[i]))
      window.open("home.html", "_self");
    }
  }
setTimeout(function(){
  Swal.fire({
    title: "error",
    html: "email or password error",
    icon: "error"
  })
},4000)
});





