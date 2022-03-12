//1- Agregar a la tarjeta, el atributo "class" con el valor "card"
let tarjetaReference = document.querySelector("#tarjeta");
tarjetaReference.setAttribute("class", "card");

//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"
let logoReference = document.querySelector("#logo");
logoReference.setAttribute(
  "src",
  "https://www.youtube.com/img/desktop/yt_1200.png"
);

//3- Quitarle al titulo la clase que le está dando un formato feo
let titleReference = document.querySelector(".titulo-feo");
titleReference.removeAttribute("class");

//4- Chequear si el link a youtube posee o no el atributo href
let linkYoutubeReference = document.querySelector("#link_youtube");
let linkYoutubeHasHref = linkYoutubeReference.hasAttribute("href");
console.log(linkYoutubeHasHref);

//5- Obtener el href del link a wikipedia y mostrarlo por consola
let linkWikipediaReference = document.querySelector("#link_wikipedia");
let getWikipediaLink = linkWikipediaReference.getAttribute("href");
console.log(getWikipediaLink);

// Extra
let newButton = document.createElement("button");
let newText = "Botão criado interativamente com JS";
newButton.textContent = newText;
document.body.appendChild(newButton);

document.body.insertBefore(newButton, tarjetaReference)