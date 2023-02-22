'use strict';
    //EVENTO
    document.getElementById('genera').addEventListener('click', 
    function(){
        //-RICHIESTA KM 
            const prezzoPerKm = 0.21;
            const kmPercorsi = document.getElementById("km_percorsi").value;
            let prezzoTot = ((kmPercorsi * prezzoPerKm).toFixed(2)); 
            console.log(prezzoTot+' €'); 
            document.getElementById('test').innerHTML = (prezzoTot +' €');
        //-RICHIESTA ETÁ
        let età = document.getElementById("età").value;        
    if(età="Minorenne"){
        let prezzoScontato = ((prezzoTot - (prezzoTot * 0.2)).toFixed(2));
        console.log(prezzoScontato + ' €');
        document.getElementById('test').innerHTML = (prezzoScontato +' €');
    } else if(età="Over60"){
        let prezzoScontato = prezzoTot - ((prezzoTot * 0.4).toFixed(2));
        console.log(prezzoScontato + ' €');
        document.getElementById('test').innerHTML = (prezzoScontato +' €');

    } else{
        console.log(prezzoTot + ' €');
        document.getElementById('test').innerHTML = (prezzoTot +' €');
    }
    })   
