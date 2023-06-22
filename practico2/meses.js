const readlineSync = require("readline-sync");
const meses = {
    1: "Enero",
    2: "Febrero",
    3: "Marzo",
    4: "Abril",
    5: "Mayo",
    6: "Junio",
    7: "Julio",
    8: "Agosto",
    9: "Septiembre",
    10: "Octubre",
    11: "Noviembre",
    12: "Diciembre"
};
const cualMes = readlineSync.question("Ingrese un numero del 1 al 12: ");
const mes = meses[cualMes];
const cantidadDias = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  };
  const cantidadDeDias = cantidadDias[cualMes];
  console.log(`La cantidad de dias del mes de ${mes} es ${cantidadDeDias}.`);


