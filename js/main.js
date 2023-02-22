'use strict';


const prezzoPerKm = 0.21;

const kmPercorsi = document.getElementById("km_percorsi").value;
const etaUtente = document.getElementById("etaUtente");
const prezzoTot = kmPercorsi * prezzoPerKm; 
let prezzoMinorenni = prezzoTot - (prezzoTot * 0.2);
let prezzoOver = prezzoTot - (prezzoTot * 0.4);

//EVENTO
    document.getElementById('genera').addEventListener('click', 
    function(){
        //-RICHIESTA KM 
        //-RICHIESTA ETÁ
        if(etaUtente='minorenne'){
            console.log(prezzoMinorenni + ' €');
            document.getElementById('test').innerHTML = (prezzoMinorenni +' €');
        } else if(etaUtente='over60'){
            console.log(prezzoOver + ' €');
            document.getElementById('test').innerHTML = (prezzoOver +' €');

        } else{
            console.log(prezzoTot + ' €');
            document.getElementById('test').innerHTML = (prezzoTot +' €');
        }
    })   
