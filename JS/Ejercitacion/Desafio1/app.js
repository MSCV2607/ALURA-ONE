// 1
alert("¡Bienvenida y bienvenido a nuestro sitio web!");

// 2
let nombre = "Lua";

// 3
let edad = 25;

// 4
let numeroDeVentas = 50;

// 5
let saldoDisponible = 1000;

// 6
alert("¡Error! Completa todos los campos");

// 7
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

// 8
nombre = prompt("Por favor, ingresa tu nombre:");

// 9
edad = prompt("Por favor, ingresa tu edad:");
edad = Number(edad); // 👈 importante convertirlo a número

// 10
if (edad >= 18) {
  alert("¡Puedes obtener tu licencia de conducir!");
} else {
  alert("Lo siento, debes ser mayor de 18 años para continuar.");
}
