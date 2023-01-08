// Pegar atributo dos elementos

function clicou() {
  const input = document.querySelector("input");
  console.log(input.getAttribute("type"));
}
let btn = document.querySelector(".botao");
btn.addEventListener("click", clicou);
