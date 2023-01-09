//contains verifica se o elemento possui uma class
// add adiciona um classe a um elemento
// remove, remove uma classe de um elemento
// toogle funciona como um condicional adiciona e remove

function clicou() {
  const button = document.querySelector("button");
  if (button.classList.contains("azul")) {
    button.classList.remove("azul");
    button.classList.add("verde");
  } else {
    button.classList.remove("verde");
    button.classList.add("azul");
  }
}
let botao = document.querySelector("button");
botao.addEventListener("click", clicou);
