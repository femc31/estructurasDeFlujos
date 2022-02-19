//estructuas de control de flujo.
//if - switch - for - while - do while
//simbolo de comparacion: > < >= <= == != === !==

//solicitar poor pantalla 20 nombres e imprimirlos en consola
for (/*inicio*/ var i = 0; /*hasta*/ i < 20; /*de cuanto en cuanto*/ i = i + 1) {
    var nombre = prompt('Ingresa tu nombre');
    console.log(nombre);
}

var hasta = prompt('¿cuantos nombres necesitas?');
var inicio = 0;
var salto = 1;
for (var i = inicio; i < hasta; i = i + salto){
    var nombre = prompt('Ingrese el nombre');
    console.log(nombre);
}

//while
//solicita por pantalla N nombres e imprimelos en consola, el usuario dira stop para cuando quiera dejar de ingresar nombres
var estado = prompt('Ingresa "stop" si quieres salir');
while (estado != 'stop'){
    console.log('Infinito!!!!!!');
    //estado = 'stop';
    estado = prompt('Ingresa "stop" si quieres salir');
}

/**
 * while(condicional o prueba logica) {
 *      instrucciones a ejecutar y repetirse mientras la condicion se cumpla
 * }
 */

//do-while
do {
    var nombre = prompt('ingresa tu nombre');
    console.log(nombre);
    var estadoDo = prompt('ingrese "stop" si quiere salir');
} while (estadoDo != 'stop');