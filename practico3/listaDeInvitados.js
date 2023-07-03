let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let admitidos = [];
let rechazados = [];
let i = 0;
while (i < personas.length) {
  let invitado = personas[i];
  if (invitado === "Jose" || invitado === "Sofia") {
    rechazados[rechazados.length] = invitado;
  } else {
    admitidos[admitidos.length] = invitado;
  }
  i++;
}
console.log("La lista de invitados admitidos es:");
let a = 0;
while (a < admitidos.length) {
  console.log(admitidos[a]);
  a++;
}
console.log("La lista de invitados rechazados es:");
let k = 0;
while (k < rechazados.length) {
  console.log(rechazados[k]);
  k++;
}