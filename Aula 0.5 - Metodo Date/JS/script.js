/* Alguns metodos de Date */

console.log( new Date());

/* A gente pode passar valores para o Date */

console.log(new Date(2020,1,15));

const quanseNatal = new Date(2021, 11, 25, 23, 59, 59);
console.log(quanseNatal);

/* Tambem é possivel criar apartir de uma string num formato especifico */

const quaseNaltal2 = new Date("December 25, 2021 23:59:59");
console.log(quaseNaltal2);

/* Temos alguns metodos que retornam coisas especifica do date, como "getFullYear,getMonth,getDay" */

const hoje = new Date("December 20, 2023");

console.log(hoje.getFullYear());
console.log(hoje.getDay());
console.log(hoje.getMonth());

/* Tem varios formatos que a gente pode mostrar o date, alguns exemplos abaixo */

console.log(hoje.toDateString());
console.log(hoje.toLocaleDateString());
console.log(hoje.toLocaleString());
console.log(hoje.toTimeString());

/* Diferença entre datas são gerados em misegundos, a gente tem que calcular quando queremos um resultado*/

const natal = new Date("December 25, 2023");
const hoje2 = new Date("December 17,2023");

console.log(natal - hoje2);

const milisegundosPorDia = 8640000

console.log((natal - hoje2)/milisegundosPorDia);

/* Maneira de calcular o desempenho do computador */

const inicio = new Date();

for (let i = 0; i < 1000; i++) {
    console.log("contando o tempo");
}

const final = new Date();

console.log(`O processo demorou: ${final - inicio} milissegundos`);

