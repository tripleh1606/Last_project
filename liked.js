function createItemSongs(img, title, artist) {
  var listSongs = document.getElementById("likedSongs");
  listSongs.innerHTML +=
    `<a class="btnLikedSongs" href="./detail.html" onclick="return addDetail('${title}')">` +
    '<div class="row">' +
    '<div class="col-2">' +
    `<img src="${img}" class="offer-img">` +
    "</div>" +
    '<div class="col-2">' +
    '<div class="songsinfo">' +
    `<h1>${title}</h1>` +
    `<p>${artist}</p>` +
    "</div>" +
    "</div>" +
    "</div>" +
    "</a>";
}

function createListSongs() {
  var listSongs = JSON.parse(localStorage.getItem("listProduct"));
  var user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  user.likedSongs.forEach((element) => {
    listSongs.forEach((item) => {
      if (element === item.title) {
        createItemSongs(item.img, item.title, item.artist);
      }
    });
  });
}

createListSongs();

function addDetail(title) {
  console.log(title);
  var listProduct = JSON.parse(localStorage.getItem("listProduct"));
  for (var i = 0; i < listProduct.length; i++) {
    if (listProduct[i].title === title) {
      localStorage.setItem("details", JSON.stringify(listProduct[i]));
      return;
    }
  }
}
