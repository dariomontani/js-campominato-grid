// Consegna
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Consigli del giorno: : party_wizard:
// Facciamo prima la parte grafica a mano e solo dopo passiamo allo script
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.



let scelta = document.getElementById('levels');
console.log(scelta);

let play = document.querySelector('input');
console.log(play);

play.addEventListener('click', function(){
    if (scelta.value == 'easy') {
        console.log('easy');
    } else if (scelta.value == 'medium') {
        console.log('medium');
    } else if (scelta.value == 'crazy') {
        console.log('crazy');
    }
})