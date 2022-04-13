// TheCapAPI Documentataion
// https://docs.thecatapi.com/example-by-category

let categoryId = 4;
let limit = 10;
let url = "https://api.thecatapi.com/v1/images/search?";
let urlFinal = `${url}category_ids=${categoryId}&limit=${limit}`;

fetch(urlFinal)
  .then(function (result) {
    return result.json();
  })
  .then(function (cats) {
    let imageReference = document.querySelector("#images");

    // console.log(cats);

    cats.forEach(function (cat) {
      let div = document.createElement("div");
      let img = document.createElement("img");

      div.style.margin = "10px";

      img.src = cat.url;
      img.width = 400;

      div.appendChild(img);
      imageReference.appendChild(div);
    });
  });

fetch("https://api.thecatapi.com/v1/categories")
  .then((result) => {
    return result.json;
  })
  .then((category) => {
      console.log(category)
  });
