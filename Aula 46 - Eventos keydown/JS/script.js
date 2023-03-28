/* O evento keydown é ativado quando uma tecla é pressionada
Podemos também atrelar o evento keyup para quando uma tecla volta a posição normal */

// keydown

document.addEventListener("keydown", function(event) {
    
    /* console.log(event.key); */

    if(event.key === "Enter") {
        console.log("Apertou a tecla Enter")
    }
})

// keyup

document.addEventListener("keyup",function(e) {

    if(e.key === "Enter") {
        console.log("soltou o Enter");
    } 
})