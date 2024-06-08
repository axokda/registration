var userNameTag = document.getElementById("userInfo");
if (localStorage.getItem("logininfo") == null) {
  window.open("index.html", "_self");
}
var user = JSON.parse(localStorage.getItem("logininfo"));
var products = [];
var logout = document.getElementById("logoutbtn");
userNameTag.innerHTML = "Welcom " + user.name;

async function getAPI() {
  var res = await fetch("https://ecommerce.routemisr.com/api/v1/products");
  var finalResult = await res.json();
  products = finalResult.data;
  showdata();
}

function showdata() {
  var cartoona = "";
  for (var i = 0; i < products.length; i++) {
    cartoona += `<div class="col-12 col-md-6 col-xl-4">
            <div class="card" >
              <img
                src="${products[i].imageCover}"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body ">
                <h5 class="card-title">${products[i].title}</h5>
                <p class="card-text">${products[i].price} EGP</p>
                <a href="#" class="btn btn-primary">Add To Cart</a>
              </div>
            </div>
          </div>`;
  }
  document.getElementById("products").innerHTML = cartoona;
  console.log(cartoona);
}

getAPI();

logout.addEventListener("click", function () {
  localStorage.removeItem("logininfo");
  window.open("index.html", "_self");
});
