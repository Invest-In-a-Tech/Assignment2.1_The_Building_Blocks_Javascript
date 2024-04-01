// Connectes to the gameOutput element
var outputElement = document.getElementById('gameOutput');

// Connects the diceOutput element
var diceOutput = document.getElementById('diceOutput');

// Update the elements's HTML content
outputElement.innerHTML = "You're on a roll Dice Game!";

// Connects the rollButton element
var buttonElement = document.getElementById('rollButton');

// function that runs when the button is clicked
buttonElement.onclick = function() {
    // generate a number between 1 and 6
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // add the two dice rolls together
    var diceTotal = dice1 + dice2;

    // log the values to the console for debugging
    console.log(dice1);
    console.log(dice2);
    console.log(diceTotal);

    // output the values to the screen
    diceOutput.innerHTML = "You rolled a " + dice1 + " and a " + dice2 + " for a total of " + diceTotal;

    // if sum = 7 or sum = 11, output "CRAPS! You lose!"
    if (diceTotal == 7 || diceTotal == 11) {
        outputElement.innerHTML = "CRAPS! You lose!";
    }
    // if dice1 = dice2 and dice1 is even, output "You Won!"
    else if (dice1 == dice2 && dice1 % 2 == 0) {
        outputElement.innerHTML = "You Won!";
    }
    else {
        outputElement.innerHTML = "You pushed!";
    }
}

