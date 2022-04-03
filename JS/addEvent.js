function addDetail(id) {
  let listProduct = JSON.parse(localStorage.getItem("listProduct"))
  var user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  if(user === null) {
    alert("Vui lòng đăng nhập !")
    location.replace("./login.html");
  } else {
    for (var i = 0; i < listProduct.length; i++) {
      if (listProduct[i].id === id) {
        localStorage.setItem("details", JSON.stringify(listProduct[i]));
        location.replace("./detail.html");
        return;
      }
    }
  }
  }
