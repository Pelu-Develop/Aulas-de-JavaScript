// Objeto
/* Um objeto é uma coleção de propriedade, e uma propriedade
e uma associação entre um nome (ou chave) e um valor. Um valor
de propriedade pode ser uma função, que é então considerada um método do objeto */

let pessoa = {
    /* Pode ser qualquer tipo de valor no objeto */
    nome: "Pedro",
    idade: 26,
    feliz:true,
    pets: ["cachorro","gato","tartaruga"],
    /* Tambem é possivel colocar objetos dentro de outros objetos e pode ser infinitas cadeias */
    carros: {
        camaro: {
            placa: "123456",
            cor: "vermelho"
        },
        uno: {
            placa: "654321",
            cor:"branco"
        }
    },
    andar:function(km) {
        alert(pessoa.nome + " andou " + km + " km")
    }
}

/* Maneiras de acessar os dados dentro de um objeto */
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.feliz);
console.log(pessoa.pets[1]);

/* Maneira de mudar um valor de uma chave do objeto */
pessoa.nome = "Gabrielle";
pessoa.pets[0] = "Papagaio";

console.log(pessoa.nome);
console.log(pessoa.pets[0]);

/* Como acessar um obejto que estar dentro de um outro objeto  */
console.log(pessoa.carros.camaro.placa)
console.log(pessoa.carros.camaro.cor)
console.log(pessoa.carros.uno.placa)
console.log(pessoa.carros.uno.cor)

/* Execulta uma função que estar dentro de um objeto */
pessoa.andar(10);

