/* Colocando alguns conceitos na pratica */

var lista = ["Laranja", "Macã", "Pera","Jaca","Banana"];

/* O caso abaixo vai criar uma lista no HTML */
var listaUl = document.createElement("ul");

/* Dar acesso ao nosso codigo, ao HTML */
var body = document.getElementsByTagName("body");

// console.log(body[0]);

body[0].appendChild(listaUl);

var listaNoBody = document.getElementsByTagName("ul");

console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++) {
    
    var liFor = document.createElement("li");

    var textoLi = document.createTextNode(lista[i]);

    liFor.appendChild(textoLi);

    listaNoBody[0].appendChild(liFor);
}
