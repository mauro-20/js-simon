// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Inizializazione variabili
var numToMemorize = [];
var numMemorized = [];

/**
 * funzione di controllo numeri memorizzati
 */
function numbersControl() {
  document.getElementById('instructions').classList.add('visible');
  //riabilto i campi input
  for (var i = 1; i <= 5; i++) {
          document.getElementById(`num${i}`).disabled = false;
        }
  document.getElementById('btn-check').addEventListener('click',
    function () {
      document.getElementById('instructions').classList.remove('visible');
      numMemorized = []
      for (var i = 1; i <= 5; i++){
        var userNum = parseInt(document.getElementById(`num${i}`).value);
        if (numToMemorize.includes(userNum) && !numMemorized.includes(userNum)) {
          numMemorized.push(userNum);
          document.getElementById(`num${i}`).classList.add('check-ok')
        } else {
          document.getElementById(`num${i}`).classList.add('check-ko')
        }
      }
      document.getElementById('guessed1').innerHTML = `Hai indovinato ${numMemorized.length} numeri`
      // alert('Hai indovinato' + numMemorized.length + 'numeri');
      // alert('I numeri indovinati sono:' + numMemorized);
    }
  )

}

// Inizializzo il programma
//memorizzo 5 numeri casuali in un array
while (numToMemorize.length < 5) {
  var numRandom = Math.ceil(Math.random() * 100);
  if (!numToMemorize.includes(numRandom)) {
    numToMemorize.push(numRandom)
  }
}

// scrivo i 5 numeri nei campi input
for (var i = 0; i < numToMemorize.length; i++){
  document.getElementById(`num${i+1}`).value = numToMemorize[i]
}

console.log(numToMemorize);

//al click di Start
document.getElementById('btn-start').addEventListener('click',
  function () {
    // pulisco i campi input
    for (var i = 0; i < 5; i++) {
      document.getElementById(`num${i + 1}`).value = '';
    }
    //disabilito i campi input
    for (var i = 1; i <= 5; i++) {
      document.getElementById(`num${i}`).disabled = true;
    }
    setTimeout(numbersControl, 30000);

  }
  
)