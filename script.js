
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

function playMatch(playerSelection, computerSelection){

    playerSelection =  playerSelection.substring(0,1).toUpperCase() + 
            playerSelection.substring(1,).toLowerCase();
    
    if (playerSelection == computerSelection){
        return "You Tied!";
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    }
    else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Scissors" && computerSelection == "Rock") ||
    (playerSelection == "Paper" && computerSelection == "Scissors")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else {
        return "invalid input";
    }


}

console.log(playMatch(window.prompt("Choose Rock, Paper, or Scissors", ),computerPlay()));