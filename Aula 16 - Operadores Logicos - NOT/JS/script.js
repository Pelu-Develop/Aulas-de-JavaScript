/* O Operador Lógico "!" é conhecido também como NOT
Este operador mudar o valor que a expressão retornou
Se recebeu true vira false, se recebeu false vira true */

/* Nesse caso, estar invertendo o valor no parenteses
Transformou de true para false */
if (!true) {
    console.log("Passou");
}

if (!false) {
    console.log("Passou");
}

var nome = "Pedro"

/* Esse aqui passa */
if (nome == "Pedro") {
    console.log("OK");
}

/* Esse aqui não passa, ele faz a comparação primeiro pra depois inverter */
if (!(nome == "Pedro")) {
    console.log("OK");
} else {
    console.log("Nada OK")
}

/* Esse aqui passou, porque o comparação deu errado, retonou false e inveteu para true com o "!" */
if (!(nome == "Matheus")) {
    console.log("OK");
}

