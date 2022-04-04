
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

function playRound(playerSelection, computerSelection){

    playerSelection =  playerSelection.substring(0,1).toUpperCase() + 
            playerSelection.substring(1,).toLowerCase();
    
    if (playerSelection == computerSelection){
        return "tie";
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")) {
        return "win";
    }
    else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Scissors" && computerSelection == "Rock") ||
    (playerSelection == "Paper" && computerSelection == "Scissors")) {
        return "lose";
    }
    else {
        return "invalid input";
    }
}