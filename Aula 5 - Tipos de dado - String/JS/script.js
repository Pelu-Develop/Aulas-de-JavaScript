/* Um numero entre aspas é considerado uma string */
console.log(typeof "1000");

/* é possivel concatenar strings */

var nome = "Pedro Lucas";
var sobrenome = "Carolino Felix"

/* Nessa operação temos 2 strings "nome" e "sobrenome", que com o "+" estaremos concatenano/juntando em uma só */
var nomeCompleto = nome + " " + sobrenome;

console.log(nome);
console.log(typeof nome);

console.log(nomeCompleto);

/* Se eu quiser escrever algo para meu usuario entre "" */
document.write('Eu disse"Ola"');
document.write("Eu disse'Ola'");

console.log("Este numero: " + "42");