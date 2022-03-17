const nomeReference = document.querySelector("#nome");
const universoReference = document.querySelector("#universo");
const descricaoReference = document.querySelector("#descricao");
const imagemReference = document.querySelector("#urlImagem");
const buttonReference = document.querySelector("#btnSubmit")
const heroiListReference = document.querySelector("#heroiList")
const areaPersonagensReference = document.querySelector("#areaPersonagens")


buttonReference.addEventListener('click', cadastrarHeroi)

function cadastrarHeroi(event){
    event.preventDefault();
    console.log('teste')
}

/* <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div> */