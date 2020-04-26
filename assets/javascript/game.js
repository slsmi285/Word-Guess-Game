// Game opens with link. theme is Magnum PI

var underscoresLabel = document.querySelector("#underscores");
var remainingLabel = document.querySelector("#remaining-guesses");
var attemptsLabel = document.querySelector("#attempts");
var possibleWords = ["magnum", "hawaii", "surf", "farrari", "higgins"];
var attempts = []
var remainingAttempts = 10;
var 

// Main Functionality Starts
var wordToGuess = getWord();
updateLabels()
function getWord() {
    var wordsSize = magnumWord.length;
    var indexWord = Math.floor(Math.random() * wordsSize);
    return magnumWord[indexWord];
}
function updateLabels() {
    underscoresLabel.textContent = updateBlanks()
    remainingLabel.textContent = remainingAttempts;
    attemptsLabel.textContent = attempts.toString();
}
function updateBlanks() {
    var blanks = []
    // Go through each letter in wordToGuess
    for (var letter of wordToGuess) {
        if (attempts.includes(letter)) {
            blanks.push(letter)
        } else {
            blanks.push('_')
        }
    }
    return blanks.join(' ')
}
document.addEventListener("keypress", function (e) {
    var keyPressed = e.key.toLocaleLowerCase();
    if (!attempts.includes(keyPressed)) {
        attempts.push(keyPressed);
        if (!wordToGuess.includes(keyPressed)) {
            remainingAttempts--;
        }
    }
    // Decrease attempts by one when key pressed
    updateLabels();
    if (remainingAttempts == 0) {
        alert("Game Over!")
        window.location.reload(true);
    }
})

//Game should run as follows, each word is guessed correctly, image should populate.
//h2 should state the name of the image, and song is optional to play.
//Each word should reset, if the word is guessed correctly, or if max number of tries are reduced to 0.












