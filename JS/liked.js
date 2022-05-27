function createItemSongs(img, title, artist) {
  var listSongs = document.getElementById("likedSongs");
  listSongs.innerHTML +=
    `<a class="btnLikedSongs" href="./detail.html" onclick="return addDetail('${title}')">` +
    `<img src="${img}" alt width="15%" class="offer-img">` +
    '<div class="col-4">' +
    '<div class="info">' +
    `<h1>${title}</h1>` +
    `<p>${artist}</p>` +
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
