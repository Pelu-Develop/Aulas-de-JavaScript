/* Conceito de Hoisting - içamento - faz com que as funões e variaveis sejam execultados de cima para baixo */
console.log(nome);
console.log(numero);

/* Undefined e null tambem são considerados tipos de dados */
/* o null é um tipo de dado que representa um valor */
/* o underfined é um tipo de dado para uma variavel com valor não atribuido */

/* Criei a variavel nome com null */
var nome = null;

/* Criei uma variavel sombrenome, mas não atribuir nenhum valor a ele */
var sobrenome;

/* Me retorna com o valor undefined(indefinido) */
console.log(sobrenome);

/* O tipo de dado do undefined é undefined */
console.log(typeof sobrenome);

/* Me retorna o valor null */
console.log(nome);

/* O tipo de dado do null é Object */
console.log(typeof nome);

nome = "Pedro Lucas";

console.log(nome);
console.log(typeof nome);

var numero = 5;