/* Podemos com estas funções criar ações no software que executam depois de um tempo ou de tempos em tempos
Um dos argumentos desta funções é uma callback function */

console.log("Antes do setTimeout");

// setTimeout

setTimeout(function() {

    console.log("Testando o setTimeout");

}, 2000)

console.log("depois do setTimeout");

// setInterval

setInterval(function() {

    console.log("Testando setInterval");

}, 1000);