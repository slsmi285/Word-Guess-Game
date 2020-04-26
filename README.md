# Word-Guess-Game
    ### Instructions

*   Create a website (from scrach) where the user will guess the word.

*   When the user opens the game, there will be text instructions on how to play the game.

*   The user will choose letters, by pressing the letter keys on computer, to try to spell out what the word is.

*   If the user guesses a letter correctly, the letter will show up in its appropriate place in the word. 

*   Page will display the letteres used by the user.  If user presses same key, no impact to game or counter.

*   When user presses a letter key on keyboard and it does not match, the letter will show up in the used letter section of the form.

*   User will have a maximum number of guesses.  If user guesses the word user wins. header will need to be displayed of ...as such.. word is m a g n u m, picture of Magnum displays, header will display "Magnum PI", and music is optional, such as theme song from the show.

*   if user doesn't win, then user loses a game.  Create function of if else if.

*   setup a for loop so that another game plays.  Limit the game to maximum number of games played.  User wins all, dispay "Win! Game Over!"

*   Set up variables.

*   Create conditions, if else if.

*   Create functions.

*   Use document.write for game over announcement.

    
    
    
    



   // Need to track guesses and record letters used, wins, show letters of word - track, show picture and play music.
//var remainingLetters = game.length;
// Counter - for every guess, variable will decrease by 1. Once it hits 0, player has won or loss?
//while (remainingLetters > 0) {
    //show the player their progress
//}

//Get a guess from the player - take input
// user presses correct letter key, letter displays under "current word".
var guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
    //Exit the game loop
} else if (guess.length !== 1) {
    alert("Please enter a single letter.");
} else {
    // Update the game state with the guess
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
        }
        function drawScore() {
            CanvasRenderingContext2D.font = "16px Arial";
            CanvasRenderingContext2D.fillstyle = "#0095dd";
            CanvasRenderingContext2D.filltext("Score: " + score, 8, 20);
        }
    }
}
//the end of the game loop.

// Wins
// Count
// Letter Used
// Letters chosen by user is displayed
// user presses incorrect letter key, letter displays under "letters used". Create function for if, else if.
// number of guesses - user will see counter max at start of each word game, for each letter chosen, counter will count back to 0, game ends.
// user guesses word, and completes choosing the letters. Wins is counted displayed, image of word displays and header above game displays. Music optional.

//need to use document.write() 
// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);

  
    
   