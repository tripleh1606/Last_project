class callProduct {
    listProduct;
  
    constructor() {}
  
    getAllProducts = () => {
      fetch("https://61ac690b264ec200176d4474.mockapi.io/listProduct")
        .then((response) => response.json())
        .then((data) => (this.listProduct = data));
    };
  
    addProduct = (data) => {
      fetch("https://61ac690b264ec200176d4474.mockapi.io/listProduct", {
        method: "Post", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    updateProduct = (data) => {
      fetch("https://61ac690b264ec200176d4474.mockapi.io/listProduct", {
        method: "Put", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
  }
  
  export default callProduct;