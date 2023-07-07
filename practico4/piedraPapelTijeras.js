const readline = require('readline');

function obtenerJugadaComputadora() {
  const opciones = ["piedra", "papel", "tijeras"];
  const indice = Math.floor(Math.random() * 3);
  return opciones[indice];
}

function obtenerJugadaUsuario() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question("Elige tu jugada (piedra, papel o tijeras): ", (jugada) => {
      rl.close();
      resolve(jugada.toLowerCase());
    });
  });
}

function determinarGanador(jugadaComputadora, jugadaUsuario) {
  if (
    (jugadaComputadora === "piedra" && jugadaUsuario === "tijeras") ||
    (jugadaComputadora === "tijeras" && jugadaUsuario === "papel") ||
    (jugadaComputadora === "papel" && jugadaUsuario === "piedra")
  ) {
    return "Gana la computadora";
  } else if (
    (jugadaUsuario === "piedra" && jugadaComputadora === "tijeras") ||
    (jugadaUsuario === "tijeras" && jugadaComputadora === "papel") ||
    (jugadaUsuario === "papel" && jugadaComputadora === "piedra")
  ) {
    return "Gana el usuario";
  } else {
    return "Empate";
  }
}

async function jugarPiedraPapelTijeras() {
  const jugadaComputadora = obtenerJugadaComputadora();
  const jugadaUsuario = await obtenerJugadaUsuario();
  const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

  console.log("La computadora eligió: " + jugadaComputadora);
  console.log("El usuario eligió: " + jugadaUsuario);
  console.log("El resultado fue: " + resultado);
}

jugarPiedraPapelTijeras();