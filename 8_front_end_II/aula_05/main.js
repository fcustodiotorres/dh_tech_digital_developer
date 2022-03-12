let bodyElement = document.querySelector("body");
let containerReference = document.querySelector(".container");

function handleDarkMode() {
  bodyElement.classList.toggle("dark");
}

let posts = [
  {
    imagem:
      "https://images.aws.nestle.recipes/original/8b93a5e2db24a573dd2948709d45c631_pipoca-leite-po-molico-receitas-nestle.jpg",
    titulo: "Pipoca",
    texto: "Pipoca é um alimento fácil de fazer.<br>Pipoca ou popoca é um prato feito a partir de uma variedade especial de milho, o milho-pipoca, que estoura quando aquecido. Ao aquecermos os grãos desse milho de maneira rápida, a sua humidade interna é convertida em vapor. ",
  },
  {
    imagem:
      "https://img.itdg.com.br/tdg/images/recipes/000/002/921/354698/354698_original.jpg?mode=crop&width=710&height=400",
    titulo: "Leite Condensado",
    texto: "É muito doçe. Eu gosto!<br>O leite condensado é o produto resultante da remoção parcial de água do leite e frequentemente adicionado de açúcar, descoberto pelo francês Nicolas Appert em 1820, na pesquisa para esterilização e conservação de alimentos em embalagens herméticas",
  },
  {
    imagem:
      "https://img.itdg.com.br/tdg/images/blog/uploads/2019/05/pizza.jpg?w=1200",
    titulo: "Pizza",
    texto:
      "Ahhh, essa todo mundo gosta! <br>Pizza é uma preparação culinária que consiste em um disco de massa fermentada de farinha de trigo, coberto com molho de tomate e os ingredientes variados que normalmente incluem algum tipo de queijo, carnes preparadas ou defumadas e ervas, normalmente orégano ou manjericão, tudo assado em forno.",
  },
];

for (let post of posts) {
  containerReference.innerHTML += `
  <div class="item">
    <img src= ${post.imagem}>
    <h2> ${post.titulo}</h2>
    <p>${post.texto}
    </p>
  </div>
`;
}
