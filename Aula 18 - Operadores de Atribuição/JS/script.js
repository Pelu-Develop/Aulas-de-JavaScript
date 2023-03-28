/* Temos algumas maneiras de atribuir um valor a uma varialvel
As mais ultilizadas são: +=, -=, *=, /=
Basicamente é uma formar resumida da operação: x = x + y
Em loops também é comum ultilizar os operadores ++ e -- */

var x = 1;
var y = 2;

console.log (x = x + y);

/* É a mesma coisa da operação de cima
Essa é a operação de soma */
console.log (x += y);

/* Essa é a operação de subtração */
console.log (x -= y);

/* Essa é a operação de multiplicação */
console.log (x *= y);

/* Essa é a operação de divisão */
console.log(x /= y);

/* Adiciona mais um ao valor, só funciona em loops */
console.log(x++);
console.log(x--);

while( x<= 100) {

    console.log(x);

    x *= 2
}

console.log(x)

while (x > 0) {

    console.log(x);

    x -= 10;
}