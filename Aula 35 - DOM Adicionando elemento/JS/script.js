/* Podemos inserir um elemento dentro de outro, por exemplo, um parágravo em uma div
Isso é considerado como "acrescentar um filho" em JS */

// Criar elemento

var el = document.createElement("div");

el.classList = "div-criada";

console.log(el);

var container = document.querySelector("#container");

// inserindo elemento filho

container.appendChild(el);

// inserbefore - insere antes

var el2 = document.createElement("div");

el2.classList = "div-before";

var el3 = document.querySelector("#container .div-criada");

console.log(el3);

container.insertBefore(el2,el3);