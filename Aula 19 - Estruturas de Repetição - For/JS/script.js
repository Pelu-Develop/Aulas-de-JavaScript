/* O for tem uma sintaxe mais complexa, mas é optante pela maioria dos programadores
Apesar de parecer mais difícil, como a instrução fica toda em uma linha proporciona maior controle */


/* No for, na primeira etapa se coloca o primeiro parametro que vai dar start no for
no segundo se coloca é até quando o for irar repetir a ação
e no terceiro será o que será mudado a cada atualização */
for ( var x = 0; x < 5; x++) {
    console.log("Repetindo for:" + x);
}

var arr = [1,2,3,4,5];

for (var j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}

/* fala, quantos elementos de comprimento tem o array */
console.log(arr.length);

for (var i = 5; i < 100; i *= 3) {
    console.log(i);
}