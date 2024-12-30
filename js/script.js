// CODICE PER PAROLA PALINDROMA

// 1. creo un prompt per chiedere all'utente la parola da verificare
let userWord = prompt(`Dimmi una parola e ti dirò se è palindroma, provami!`)

// 2. creo una funzione per verificare se la parola è palindroma o meno
function palindromeWord(word) {
    const upperWord = word.toUpperCase(); // rendo tutte le lettere della parola maiuscole, per evitare errori se l'utente inserisce maiuscole nella parola
    const arrayWord = upperWord.split(""); // trasformo la parola in array per lavorarci meglio
    const reversedArrayWord = arrayWord.toReversed(); // creo un nuovo array inverso
    const reversedWord = reversedArrayWord.join(""); // rendo l'array inverso una stringa

    // verifico se la parola è palindroma e ritorno un console.log
    if (upperWord === reversedWord){
        return console.log(`${word} è palindroma!`)
    } else{
        return console.log(`${word} non è palindroma!`)
    }
}

// 3. verifico che gli input sono corretti e attivo la funzione
if (!userWord || !isNaN(userWord)){
    alert("Inserisci una parola per favore e ricarica!")
} else{
    palindromeWord(userWord);
}