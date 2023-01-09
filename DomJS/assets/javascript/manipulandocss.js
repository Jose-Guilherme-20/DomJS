function clicou() {
  let li = document.querySelector("li");
  li.style.backgroundColor = "blue";
  li.style.color = "black";
}
let botao = document.querySelector(".botao");
botao.addEventListener("click", clicou);
