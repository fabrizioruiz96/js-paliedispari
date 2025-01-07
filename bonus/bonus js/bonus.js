// CODICE PER PAROLA PALINDROMA

// 1. creo un prompt per chiedere all'utente la parola da verificare
const userWord = document.querySelector("#inputWord");
const palindromeSubmitButton = document.querySelector("#palindromeSubmit");
const palindromeResultArea = document.querySelector("#palindromeResultArea");
const forms = document.querySelector('.needs-validation')

// 2. creo una funzione per verificare se la parola è palindroma o meno
function palindromeWord(word) {
    const upperWord = word.toUpperCase(); // rendo tutte le lettere della parola maiuscole, per evitare errori se l'utente inserisce maiuscole nella parola
    const arrayWord = upperWord.split(""); // trasformo la parola in array per lavorarci meglio
    const reversedArrayWord = arrayWord.toReversed(); // creo un nuovo array inverso
    const reversedWord = reversedArrayWord.join(""); // rendo l'array inverso una stringa

    // verifico se la parola è palindroma e ritorno un console.log
    if (upperWord === reversedWord) {
        return palindromeResultArea.innerHTML = `${word} è una parola palindroma!`;
    } else {
        return palindromeResultArea.innerHTML = `${word} non è una parola palindroma!`;
    }
}

// creo un nuovo evento al click del tasto submit
palindromeSubmitButton.addEventListener(`click`, function(e){
    e.preventDefault();

    if (!userWord.value || !isNaN(userWord.value)) {
        forms.classList.add(`was-validated`);
    } else {
        palindromeWord(userWord.value);
    }
})