/* O objeto document não tem somete métodos
Podemos retirar várias informações importantes das suas propriedades tambem */

// propriedades document

console.log(document.body);

console.log(document.head);

console.log(document.links);

document.links[0].textContent = "Instagram";

document.links[0].href = "https:www.google.com.br"

console.log(document.URL);

console.log(document.title);

document.title = "Aula 39"

console.log(document.title);