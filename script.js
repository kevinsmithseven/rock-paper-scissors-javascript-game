var wins = 0;
var ties = 0;
var losses = 0;

//Array of options for the computer to pick from
var rpsOptions = ["R", "P", "S"];

var playGame = function () {
    //Ask user for their choice
    var userChoice = window.prompt("Please enter your choice of R, P or S");

    //If user pressed cancel, immediately and function
    if (!userChoice) {
        return;
    }

    //Convert to uppercase to make comparisons easier
    userChoice = userChoice.toUpperCase();

    //Get random index from array of options
    var index = Math.floor(Math.random() * rpsOptions.length);
    var computerChoice = rpsOptions[index];

    window.alert("The computer chose " + computerChoice);

    //If choices are the same, it's a tie
    if (userChoice === computerChoice) {
        ties++;
        window.alert("You have tied!");

        //Check every win condition for the player   
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
    ) {
        wins++;
        window.alert("You win!");

        // If above conditions failed, assume player lost
    } else {
        losses++;
        window.alert("You lost!");
    }

    //Print stats with line breaks
    window.alert(
        "Status:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    //Ask user to play again
    var playAgain = window.confirm("Play again?");

    //If user pressed OK, run the function again
    if (playAgain) {
        playGame();
    }
}

//Run the game for the first time
playGame();









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