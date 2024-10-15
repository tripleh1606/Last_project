const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

var user = [
  {
    name: "Hiep",
    userName: "admin@gmail.com",
    passWord: "1606",
    likedSongs: [],
  },
];

import callUser from "./callUser.js";

let callData = new callUser();
callData.getAllUsers();


var userName = document.getElementById("userName");
var passWord = document.getElementById("passWord");
var notification = document.getElementById("thongbao");

let btn_login = document.getElementById("btn_login")
btn_login.addEventListener("click", () => {
  let checkLogIn = false;

  let data = {
    id: "",
    userName: userName.value,
    passWord: passWord.value,
    name: userName.value,
    likedSongs: []
  }

  callData.listUser.forEach(element => {
    if(element.userName === data.userName && element.passWord === data.passWord) {
      data.id = element.id;
      data.likedSongs = element.likedSongs;
      data.name = element.name;
      checkLogIn = true;
    }
  });

  if(checkLogIn) {
    alert("Welcome!");
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("LIST_USER", JSON.stringify(callData.listUser));
    location.replace("./index.html");
    return;
  } else {
    alert("Sike! That's a wrong number.")
  }
});


// function login() {
//   if (localStorage.getItem("LIST_USER") == null) {
//     localStorage.setItem("LIST_USER", JSON.stringify(user));
//   }

//   var users = JSON.parse(localStorage.getItem("LIST_USER"));

//   for (var i = 0; i < users.length; i++) {
//     if (
//       users[i].passWord == passWord.value &&
//       users[i].userName == userName.value
//     ) {
//       localStorage.setItem("user", JSON.stringify(users[i]));
//       location.replace("./index.html");
//       return;
//     }
//   }
//   notification.innerHTML = "Email or password is incorrect";
// }

let btn_signup = document.getElementById("btn_signup");
btn_signup.addEventListener("click", () => {

  setTimeout(() => {
    callData.getAllUsers();
  }, 1000)

  var name1 = document.getElementById("name1");
  var userName1 = document.getElementById("userName1");
  var passWord1 = document.getElementById("passWord1");
  var notification = document.getElementById("notification");
  var check = true;

  // if (name1.value == "" || userName1.value == "" || passWord1.value == "") {
  //   notification.innerHTML = "Nhập vào";
  //   return;
  // }
  
  let data = {
    name: name1.value,
    userName: userName1.value,
    passWord: passWord1.value
  }
  callData.listUser.forEach(element => {
    if(element.userName === data.userName) {
      check = false;
    }
  });

  if(check) {
  callData.addUser(data);
  alert("Success")
  } else {
    alert("Error! Try again")
  }
})

var data = JSON.parse(localStorage.getItem("user"));
// var guest = (document.getElementById("userName").innerHTML = data.name);

// var h1 = document.createElement("h1");
// var idH1 = document.createAttribute("id");
// idH1.value = "h1";
// h1.setAttributeNode(idH1);
// h1.innerHTML = "Shop";
// var div = document.getElementById("product");
// div.appendChild(h1);

// function logout() {
//   localStorage.removeItem("user");
//   location.replace("./login.html");
// }

