//Variables
let numeroSecreto = 7;
let numerousuario = 0;
while (numerousuario != numeroSecreto) {
    // Solicitar un numero al usuario
    numerousuario = prompt("Indicame un numero por favor:");

    // Mostrar el numero ingresado en la consola
    console.log("El numero ingresado es: " + numerousuario);

    // Validar si el numero ingresado es igual al numero secreto
    if (numerousuario == numeroSecreto) {

        //Usamos comillas invertidas para interpolar el valor de la variable
        alert(`Acertaste el numero secreto:  ${numeroSecreto}`);
    } else {
        if (numerousuario < numeroSecreto) {
            alert("El numero ingresado es menor al numero secreto");
        } else {
            alert(`El numero ingresado es mayor al numero secreto`);
        }
    }
}