// Sentença "for...of" permite percorrer um array executando um bloco de código para cada elemento do objeto.

const produtos = [{id: 1, produto: "Arroz"},{id: 2, produto: "Macarrão"},{id: 3, produto: "Pão"},];

for (const produto of produtos) {
    console.log(produto.id);
    console.log(produto.produto);
}

// Metodo "forEach()" é similar ao exemplo porCadaUm

const numeros = [1,2,3,4,5,6];

numeros.forEach ((num) => {
    console.log(num);
})

// Metodo "find()" recebe uma função de comparação por parametro, captura o elemnteo que se está percorrendo e retona o primeiro elemento do array que cumpra a condição.
// Caso não tenha, ele retorna underfind

const cursos = [
    {nome: "Javascrip", preco: 15000},
    {nome: "ReactJS", preco: 20000},
    {nome: "AngularJS", preco: 20000},
    {nome: "Desenvolvimento Web", preco: 25000},
]

const resultado = cursos.find((o) => o.nome === "ReactJS");
const resultado2 = cursos.find((o) => o.nome === "DW");

console.log(resultado);
console.log(resultado2);

//O metodo "filter()" recebe da mesma forma que o find, porem a diferença é que irar retornar um novo array com todos os elementos que cumpra essa condição
// Caso não haja, irar retornar um array vazio

const resultado3 = cursos.filter((o) => o.nome.includes("JS"));
const resultado4 = cursos.filter((o) => o.preco > 140000);

console.log(resultado3);
console.log(resultado4);

// O metodo "some()" funciona da mesma forma que o "find()", porem a diferença é que o metodo retorna true ou false conforme o resultado d iteração de busca

const resultado5 = cursos.some((o) => o.nome === "Desenvolvimento Web");
const resultado6 = cursos.some((o) => o.nome === "VueJS");

console.log(resultado5);
console.log(resultado6);

// O metodo "map()" cria um novo array com todos os elementos do original, transformados de acordo com as operações da função enviada por parametro.
// Ele tem a mesam quantidade de elementos, mas os armazenados são o return da função

const atualizandoCustos = cursos.map((o) => {
    return {
        nome: o.nome,
        preco: o.preco * 1.25
    }
});

console.log(atualizandoCustos);

// O metodo "reduce()" nos permite obter um unico valor apos iterar sobre o array. Funciona como um método que resume o array a um unico valor de retorno

const total = numeros.reduce((acumulador,elemento) => acumulador + elemento, 0);

console.log(total);

// Outro exemplo de "reduce()"

const minhaCompra = [
    {nome: "Javascrip", preco: 15000},
    {nome: "ReactJS", preco: 20000},
    {nome: "AngularJS", preco: 20000},
]

const compraTotal = minhaCompra.reduce((acc,o) => acc + o.preco, 0);

console.log(compraTotal);

// O método "sort()" nos permite reordenar um array segundo algum critério que definirmos. O método recebe uma função de comparação por parametro que revebe dois elementos do array por vez. A função deve retonar um valor numérico (1, -1, 0), que indica qual elemnto se posiciona antes ou depois

const numerosAleatorios = [ 40, 1, 5 , 500, 3000, -1];

console.log(numerosAleatorios.sort((a,b) => a - b));
console.log(numerosAleatorios.sort((a,b) => b - a));

const itens = [
    {name: "Pikachu", price: 21},
    {name: "Charmander", price: 37},
    {name: "Pidgey", price: 45},
    {name: "Squirtle", price: 60},
]

itens.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    } 
    if (a.name < b.name) {
        return -1;
    }

    return 0
})