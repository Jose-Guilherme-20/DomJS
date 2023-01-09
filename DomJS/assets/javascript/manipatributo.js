// Pegar atributo dos elementos
// getattribute para pegar o atributo
// hasattribute para saber se tem o atributo
// setattribute trocar ou adicionar um atributo
function clicou() {
  const input = document.querySelector("input");
  const botao = document.querySelector(".botao");
  if (input.getAttribute("type") === "text") {
    input.setAttribute("type", "password");
    botao.innerText = "Mostrar senha";
  } else {
    input.setAttribute("type", "text");
    btn.innerText = "Ocultar senha";
  }
}
let btn = document.querySelector(".botao");
btn.addEventListener("click", clicou);
