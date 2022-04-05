
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

    playerSelection =  playerSelection.substring(0,1).toUpperCase() +  // takes player input and capitalizes the first letter, and makes the rest lowercase
            playerSelection.substring(1,).toLowerCase();
    
    if (playerSelection == computerSelection){ // tie condition checking
        return 0;
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||  // win condition checking
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")) {
        return 1;
    }
    else if ((playerSelection == "Rock" && computerSelection == "Paper") || // lose condition checking
    (playerSelection == "Scissors" && computerSelection == "Rock") ||
    (playerSelection == "Paper" && computerSelection == "Scissors")) {
        return -1;
    }
    else {
        return "invalid input";
    }
}


function game(){

    let matchNumber = window.prompt("How many matches?", "5");
    
    if (+matchNumber === NaN){
        window.alert("Invalid Input!");
        break;
    } else {
        for (let i = 0; i < matchNumber; i++;){
            let PlayerSelection = window.prompt("Rock, Paper, or Scissors?","");
            let computerSelection = computerPlay();

        }
    }

}

console.log(+"hello");
