/* Document Object Model
Uma interface de programação para HTML
Por meio dele temos métodos para acessar a árvode de elementos
O DOM fornece uma cópia do HTML
podemos manipular eventos pelo DOM para afetar o HTML */

/* Acessar o DOM caracteriza-se por edentificar um elemento do HTML atraves de métodos
Depois podemos manipula-los da forma que quisermos
Acessar o DOM é semelhante as regras de CSS
Podemos acessar por: tags,ids,classes */

// tag, ele me retorna uma coletion do html porque ele pega todas as tags que estejam no parenteses

var titulo = document.getElementsByTagName("h1");

console.log(titulo);
console.log(titulo[0]);

var lis = document.getElementsByTagName("li");

console.log(lis);

// id

var paragrafo = document.getElementById("paragrafo");

console.log(paragrafo);

// class

var itensDaLista = document.getElementsByClassName("item");

console.log(itensDaLista);