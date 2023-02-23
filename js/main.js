'use strict';
//IMPOSTAZIONI VARIABILI
const nomeUtente = document.getElementById('nomeUtente');
const kmPercorsi = document.getElementById('km_percorsi');
const etaUtente = document.getElementById('etaUtente');
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
        
        if(inputEtaValue==='minorenne'){
            prezzoTot = prezzoTot * 0.8;
        }
        else if(inputEtaValue==='over60'){
            prezzoTot = prezzoTot * 0.6;
        }

        prezzoTot = prezzoTot.toFixed(2);
        console.log(prezzoTot + ' €'); 
        //STAMPA NEL HTML
        document.getElementById('test-name').innerHTML = inputNomeUtenteValue;
        document.getElementById('test-km').innerHTML = inputKmValue;   
        document.getElementById('test-age').innerHTML = inputEtaValue;  
        document.getElementById('test-price').innerHTML = prezzoTot + ' €';          
     })   
