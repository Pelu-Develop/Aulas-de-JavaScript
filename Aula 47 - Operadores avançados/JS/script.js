/* Existem maneiras de resumir codigos, assim ao inves de ultilizamos diversas linhas pra fazer algo, a gente coloca tudo na mesma linha */

// Operador Ternario

// primeiro o normal

let idade = 18;

if (idade >= 18) {
  console.log("Ja pode ser preso");
} else if (idade > 16 && idade < 18) {
  console.log("Cuidado que estar chegando na maior idade penal");
} else {
  console.log("vai demorar um pouco para chegar na maior idade penal");
}

// Agora com o operador ternario

idade >= 18
  ? console.log("ja pode ser preso - 2")
  : idade > 16 && idade < 18
  ? console.log("Cuidado que estar chegando na maior idade penal - 2")
  : console.log("vai demorar um pouco para chegar na maior idade penal");

// Operador Logico AND, abaixo é usando normal

let carrinho = [];

if (carrinho.length === 0) {
  console.log("O carrinho estar vazio");
}

// agora usando o operador AND, caso a validação seja falsa, ele vai devolver um bulean false

carrinho.length === 0 && console.log("O carrinho estar vazio 2");

const carrinhoFalse =
  carrinho.length === 1 && console.log("O carrinho estar vazio 2");
console.log(carrinhoFalse);

// Operador Lógico OR, dependendo do value da primeira condição ou ele devolve o valor dela, ou devolve a segunda.
// a lista abaixo são o que a operação vai devolver.

console.log(0 || "Falsy"); // Falsy
console.log(40 || "Falsy"); // 40
console.log(null || "Falsy"); // Falsy
console.log(undefined || "Falsy"); // Falsy
console.log("Olá Mundo" || "Falsy"); // Olá Mundo
console.log("" || "Falsy"); // Falsy
console.log(NaN || "Falsy"); // Falsy
console.log(true || "Falsy"); // true
console.log(false || "Falsy"); // Falsy

// Operador nullish, só vai retornar a segunda opção ser o primiero for null, ou undefined

console.log(0 ?? "Nullish"); // 0
console.log(40 ?? "Nullish"); // 40
console.log(null ?? "Nullish"); // Nullish
console.log(undefined ?? "Nullish"); // Nullish
console.log("Olá Mundo" ?? "Nullish"); // Olá Mundo
console.log("" ?? "Nullish"); // ""
console.log(NaN ?? "Nullish"); // NaN
console.log(true ?? "Nullish"); // true
console.log(false ?? "Nullish"); // false

// Se tivemos um problema de acessar um Objeto nulo, podemos usar um "?" para o sistema não aprensetar um erro e sim continuar com a execução

const usuario = null;

console.log(usuario.nome || "O usuário não existe");
// Erro: "Não é possível ler as propriedades de NULL"

console.log(usuario?.nome || "O usuário não existe");
// "O usuário não existe"

// Outro exemplo abaixo

const usuario2 = {
  nome: "John Doe",
  idade: 22,
  cursos: {
    javascript: "aprovado",
  },
};

console.log(usuario2?.cursos?.javascript || "A propriedade não existe");
// "aprovado"
console.log(usuario2?.trabalhos?.coderhouse || "A propriedade não existe");
// "A propriedade não existe"
