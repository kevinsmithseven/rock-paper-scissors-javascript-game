// Need and array of R,P,S
// Need a a place to store the user inputs
// Need a prompt to ask users to enter R, P or S
// Need to generate a random selection from the computer
// Need to have an If Else statement to determine the winner
// Need to ask the user if they would like to play again
// Need to store total wins and total losses


// * As a user, I want to play Rock, Paper, Scissors against an automated opponent.

// * As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

// * As a user, I expect the computer to choose R, P, or S in return.

// * As a user, I want the option to play again whether I win or lose.

// * As a user, I want to see my total wins, ties, and losses after each round.

var wins = 0;
var ties = 0;
var losses = 0;

//Array of options for the computer to pick from
var rpsOptions = ["Enter R, P, or S"];

var playGame = function() {
//Ask user for their choice
var userChoice = window.prompt("Please enter your choice of R, P or S");

//If user pressed cancel, immediately and function
// if (!userChoice) {
//     return;
// }

function computerChoice() {
    Math.floor(Math.random() * ([rpsOptions].length));
}
console.log(computerChoice);







}

//Ask if the user would like to play
// var playRPS = confirm("Would you like to play Rock Paper or Scissors against the computer?")
// console.log(playRPS);

// if (playRPS) {
//     userEnterChoice()
// } else {
//     alert("Sorry to hear that, maybe next time!")
// }











// alert("Hello World!")

// var iceCreamEnjoyer = confirm("Do you like ice cream?")

// var userFavIceCream = prompt("What is your favorite flavor?")

// console.log(iceCreamEnjoyer);
// console.log(userFavIceCream);

// "Enter R, P or S to play Rock Paper Scissors against the computer")