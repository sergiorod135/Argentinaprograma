const readlineSync = require("readline-sync");
const numero = parseInt(readlineSync.question("Ingrese un numero del 1 al 7: "));
let repuesta;
switch (numero) {
case 1:
    repuesta = "Hoy es lunes";
    break;
case 2:
    repuesta = "Hoy es martes";
    break;
case 3:
    repuesta = "Hoy es miercoles";
    break;
case 4:
    repuesta = "Hoy es jueves";
    break;
case 5:
    repuesta = "Hoy es viernes";
    break;
case 6:
    repuesta = "Hoy es sabado";
    break;
case 7:
    repuesta = "Hoy es domingo";
    break;
default:
    repuesta = "Numero invalido";
    break;
}
console.log(repuesta);