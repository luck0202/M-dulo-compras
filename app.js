//relógio
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();

    horas.textContent = hr;
    minutos.textContent = min;
})

//data
const day = document.getElementById('day');
const weekday = document.getElementById('weekday');
const monthyear = document.getElementById('monthyear');
const year = document.getElementById('year');

let dataAtual = new Date();

//dia
let dia = dataAtual.getDate();

//dias da semana
let diaSemana = dataAtual.getDay();
if (diaSemana == 0) diaSemana = 'Domingo'
if (diaSemana == 1) diaSemana = 'Segunda-feira'
if (diaSemana == 2) diaSemana = 'Terça-feira'
if (diaSemana == 3) diaSemana = 'Quarta-feira'
if (diaSemana == 4) diaSemana = 'Quinta-feira'
if (diaSemana == 5) diaSemana = 'Sexta-feira'
if (diaSemana == 6) diaSemana = 'Sabado'

//mês
let mes = dataAtual.getMonth();

if (mes == 0) mes = 'janeiro'
if (mes == 1) mes = 'fevereiro'
if (mes == 2) mes = 'março'
if (mes == 3) mes = 'abril'
if (mes == 4) mes = 'maio'
if (mes == 5) mes = 'junho'
if (mes == 6) mes = 'julho'
if (mes == 7) mes = 'agosto'
if (mes == 8) mes = 'setembro'
if (mes == 9) mes = 'outubro'
if (mes == 10) mes = 'novembro'
if (mes == 11) mes = 'dezembro'

//ano
let ano = dataAtual.getFullYear();

weekday.textContent = diaSemana;
day.textContent = dia;
monthyear.textContent = mes;
year.textContent = ano;

document.getElementById("weekday").innerHTML = diaSemana.toDateString();
document.getElementById("day").innerHTML = dia.toDateString();
document.getElementById("monthyear").innerHTML = mes.toDateString();
document.getElementById("year").innerHTML = ano.toDateString();



