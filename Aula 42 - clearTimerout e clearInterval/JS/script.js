/* Podemos por um fim em setTimeout e setInterval por meio destes dois métodos
Então após determinada condição os timers mão será mais executados */

// clearTimeout na prática

var x = 0;

var myTimer = setTimeout(function() {
    console.log("O x é 0");
}, 1500);

x = 5;

if(x > 0) {
    clearTimeout(myTimer);
    console.log("o x passou de 0");
}

// clearInterval

var myInteval = setInterval(function() {
    console.log("Imprimido interval");
},500);

setTimeout(function () {
    
    console.log("não imprima mais o myInteval")
    clearInterval(myInteval)

}, 1500);