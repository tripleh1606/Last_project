class callUser {
  listUser;

  constructor() {}

  getAllUsers = () => {
    fetch("https://61ac690b264ec200176d4474.mockapi.io/user")
      .then((response) => response.json())
      .then((data) => (this.listUser = data));
  };

  addUser = (data) => {
    fetch("https://61ac690b264ec200176d4474.mockapi.io/user", {
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

  updateUser = (data) => {
    console.log(data.likedSongs);
    fetch("https://61ac690b264ec200176d4474.mockapi.io/user/" + data.id, {
      method: "PUT", // or 'PUT'
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

export default callUser;
