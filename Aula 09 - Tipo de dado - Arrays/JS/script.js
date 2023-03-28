/* Na verdade os arrays são considerado objetos em JavaScript, porém servem como listas 
Podemos ter itens de qualqer tipo de dado tambem
Porem não por chave e valor, e sim por indice*/

/* A sintaxe do array é "[], e eles aceitam todo tipo de dado"*/
var arr = [5,"Pedro Lucas", true,{teste: 1,teste2: 2,}];

console.log(arr);

/* Arrays de um tipo de dado é mais comum*/
var arr2 = [1,2,3,4,5,6,];

console.log(arr2);

/* Como acesar um valor de um array, o exemplo abaixo
Os indices do arrays começam pelo 0 */
console.log(arr[1]);
console.log(arr2[0]);

/* Como colocar um novo indice no array */
arr[4] = 15;

/* Posso tambem sobreescrever um valor de um indice que ja estar no array */
arr[0] = 30;

console.log(arr);

console.log(typeof arr);

/* Criando um laço que vai pecorrer todo o array */
for( let i=0; i < arr2.length; i++) {
    console.log(arr2[i]);
}