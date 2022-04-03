import callProduct from "./callProduct.js";

let callData1 = new callProduct();

var listProductDefault = [
  {
    composer: "Ngọt",
    artist: "Ngọt",
    img: "./Imgs/lancuoi.jpg",
    title: "",
    genre: "POP",
    audio: "./Songs/Lan Cuoi - Ngot.mp3",
    album: "Single",
    dob: "2019",
  }
]

var listProduct = [
];

function createItem(title, srcImg, artist, genre, id) {
  return (
    '<div class="col3">' +
    `<a onclick="addDetail('${id}')" class="btn3">` +
    `<img src="${srcImg}" alt="" width="27%">` +
    '<div class="info">' +
    `<h5>${title}</h5>` +
    `<p>Artist: ${artist}</p>` +
    `<p>Genre: ${genre}</p>` +
    "</div>" +
    "</p>" +
    "</div>"
  );
}

function createRow() {
  var product = document.getElementById("listProduct");
  var arr = [];
  for (var i = 0; i < 6; i++) {
    var index = Math.floor(Math.random() * 14) + 0;
    var check = arr.indexOf(index);
    if (check === -1) {
      arr.push(index);
      product.innerHTML += createItem(
        listProduct[index].title,
        listProduct[index].img,
        listProduct[index].artist,
        listProduct[index].genre,
        listProduct[index].id
      );
    }
  }
}

function addProductDefault(listProductDefault, dataMockAPI) {
  let check = true;

  dataMockAPI.forEach(element => {
    if(element.title === listProductDefault[0].title) {
      check = false;
    }
  });

  if(check) {
    listProductDefault.forEach(element => {
      callData1.addProduct(element)
    })
  } else {
    console.log("Da them");
  }
}

const makeAPICall = new Promise((resolve, reject) => {
  console.log('Bắt đầu gọi API.');
  callData1.getAllProducts();
  setTimeout(() => {
    console.log('Nhận data từ API.');
    console.log(callData1.listProduct);
    addProductDefault(listProductDefault, callData1.listProduct)
    resolve('Gọi API thành công.');
  }, 2000)
});

function readTheData() {
  listProduct = callData1.listProduct;
  localStorage.setItem("listProduct", JSON.stringify(listProduct));
  createRow();
};

makeAPICall.then(result => {
  console.log(result);
  readTheData();
  console.log(listProductDefault);
}).catch(error => {
  console.log(`Có lỗi xảy ra: ${error}.`)
})
