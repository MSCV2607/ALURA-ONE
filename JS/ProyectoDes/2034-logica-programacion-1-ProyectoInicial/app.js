// //Funcion para mostrar un mensaje de alerta
// alert("Hola, mundo!");

// Variable para almacenar numero
let numerousuario = 0;
let numeroSecreto = 8;

// Solicitar un numero al usuario
numerousuario = prompt("Indicame un numero por favor:");

// Mostrar el numero ingresado en la consola
console.log("El numero ingresado es: " + numerousuario);

// Validar si el numero ingresado es igual al numero secreto
if (numerousuario == numeroSecreto) {
    console.log("¡Felicidades! Has adivinado el numero secreto.");
} else {
    console.log("Lo siento, el numero secreto era: " + numeroSecreto);
}