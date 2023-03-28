/*  Com metodos matematicos, consigo acessar algumas constantes de matematica */

console.log( Math.E) // numero de Euler
console.log( Math.PI) // numero de PI

/* Os metodos de Math.min() e Math.max() recebem uma série de argumentos numéricos e retornam aquele com o valor máximo ou minimo correspondente */
/* Tambem é possivel referenciar os valores do inifinito positivo ou negativo */

console.log( Math.max(55,15,100,5000,-7000,4));
console.log( Math.min(55,15,100,5000,-7000,4));


console.log( Math.max(55,15,100,Infinity,5000,-7000,4));
console.log( Math.min(55,15,100,-Infinity,5000,-7000,4));

/* os metodos "ceil,floor,round" são metodos para arrendodar um numero */

const pi = Math.PI;

// Ceil: Retorna um numero inteiro maior ou igual mais proximo

console.log( Math.ceil(pi));

// Floor: Retorna o numero inteiro mais próximo arrendondado para baixo

console.log( Math.floor(pi));

// Round: retorna o valor de um numero arrendondado, o numero inteiro mais proximo

console.log( Math.round(pi));

/* O metodo de Math.sqrt() retona a raiz quadrada de um numero. */

console.log(Math.sqrt(9));
Math.sqrt(2);
Math.sqrt(1);
Math.sqrt(-1);

// O metodo "O metodo Math.random()" gera um numero pseudoaleatório entre 0 e 1, sendo 0 o limite inclusivo e o 1 exclusivo.

console.log( Math.random())
console.log( Math.random())
console.log( Math.random())

const geradorNumero = () => {
    return Math.round ( Math.random() * 100);
}

console.log( geradorNumero());