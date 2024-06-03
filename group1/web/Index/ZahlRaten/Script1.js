document.getElementById('guessButton').addEventListener('click', checkGuess);

const secretNumber = Math.floor(Math.random() * 101); // Zufällige Zahl zwischen 0 und 100
const resultElement = document.getElementById('result');

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);

    if (isNaN(userGuess)) {
        resultElement.textContent = "Bitte gib eine gültige Zahl ein!";
        return;
    }
   
    if (userGuess < secretNumber) {
        resultElement.innerHTML = "Die Zahl ist zu niedrig! <img src='DaumenRunter.png'>";
        resultElement.className = "result failure";
    } else if (userGuess > secretNumber) {
        resultElement.innerHTML = "Die Zahl ist zu hoch! <img src='DaumenHoch.png'>";
        resultElement.className = "result failure";
    } else {
        resultElement.innerHTML = "Richtig! Du hast die Zahl erraten! <img src='Richtig.png'>";
        resultElement.className = "result success";
    }
}