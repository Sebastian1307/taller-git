const NumeroXD = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function RevisarRespuesta() {
    const input = document.getElementById('InputAdivinar');
    const mensaje = document.getElementById('Kirbodice');
    const respuesta = Number(input.value);
    intentos++;

    const diferencia = Math.abs(NumeroXD - respuesta);
    let texto = "";

    if (respuesta === NumeroXD) {
        texto = `¡Sisas! Lo adivinó en ${intentos} intentos. Casi que no manco.`;
    } else if (diferencia <= 5) {
        texto = "¡Más caliente que adolescente de colegio público!";
    } else if (diferencia <= 10) {
        texto = "Caliente como el Guaviare.";
    } else if (diferencia <= 20) {
        texto = "Frío como un Milo.";
    } else {
        texto = "¡Tan frío que parece de Millos!";
    }

    //puse este comentario para poder decir que algo cambio jaja salu2
    //este tambien


    // Mi primer easter egg
    if (respuesta === 13) {
        texto += " INHALA aqui las tie...........";
    }

    mensaje.textContent = texto;

    //Si alguien lee esto
}
