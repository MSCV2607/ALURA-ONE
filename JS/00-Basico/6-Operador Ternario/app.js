//Variables
let numeroSecreto = Math.floor(Math.random() * 10) + 1; // Genera un numero aleatorio entre 1 y 100
let numerousuario = 0;
let intentos = 1;
let maximosIntentos = 3;

while (numerousuario != numeroSecreto) {
    // Solicitar un numero al usuario
    numerousuario = prompt("Indicame un numero por favor:");

    // Mostrar el numero ingresado en la consola
    console.log("El numero ingresado es: " + numerousuario);

    // Validar si el numero ingresado es igual al numero secreto
    if (numerousuario == numeroSecreto) {

        //Usamos comillas invertidas para interpolar el valor de la variable
        alert(`Acertaste el numero secreto:  ${numeroSecreto}. Lo hicieste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
    } else {
        if (numerousuario < numeroSecreto) {
            alert("El numero ingresado es menor al numero secreto");
        } else {
            alert(`El numero ingresado es mayor al numero secreto`);
        }
        // Incrementar el contador de intentos
        intentos++;
        // Verificar si se ha superado el limite de intentos
        if (intentos > maximosIntentos) {
            alert(`Has superado el limite ${maximosIntentos} de intentos. El numero secreto era: ${numeroSecreto}`);
            break;
        }
    }
}