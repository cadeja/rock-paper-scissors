
// returns Rock, Paper, or Scissors by random

function computerPlay(){
    let selection = Math.floor(Math.random() * 3);
    switch (selection) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function promptCleaner(text) {
    text =  text.substring(0,1).toUpperCase() +  // takes player input and capitalizes the first letter, and makes the rest lowercase
            text.substring(1,).toLowerCase();
}


function playMatch(playerSelection, computerSelection){
    
    if (playerSelection == computerSelection){ // tie condition checking => returns 0
        return 0;
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||  // win condition checking => returns 1
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")) {
        return 1;
    }
    else if ((playerSelection == "Rock" && computerSelection == "Paper") || // lose condition checking => returns 2
    (playerSelection == "Scissors" && computerSelection == "Rock") ||
    (playerSelection == "Paper" && computerSelection == "Scissors")) {
        return 2;
    }
    else {
        return 3; // invalid input
    }
}


function game(){

    let matchNumber = window.prompt("How many matches?", "5");
    let playerScore = 0;
    let computerScore = 0;

    if (+matchNumber === NaN){
        window.alert("Invalid Input!");
        break;
    } else {
        for (let i = 0; i < matchNumber; i++;){
            let playerSelection = promptCleaner(window.prompt("Rock, Paper, or Scissors?",""));
            let computerSelection = computerPlay();

            let result = playMatch(playerSelection, computerSelection);
            switch (result) {
                case 0:
                    console.log(`It's a tie! Score: ${playerScore} - ${computerScore}\n`); // "It's a tie! Score: 0 - 0"
                    break;
                case 1:
                    playerScore += 1;
                    console.log(`${playerSelection} beats ${computerSelection}!\nScore: ${playerScore} - ${computerScore}\n`); // "Rock beats Scissors! Score: 1 - 0"
                    break;
                case 2:
                    computerScore += 1;
                    console.log(`${playerSelection} loses to ${computerSelection}!\nScore: ${playerScore} - ${computerScore}\n`); // "Rock loses to Paper! Score: 0 - 1"
                    break;
                case 3:
                    computerScore += 1;
                    console.log(`Invalid input. Computer wins match by default. Score: ${playerScore} - ${computerScore}`);
                    break;
            }
        }
    }

    if (playerScore > computerScore){
        console.log("You Win!");
    } else if (computerScore > playerScore){
        console.log("You lose!");
    } else {
        console.log("You tied!");
    }

}