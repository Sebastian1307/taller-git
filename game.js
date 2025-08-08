const NumeroXD = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function RevisarRespuesta() {
    const input = document.getElementById('InputAdivinar');
    const mensaje = document.getElementById('Kirbodice');
    const respuesta = Number(input.value);
    intentos++;

    const diferencia = Math.abs(NumeroXD - respuesta);

    if (respuesta === NumeroXD) {
        mensaje.textContent = `¡Sisas! Lo adivino en ${intentos} intentos. Casi que no manco`;
    } else if (diferencia <= 5) {
        mensaje.textContent = "¡Mas caliente que adolescente de colegio publico! ";
    } else if (diferencia <= 10) {
        mensaje.textContent = "Caliente como el guaviare ";
    } else if (diferencia <= 20) {
        mensaje.textContent = "Frio como un milo ";
    } else {
        mensaje.textContent = "¡Tan frio que parece de millos! ";
    }

    //puse este comentario para poder decir que algo cambio jaja salu2
    //este tambien
}