/* JSON = JavaScript Object Notation
Um formato de representação de dados
Mais simples que XML, que é ultilizando para fins parecidos
Utiliza o formato de chave e valor
É leve para ser eviado por requisições
Muito utilizado para API e também arquivos de configuração */

/* O JSON aceita diversos tipos de dados
Strings - "Ola Mundo"
Numeros - 1 ou 12.54
arrays - [1,2,3]
Objetos - {"nome": "Pedro"}
Dados nulos - null */

const objs = [
    {
        nome: "Pedro",
        idade: "27",
        esta_trabalhando: true,
        hobbies: ["Programar", "Jogar", "malhar"],
        detalhes_profissão: {
            profissão: "Gerente",
            Empresa: "Itapua Transportes",
        },
    },
    {
        nome: "Mathues",
        idade: "35",
        esta_trabalhando: false,
        hobbies: ["Fazenderio", "Damas", "Bebado"],
        detalhes_profissão: {
            profissão: null,
            Empresa: null,
        },
    },
];

console.log(objs);

// JSON
// convertendo objeto para json

const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);

// converter json para objeto

const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
    console.log(pessoa.nome);
});
