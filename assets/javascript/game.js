
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var left = 10;
var previous = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var leftText = document.getElementById("left-text");
var previousText = document.getElementById("previous-text");

document.onkeypress = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    alert("You chose: " + userGuess + " and the computer chose: " + computerGuess);

    previous.push(userGuess);

    if (left > 0) {
        if (userGuess === computerGuess) {
        wins++;
        alert("You won!");
    } else {
        losses++;
        left--;
    }
} if (left === 0) {
    losses === 0;
    left === 10
    previous === " ";
}

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    leftText.textContent = "Guesses Left: " + left;
    previousText.textContent = "Previous Guesses: " + previous + " ";
};

