let data = {
  image_id: "bi",
  value: 1,
};

let settings = {
  method: "POST",
  headers: {
    //Mime Types
    "Content-Type": "application/json",
    "x-api-key": "fe3dcddf-fe95-4f7d-9945-a80560071e62",
  },
  body: JSON.stringify(data),
};

fetch('https://api.thecatapi.com/v1/votes', settings)
  .then(function (response) {
    return response.json();
  })
  .then(function (info) {
    console.log(info);
  })
  .catch(function (error) {
    console.log(error);
  });
