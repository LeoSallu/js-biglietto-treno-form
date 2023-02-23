'use strict';
//IMPOSTAZIONI VARIABILI
const nomeUtente = document.getElementById('nomeUtente');
const kmPercorsi = document.getElementById('km_percorsi');
const etaUtente = document.getElementById('etaUtente');

//VARIABILI STAMPA HTML
const testoNome = document.getElementById('nome');
const testoOfferta = document.getElementById('offerta');
const testoCarrozza = document.getElementById('carrozza');
const testoCp = document.getElementById('cp');
const prezzo = document.getElementById('prezzo'); 
const risultatoBiglietto = document.querySelector('biglietto_treno');         

//EVENTO
    document.getElementById('genera').addEventListener('click', 
    function(){
        //IMPOSTAZIONE COSTANTI INPUT DEL FORM
        const inputNomeUtenteValue = nomeUtente.value;
        const inputKmValue = Number(kmPercorsi.value);
        const inputEtaValue = etaUtente.value;
        console.log({inputNomeUtenteValue, inputKmValue, inputEtaValue});
        // PREZZO E IF
        let prezzoTot = 0.21 * inputKmValue;
        let messaggio = 'Biglietto Standard';
        if(inputEtaValue==='Minorenne'){
            messaggio = 'Sconto minorenne';
            prezzoTot = prezzoTot * 0.8;
        }
        else if(inputEtaValue==='Over'){
            messaggio = 'Sconto over';
            prezzoTot = prezzoTot * 0.6;
        }

        prezzoTot = prezzoTot.toFixed(2);
        console.log(prezzoTot + ' €'); 
       
        //STAMPA NEL HTML
        testoNome.innerHTML = inputNomeUtenteValue;
        testoOfferta.innerHTML = messaggio;
        //testoCarrozza.innerHTML =;
        //testoCp.innerHTML =;
        prezzo.innerHTML = prezzoTot + ' €';

        // TOOGLE
        // risultatoBiglietto.classList.add('show');
     })   
