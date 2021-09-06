// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Inizializazione variabili
var numToMemorize = [];
var numMemorized = []

/**
 * funzione di controllo numeri memorizzati
 */
function numbersControl() {
  for (var i = 0; i < 5; i++){
    var userNum = parseInt(prompt('inserisci un numero memorizzato'))
    if (numToMemorize.includes(userNum)) {
      numMemorized.push(userNum);
    }
  }
  alert('Hai indovinato' + numMemorized.length + 'numeri');
  alert('I numeri indovinati sono:' + numMemorized);

}


//memorizzo 5 numeri casuali in un array
while (numToMemorize.length < 5) {
  var numRandom = Math.ceil(Math.random() * 100);
  if (!numToMemorize.includes(numRandom)) {
    numToMemorize.push(numRandom)
  }
}

console.log(numToMemorize);

// Un alert() espone 5 numeri generati casualmente.
alert('Memorizza questi numeri: ' + numToMemorize);

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
setTimeout(numbersControl, 30000);

