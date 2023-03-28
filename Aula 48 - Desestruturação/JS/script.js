/* Acessando dados de um objeto de maneira comum */

const usuario = {
  nome: "Pedro Lucas",
  idade: 27,
};

let nome2 = usuario.nome;
let idade3 = usuario.idade;

console.log(nome2);
console.log(idade3);

// Abaixo é o outra maneira qua buscamos os dados dentro do objeto só usando

let { nome, idade } = usuario;

console.log(nome);
console.log(idade);

// A gente pode usar a propriedade "Alias" para mudar o nome de algo para outro, mantendo o seu valor - Eu acho que deve ser pouco recomendado

const item5 = {
  item_id: 432,
  product_name: "Some product",
  price_per_unit: 5600,
};

const { item_id: id, product_name: nome5, price_per_unit: preço } = item5;

console.log(id); // 432
console.log(nome5); // "Some product"
console.log(preço); // 5600

// Destruturação dentro do paramentro, que basicamente manda o objeto para dentro da função e desustrurar la dentro

const produto = {
  id: 10,
  nome: "Curso Javascript",
  preço: 12500,
};

const desestruturar = (item) => {
  // desestruturando dentro do bloco
  const { id, nome } = item;
  console.log(id, nome);
};

desestruturar(produto); // 10 Curso Javascript

// Mas agora eu posso destruturar na chamada da função

const desestruturar2 = ({ id, nome, preço }) => {
  console.log(id, nome, preço);
};

desestruturar2(produto);

// Outro exemplo

window.addEventListener("click", ({ x, y }) => {
  console.log(x, y);
});

// Desestruturação de Arrays

const nomes = ["Juan", "Julieta", "Carlos", "Mariela"];

// omito as duas primeiras posições
const [, , a, b] = nomes;

console.log(a); // "Carlos"
console.log(b); // "Mariela"

// Spread, é uma maneira de pegar um array ou objeto e quebrar a maneira que ele se apresenta

const nomes5 = ["João", "Julieta", "Carlos", "Mariela"];

console.log(nomes5); // ["João", "Julieta", "Carlos", "Mariela"]

const nomes10 = ["João", "Julieta", "Carlos", "Mariela"];

// spread ... do array
console.log(...nomes10); // João Julieta Carlos Mariela

// equivalente a:
console.log("João", "Julieta", "Carlo", "Mariela");

// Outra maneira de fazer a mesma coisa, o spread simplifica pra isso.
console.log(nomes10[0], nomes10[1], nomes[2], nomes[3]);

// Algumas funcionalidades para o Spread abaixo

const números = [4, 77, 92, 10, 3, -32, 54, 11];

// maneira que vai apresentar um erro
console.log(Math.max(números)); // NaN

// maneira correta
console.log(Math.max(...números)); // 92

// Se fizermos isso dentro de um objeto, veremos algo interessante, que cada propriedade toma como nome o índice dos elementos

const nomess1 = ["João", "Julieta"];
const nomess2 = ["Carlos", "Mariela"];

// spread dos dois arrays dentro de outro
const nomesss = [...nomess1, ...nomess2];

console.log(nomesss); // ["João", "Julieta", "Carlos", "Mariela"]

// spread do array em um objeto
const nomesObj = {
  ...nomesss,
};

console.log(nomesObj);
// {'0': 'João', '1': 'Julieta',' 2': 'Carlos',' 3':' Mariela'}

// Fazendo um Spread dentro do objeto

const usuario1 = {
  nome: "João",
  idade: 24,
  curso: "Javascript",
};

// lista todas as propriedades e valores do usuário1 dentro de outro objeto, isso faz uma copia do usuário1, não alterando o principal
const usuario2 = {
  ...usuário1,
};

console.log(usuario2); // { nome: 'João', idade: 24, curso: 'Javascript'}

const usuario3 = {
  ...usuário1,
  curso: "ReactJS",
  email: "joão@doe.com",
};
console.log(usuário3);
// { nome: 'João', idade: 24, curso: 'ReactJS', e-mail: 'joão@doe.com'}

// Rest de paramentro, é uma maniera de fazer com que uma função posssa receber um numero indefinidos de paramentros

function somar(...numeros) {
  console.log(numeros);
}

somar(4, 2); // [ 4, 2 ]
somar(10, 15, 30, 5); // [ 10, 15, 30, 5 ]

// Outro Exemplo

function somar(...numeros) {
  return numeros.reduz((acc, n) => acc + n, 0);
}

console.log(somar(4, 2)); // 6
console.log(somar(10, 15, 30, 5)); // 60
console.log(somar(100, 300, 50)); // 450
