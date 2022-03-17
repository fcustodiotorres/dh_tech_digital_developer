/* Crie uma nova página HTML e adicione via JavaScript os seguintes elementos:
1- Crie um formulário com campos de input e botões de submit e reset.
2- Previna a página de ser recarregada quando houver o submit utilizando preventDefault().
3- Mostre um alerta na página quando a tela terminar de ser carregada.
4- Adicione uma cor a um texto quando o mouse ficar acima do mesmo e outra cor quando ele sair do mesmo.
5- Faça um trecho de código que utilize algum evento de teclado, esse evento irá escrever o conteúdo do input em uma tag <p> e logo abaixo o número de vezes que esse evento foi chamado. Exemplo: <p>futebol</p> <p>7</p> .
https://docs.google.com/document/d/1b6zW2DQT5PSpwgATbqWq75332Os_EDCjTmLOU4zMJ1w/edit 
*/

// 1-
const formReference = document.querySelector("#form");

formReference.innerHTML = ` 
    <form action="">
        <caption>
            <p>Formulário de Cadastro</p>
        </caption>
        <fieldset>
            <label for="name">Nome</label>
            <input type="text" id="name" placeholder="Filipe Custodio" />
            <label for="email">E-mail</label>
            <input type="email" id="email" placeholder="example@example.com" />
            <button type="submit">Enviar</button>
        </fieldset>
    </form>
`;

// 2-
const submitButtonReference = document.querySelector("button");
submitButtonReference.addEventListener("click", preventDef);

function preventDef(event) {
  event.preventDefault();
}

// 3-
// document.body.onload = () => alert("A página foi carregada completamente!");

// 4-
const textsReference = document.querySelectorAll(
  "p, span, label, [placeholder], button"
);
for (let element of textsReference) {
  element.addEventListener("mouseover", () => (element.style.color = "red"))
  element.addEventListener("mouseout", () => (element.style.color = "black"))
}

// 5-
const textAreaReference = document.querySelector("#textarea");
const contadorReference = document.querySelector("#contador");

document.body.addEventListener('keypress', (event) => textAreaReference.innerHTML = `Key Pressed: ${event.key}`)