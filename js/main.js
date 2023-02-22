'use strict';

//RICHIESTA KM 

const prezzoPerKm = 0.21;
const kmPercorsi = document.getElementById("km_percorsi").value;
let prezzoTot = kmPercorsi * prezzoPerKm;

console.log(prezzoTot+' €');

document.getElementById('test').innerHTML = prezzoTot;

