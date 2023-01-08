function clicou() {
  let teste = document.querySelector("#teste");
  console.log(teste.children[0].children[0]);
}
let btn = document.querySelector(".botao");
btn.addEventListener("click", clicou);

// Children elementos filhos de um elemento pai
