import callUser from "./callUser.js";
let callData = new callUser();

var item = JSON.parse(localStorage.getItem("details"));
console.log(item);

function returnIndex() {
  location.replace("./index.html");
}



function createRow() {
  var product = document.getElementById("musicPlayer");
  var item = JSON.parse(localStorage.getItem("details"));
  console.log(item);
  product.innerHTML += createItem(
    item.title,
    item.img,
    item.audio,
    item.artist,
    item.composer,
    item.album,
    item.dob,
    item.audio
  );
}

createRow();

function createItem1(title, srcImg, artist, genre) {
  return (
    '<div class="col3">' +
    `<a href="./detail.html" onclick="return addDetail('${title}')" class="btn3">` +
    `<img src="${srcImg}" alt="" width="27%">` +
    '<div class="info">' +
    `<h5>${title}</h5>` +
    `<p>Artist: ${artist}</p>` +
    `<p class="genre">Genre: ${genre}</p>` +
    "</div>" +
    "</p>" +
    "</div>"
  );
}

function createRow1() {
  var listProduct = JSON.parse(localStorage.getItem("listProduct"));
  var product = document.getElementById("listProduct");
  var arr = [];
  for (var i = 0; i < 6; i++) {
    var index = Math.floor(Math.random() * 14) + 0;
    var check = arr.indexOf(index);
    console.log(check);
    if (check === -1) {
      arr.push(index);
      product.innerHTML += createItem1(
        listProduct[index].title,
        listProduct[index].img,
        listProduct[index].artist,
        listProduct[index].genre
      );
    }
  }
}

createRow1();

function addDetail(title) {
  var listProduct = JSON.parse(localStorage.getItem("listProduct"));
  console.log(listProduct);
  for (var i = 0; i < listProduct.length; i++) {
    if (listProduct[i].title === title) {
      localStorage.setItem("details", JSON.stringify(listProduct[i]));
      return;
    }
  }
}

function Toggle() {
  let title = document.getElementById("title_add").innerHTML;
  console.log(title);
  var user = JSON.parse(localStorage.getItem("user"));
  var listUser = JSON.parse(localStorage.getItem("LIST_USER"));
  var listIndex = listUser
    .map((item) => {
      return item.userName;
    })
    .indexOf(user.userName);
  console.log(listIndex);
  var btn = document.getElementById("likeBtn");
  if (btn.classList.contains("far")) {
    btn.classList.remove("far");
    btn.classList.add("fas");
    user.likedSongs.push(title);
  } else {
    btn.classList.remove("fas");
    btn.classList.add("far");
    var index = user.likedSongs.indexOf(title);
    user.likedSongs.splice(index, 1);
  }
  listUser.splice(listIndex, 1);
  listUser.push(user);
  localStorage.setItem("LIST_USER", JSON.stringify(listUser));
  localStorage.setItem("user", JSON.stringify(user));

  callData.updateUser(JSON.parse(localStorage.getItem("user")))
}

function createItem(title, srcImg, srcAudio, singer, composer, album, dob) {
  var user = JSON.parse(localStorage.getItem("user"));
  var check = user.likedSongs.indexOf(title);
  var classLike = "far";
  if (check != -1) {
    classLike = "fas";
  }

  return (
    `<h1 id="title_add">${title}</h1>` +
    '<div class="rowplayer">' +
    '<div class="music">' +
    '<div class="player">' +
    '<div class="imgplayer">' +
    `<img src="${srcImg}" height="500px" alt="">` +
    "</div>" +
    "<audio controls>" +
    `<source src="${srcAudio}" type="audio/mp3">` +
    "</audio>" +
    "</div>" +
    "</div>" +
    '<div class="musicinfo">' +
    "<h5>Ca sĩ: </h5>" +
    `<p>${singer}</p>` +
    "<h5>Sáng tác: </h5>" +
    `<p>${composer}</p>` +
    "<h5>Album: </h5>" +
    `<p>${album}</p>` +
    "<h5>Năm phát hành: </h5>" +
    `<p>${dob}</p>` +
    `<a class="download" href="${srcAudio}" download=""><img src="./Imgs/download.png" alt="" width="100px"></a>` +
    // //Email
    // '<a class="share" + href="mailto:?Subject=Simple Share Buttons&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 https://music.apple.com/us/album/b%C6%B0%E1%BB%9Bc-qua-m%C3%B9a-c%C3%B4-%C4%91%C6%A1n/1543217753?i=1543218193">' +
    // '<img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" />' +
    // "</a>" +
    // //Facebook
    // '<a class="share" href="http://www.facebook.com/sharer.php?u=https://music.apple.com/us/album/b%C6%B0%E1%BB%9Bc-qua-m%C3%B9a-c%C3%B4-%C4%91%C6%A1n/1543217753?i=1543218193" target="_blank">' +
    // '<img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />' +
    // "</a>" +
    // //Twitter
    // '<a class="share" href="https://twitter.com/share?url=https://music.apple.com/us/album/b%C6%B0%E1%BB%9Bc-qua-m%C3%B9a-c%C3%B4-%C4%91%C6%A1n/1543217753?i=1543218193&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons" target="_blank">' +
    // '<img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />' +
    "</a>" +
    '<div class="like-btn">' +
    `<i id="likeBtn" class="${classLike} fa-heart"></i>` +
    "</div>" +
    "</div>" +
    "</div>"
  );
}

let btnLike = document.getElementById("likeBtn");
btnLike.addEventListener("click", Toggle);