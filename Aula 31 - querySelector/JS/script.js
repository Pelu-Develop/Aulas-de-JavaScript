/* Com a evolução da linguagem fora criados dois seletores que acabam com toda a complexidade desta ação
querySelector e querySelectorAll
Com estes podemos acessar os elementos baseados em regras do CSS */

// problema

var itensClasse = document.getElementsByClassName("item");

console.log(itensClasse);

// querySelectorAll

var itensQuery = document.querySelectorAll("#lista2 li");

console.log(itensQuery);

var itensQuery2 = document.querySelectorAll("#lista .item");

console.log(itensQuery2);

// querySelector, diferente da outro 

var itensQuery3 = document.querySelector("#lista .item");

console.log(itensQuery3);

// é ruim usar dessa forma, pois se tiver alteração no codigo, pode quebrar

var primeiraLista = document.querySelector("ul");

console.log(primeiraLista);

var span = document.querySelector("#paragrafo span");

console.log(span);