let cronometro = document.getElementById('cronometro');
let btnIniciar = document.getElementById('btn-iniciar');
let btnPausar = document.getElementById('btn-pausar');
let btnReset = document.getElementById('btn-reset');
let intervalo;
let segundos = 0, minutos = 0, horas = 0;
let tiempoUsuario = 0;

function iniciarCronometro() {
  let tiempoActual = new Date().getTime();
  intervalo = setInterval(function(){
    let tiempoTranscurrido = new Date().getTime() - tiempoActual + tiempoUsuario;
    segundos = Math.floor(tiempoTranscurrido / 1000) % 60;
    minutos = Math.floor(tiempoTranscurrido / (1000 * 60)) % 60;
    horas = Math.floor(tiempoTranscurrido / (1000 * 60 * 60));
    cronometro.innerHTML = `${agregarCeros(horas)}:${agregarCeros(minutos)}:${agregarCeros(segundos)}`;
  }, 1000);
}

function detenerCronometro() {
  clearInterval(intervalo);
  tiempoUsuario = (horas * 60 * 60 + minutos * 60 + segundos) * 1000;
}

function resetearCronometro(){
  clearInterval(intervalo);
  tiempoUsuario = 0;
  segundos = 0;
  minutos = 0;
  horas = 0;
  cronometro.innerHTML = `${agregarCeros(horas)}:${agregarCeros(minutos)}:${agregarCeros(segundos)}`;
}

function agregarCeros(numero) {
  if(numero < 10) {
    return `0${numero}`;
  }
  return numero;
}

btnIniciar.onclick = function() {
  iniciarCronometro();
}

btnPausar.onclick = function() {
  detenerCronometro();
}

btnReset.onclick = function() {
  resetearCronometro();
}