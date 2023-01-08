// append adiciona texto a um item existente em um elemento
// appendChild adiciona um item ou elemento também'
// prepend adiciona um item ou um elemento no inicio
// before adiciona item no inicio do elemento
// after adiciona um item depois do elemento

let btn = document.querySelector(".botao");
btn.addEventListener("click", clicou);

function clicou() {
  console.log("clicou");
  let teste = document.querySelector("#teste");
  teste.children[0].children[0].append("(alterado)");
}

let btn1 = document.querySelector(".botao1");
btn1.addEventListener("click", clicou2);

function clicou2() {
  let elem = document.createElement("li");
  let teste = document.querySelector("#teste");
  elem.innerText = "Criado no JS";
  teste.children[0].appendChild(elem);
}
