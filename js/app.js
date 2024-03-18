const tiempoInput = document.getElementById('input');
const tiempoHtml = document.getElementById('tiempo');
const buttonInicio = document.getElementById('inico');
const buttonPausa = document.getElementById('pausa');
const buttonReset = document.getElementById('reset');

let intervalId;
let tiempo = 0;
let pausa = true;

function tiempoActual() {
  const horas = Math.floor(tiempo / 3600);
  const minutos = Math.floor((tiempo % 3600) / 60);
  const segundos = tiempo % 60;

  tiempoHtml.textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

buttonInicio.addEventListener('click', () => {
  if (pausa) {
    pausa = false;
    if (!intervalId) {
      intervalId = setInterval(() => {
        if (tiempo > 0) {
          tiempo--;
          tiempoActual();
        }
      }, 1000);
    }
  }
});

buttonPausa.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  pausa = true;
});

buttonReset.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  tiempo = parseInt(tiempoInput.value) || 0;
  tiempoActual();
  pausa = true;
});