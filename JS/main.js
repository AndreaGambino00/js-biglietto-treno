
/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
BONUS: introduzione della parte grafica con CSS*/

var km = parseInt(prompt("Quanti chilometri vuoi fare?"));
console.log(km);

var eta = parseInt(prompt("Quanti anni hai?"));
console.log(eta);

var prezzoalKm = 0.21;

if (eta < 18) 
{
    var under18 = prezzoalKm * km * 0.8;
    console.log(under18);
}

else if (eta >= 65) 
{
    var over65 = prezzoalKm * km * 0.6;
    console.log(over65);
}

else 
{
    var prezzostandard = prezzoalKm * km;
    console.log(prezzostandard)
}