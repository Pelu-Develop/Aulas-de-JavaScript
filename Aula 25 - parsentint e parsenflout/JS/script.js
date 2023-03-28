/* O objeto Number, pai dos números, contem metodos muito uteis para trabalhar com números no JS
A maioria dos tipos de dado também tem um objeto pai, como: String, Object e array */

// Primeiro Metodo, "parseFloat" tranforma o numero em casas decimais.

console.log(parseFloat("12.999"));
console.log(Number.parseFloat("12.999"));

// "parseInt" é um metodo que tranforma o numero em inteiro, sem casas decimais, cuidado, ele corta as casas decimais.

console.log(parseInt("12.999"));
console.log(Number.parseInt("12.999"));

// "toFixed" é um metodo para limitar a quantidade de casas decimais, nesse caso ele arrendonda o numero.

console.log(23.99.toFixed(1));

// "isNaN" é um metodo que verifica se é um numero, caso sim retorna false, caso não, retorna true.

console.log(isNaN("teste"));
console.log(isNaN(12));
console.log(isNaN("15"));

// MAX_VALUE e MIN_VALUE

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(2.7976931348623157e+308);