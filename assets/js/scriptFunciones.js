//funciones, introduccion
//toda funcion primero se define y luego se ejecuta
function imprimirEnConsola() {
    console.log('esta es una simple impresion por consola')
}

imprimirEnConsola();

//generar un codigo que nos permita generar un numero aleatorio entre 0 y 10
//desde el sistema y luego mostrarlo por consola
function numeroAleatorio() {
    var numeroAlAzar;
    //todo el nombre de clases comienzan con mayusculas (ej Math) -> Upper camel case
    numeroAlAzar = Math.trunc(Math.random() * 10) + 1;
    console.log(numeroAlAzar);
}

numeroAleatorio();

function numeroAleatorio2() {
    var numeroAlAzar;
    //imprimir 4 numeros al azar de una sola vez
    for (var i = 0; i < 4; i = i + 1) {
        numeroAlAzar = Math.trunc(Math.random() * 10) + 1;
        console.log(numeroAlAzar);
    }
}

numeroAleatorio2();


function numeroAleatorio3() {
    var numeroAlAzar;
    //Math.floor -> redondear hacia abajo
    numeroAlAzar = Math.floor(Math.random() * 10) + 1;
    console.log(numeroAlAzar);
}

numeroAleatorio3();