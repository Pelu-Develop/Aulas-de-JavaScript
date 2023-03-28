/* Com break podemos encerrar uma instrução
Com o continue podemos pular uma instrução
utilizamos na maioria das vezes em loops, porem não é muito ultilizado no dia a dia*/

for (var i = 0; i < 10; i++) {
    
    console.log(i);

    if(i == 5) {
        /* Quando a continue for lido, ele irar pular a repetição */
        console.log("De um continue")
        continue
    }

    if(i == 8) {
        /* Quando break for lido, ele vai parar a repetição */
        console.log("De um break")
        break
    }
    
}

