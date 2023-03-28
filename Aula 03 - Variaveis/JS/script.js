/* Estou declarando que a variavel teste tem o valor amarzenado 1 */
var teste = 1;

/* Estou declarando essa variavel de forma global, porem não é recomendado, pois pode rescrever uma variavel de mesmo nome
é recomendado usar a tag "var" ao declarar variaveis
irei aprender mais sobre isso quando for aprender sobre escopo */
idade = 26;

/* Estou imprimindo no console o valor armazenado de Teste */
console.log(teste);

/* Como JavaScript é uma linguagem de tipagem fraca, eu consigo mudar a variavel numerica armazenada para uma string
Porem, não é recomendado a ultilização disso, pois pode gerar confunsões em manutenções, alem de ser uma pratica negativa
No caso mudei o numero 1 para o nome Pedro */
teste = "Pedro";

console.log(teste);

console.log(idade);

/* Não é permitido o uso de caracteres especiais na declaração de nome da variaveis */
var @nome = "abc"

console.log(@nome)

/* Tamebm não pode ser declarado variaveis que começam com um numero
Porem, pode ser colocado no final da declaração, tipo nome1 */
var 1nome = "abc"

console.log(1nome)

/* Só pode ser declarado com essas 2 caracteres especiais, "_" e "$" */
var $nome = "abc"
var _nome = "abcd"

console.log($nome)
console.log(_nome)

/* Normalmente, quando vamos declarar uma variavel que tem mais de uma palavra, se usa a sintaxe camelCase
que no caso a primeira letra é minuscula e as seguintes iniciais das palavras são em maiscula, segue o exemplo a seguir
No caso abaixo, "Meu Primeiro Nome" tudo junto e a inicial da primeira palavra em minusculo
Melhora o entendimento das variaveis */

var meuPrimeiroNome = "Pelu"; // camelCase

console.log(meuPrimeiroNome);

/* Outras formas de declarar uma variavel */
let testando = 1;
const ola = 2;

console.log(testando);
console.log(ola);

/* Declarando uma variavel sem um valor ou string */
var meuNome;

/* Declarando posteriomente um valor a variavel que não tinha nenhum valor armazenado */
meuNome = "Pedro";

console.log(meuNome);