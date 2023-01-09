function addItem(e) {
  let conteudo = document.querySelector("#container");
  let ul = conteudo.children[0];
  let li = document.createElement("li");
  let input = document.querySelector("input");
  if (e.which == 13) {
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
  }
}
let input = document.querySelector("input");
input.addEventListener("keyup", addItem);
