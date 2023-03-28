/* Os arrays também possuem metodos, é mais completo que a string
Facilitando a nossa vida para: adicionar e remocer elementos, resgatar apenas uma parte do array e etc
Podemos também resgatar um conjunto de elementos com os métodos
Identifica o índice de um elemento específico e muito mais */

// "length", verifica a quatidade de itens no array

var arr = [1, 2, 3, 4, 5, 6];

console.log(arr.length);

// "push", adiciona um elemento no array

arr.push(7);
arr.push("Qualquer coisa");

console.log(arr);
console.log(arr.length);

// "pop", elimina o elemento no final do array

arr.pop();

console.log(arr);
console.log(arr.length);

// "unshift", adiciona um elemento no começo do array

arr.unshift(0);

console.log(arr);
console.log(arr.length);

// "shift", remove o elemento no começo do array

arr.shift();

console.log(arr);
console.log(arr.length);

// acessar o último elemento

console.log(arr[arr.length - 1]);

// "isArray", verifica se é um array

console.log(Array.isArray(5));
console.log(Array.isArray(arr));

// "splice", adiciona um elemento no meio do array, tambem eliminar um elemento no meio array

arr.splice(2, 0, 999);

console.log(arr);
console.log(arr.length);

/* indico qual posição eu quero iliminar e quantos apos ele eu quero eliminar */
arr.splice(4, 1);

console.log(arr);
console.log(arr.length);

// "indexOf", funciona igual ao sprint, identifica o indice do elemento, se o elemento não existir, retorna -1

console.log(arr);
console.log(arr.indexOf(5));
console.log(arr.indexOf(9));

// "join", tranforma um array numa string

var arr2 = ["O", "rato", "roeu", "a", "roupa"];

console.log(arr2.join(" "));
console.log(arr2.join(","));
console.log(arr2.join("_"));

// "reverse", inverte um arry

/* console.log(arr.reverse()); */

// "concat", metodo usado para concatenar 2 arrays

const cães = ["Pug","Maltes","Golden"];
const gatos = ["Mishi","Garfield","Zuri"];
const animais = cães.concat(gatos);
console.log(animais);

// "slice", metodo para recorta parte de array, porem ainda mantem ela intacta

const nomes = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanessa'];
const masculinos = nomes.slice(1, 3);
console.log(masculinos);
console.log(nomes);

// "includes", metodo que ultiliza de um parametro e verifica sem ele tem dentro ou fora de um array

console.log( nomes.includes("Rita"));
console.log( nomes.includes("Pedro"));
console.log( nomes.includes("Julieta"));