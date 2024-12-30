// CODICE PER PAROLA PALINDROMA

// 1. creo un prompt per chiedere all'utente la parola da verificare
let userWord = prompt(`Dimmi una parola e ti dirò se è palindroma, provami!`);

// 2. creo una funzione per verificare se la parola è palindroma o meno
function palindromeWord(word) {
    const upperWord = word.toUpperCase(); // rendo tutte le lettere della parola maiuscole, per evitare errori se l'utente inserisce maiuscole nella parola
    const arrayWord = upperWord.split(""); // trasformo la parola in array per lavorarci meglio
    const reversedArrayWord = arrayWord.toReversed(); // creo un nuovo array inverso
    const reversedWord = reversedArrayWord.join(""); // rendo l'array inverso una stringa

    // verifico se la parola è palindroma e ritorno un console.log
    if (upperWord === reversedWord) {
        return console.log(`${word} è palindroma!`);
    } else {
        return console.log(`${word} non è palindroma!`);
    }
}

// 3. verifico che gli input sono corretti e attivo la funzione
if (!userWord || !isNaN(userWord)) {
    alert("Inserisci una parola per favore!");
} else {
    palindromeWord(userWord);
}

// CODICE PER GIOCARE A PARI O DISPARI

// creo un prompt per far scegliere all'utente tra pari e dispari
let userChoice = prompt(`Scegli pari o dispari!`);

// creo 2 variabili per la verifica della scelta
userChoice = userChoice.toLowerCase();
const odd = `pari`;
const even = `dispari`;

// creo una funzione per generare un numero random
function randomBotNumer(){
    let botNumber = Math.floor(Math.random() * 5) +1;
    return botNumber; 
}

// creo una funzione per giocare a pari e dispari
function playOddEven(user, bot) {
    let sumNumber = user + bot; //variabile con la somma dei numeri scelti
    let res = ``; //variabile vuota in cui poi aggiungerò il valore pari o dispari

    if (sumNumber % 2 === 0){ //se il valore è pari, aggiungo odd
        res = odd;  
    } else { //se il valore non è pari, aggiungo even
        res = even; 
    } 

    // creo 2 messaggi di vittoria o sconfitta
    if (userChoice === res){
        console.log(`Avevi scelto ${userChoice}! E' uscito ${sumNumber}! Complimenti, il risultato è ${res}, hai vinto!`)
    } else { 
        console.log(`Avevi scelto ${userChoice}! E' uscito ${sumNumber}! Mi dispiace, il risultato è ${res}, hai perso!`)
    }
    return;
}

// verifico se l'utente ha inserito una scelta valida 

// se la scelta non è valida mando un messaggio di errore
if (userChoice !== odd && userChoice !== even) { 
    alert(`Inserisci una scelta valida e ricarica`);
}

 // se la scelta è valida proseguo con la scelta del numero
let userNumber = parseInt(prompt(`Scegli un numero da 1 a 5!`));
    
// verifico che il numero inserito è corretto

//se il numero non è valido mando un messaggio di errore
if (isNaN(userNumber) || userNumber < 1 || userNumber > 5){
    alert(`Inserisci un numero valido e ricarica!`); 
}

//se il numero è valido chiamo la funzione
playOddEven(userNumber, randomBotNumer()); 