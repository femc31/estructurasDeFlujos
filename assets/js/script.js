//el codigo de javascript es secuencial, es decir, se ejecuta linea por linea

console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');
alert('esto es una pausa');
console.log('6');
console.log('7');
console.log('8');
console.log('9');
console.log('10');

//dentro de javascript existen algunas funciones bloqueantes: esa instruccion detiene todo, hasta que se complete esa parte del codigo
//en este ejercicio seria el alert, mientras no se presione el boton de aceptar, no se imprimiran los demas log.
//este tema lo veremos mas a detalle en el proximo modulo, con las funciones async await.

//estructuas de control de flujo: en base a pruebas logicas indica si algo se va a ejecutar o no.
//if - switch - for - while - do while
//siempre a lo menos en una prueba logica habra un simbolo de comparacion: > < >= <= == != === !==
//if y switch: instrucciones de validacion
//for, while y do while: ciclos de validacion

//instruccion if
//palabra reservada.
//condicional o prueba logica: puede ser una de las dos, y sera un valor booleano.
//entre las llaves {} colocare las instrucciones que se ejecutaran cuando la condicion de inicio se cumpla
if(4 == 5) {
    console.log('esto se ejecuta siempre y cuando la condicion se cumpla');    
}
console.log('esto se ejecuta despues del if');

/**
 * if (condicional o prueba logica) {
 *      La(s) intruccion(es) que se ejecutar(an) cuando la condicion se cumpla
 * }
 */

//instrucciones if-else
//definir el color favorito de una persona entre dos opciones: verde y rojo
var colorFavorito = prompt('Ingresar tu color favorito entre verde y rojo');
if (colorFavorito == 'verde') {
    console.log(`tu color favorito es verde`);
} else {
    console.log(`tu color favorito es rojo`);
}

/**
 * if (condicional o prueba logica) {
 *      La(s) intruccion(es) que se ejecutar(an) cuando la condicion se cumpla
 * } else {
 *      La(s) intruccion(es) que se ejecutar(an) cuando la condicion NO se cumpla
 * }
 */

//if-else-if
//definir el color favorito de una persona entre 3 opciones: rojo, verde, amarillo
var colorFavorito = prompt('Ingresar tu color favorito entre verde, rojo y amarillo');
if (colorFavorito == 'verde') {
    console.log(`tu color favorito es verde`);
} else if (colorFavorito == 'rojo'){
    console.log(`tu color favorito es rojo`);
} else {
    console.log(`tu color favorito es amarillo`);
}
