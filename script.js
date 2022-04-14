
// returns Rock, Paper, or Scissors by random for computer's selection
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


// plays single match of rock paper scissors
// returns 0 for tie, 1 for win, 2 for lose
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



let playerSelection = "";


const rpsButtons = document.querySelectorAll(".rps-buttons");
for (let i = 0; i < rpsButtons.length; i++){
    rpsButtons[i].addEventListener('click', () => {
        playerSelection = rpsButtons[i].textContent;
        game(playerSelection);
    });
}




function game(playerSelection){

    const output = document.querySelector("#output"); 

    computerSelection = computerPlay();
    let playerScore = 0;
    let computerScore = 0;
    let result = playMatch(playerSelection, computerSelection);

    switch (result) {
        case 0:
            output.textContent = `It's a tie! Score: ${playerScore} - ${computerScore}\n`; // "It's a tie! Score: 0 - 0"
            break;
        case 1:
            playerScore += 1;
            output.textContent = `${playerSelection} beats ${computerSelection}!\nScore: ${playerScore} - ${computerScore}\n`; // "Rock beats Scissors! Score: 1 - 0"
            break;
        case 2:
            computerScore += 1;
            output.textContent = `${playerSelection} loses to ${computerSelection}!\nScore: ${playerScore} - ${computerScore}\n`; // "Rock loses to Paper! Score: 0 - 1"
            break;
        case 3:
            computerScore += 1;
            output.textContent = `Invalid input. Computer wins match by default. Score: ${playerScore} - ${computerScore}`;
            break;
    }

    if (playerScore > computerScore){
        console.log("You Win!");
    } else if (computerScore > playerScore){
        console.log("You lose!");
    } else {
        console.log("You tied!");
    }

}


