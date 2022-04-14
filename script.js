


//initialize variables
let playerSelection = "";
const rpsButtons = document.querySelectorAll(".rps-buttons");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
playerScore.textContent = 0;
computerScore.textContent = 0;

// event listeners for rps buttons
// runs game()
for (let i = 0; i < rpsButtons.length; i++){
    rpsButtons[i].addEventListener('click', () => {
        playerSelection = rpsButtons[i].textContent;
        game(playerSelection);
    });
}





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
// return value is used in switch in game()
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


// main game function
// outputs result and returns 0 for tie, 1 for win, 2 for lose <= used in score
function game(playerSelection){

    const output = document.querySelector("#output"); 
    computerSelection = computerPlay();
    let result = playMatch(playerSelection, computerSelection);

    // outputs result string and returns outcome
    switch (result) {
        case 0: // tie
            output.textContent = `It's a tie!`; // "It's a tie!"
            break;
        case 1: // player wins
            output.textContent = `${playerSelection} beats ${computerSelection}!`; // "Rock beats Scissors!"
            playerScore.textContent = +playerScore.textContent + 1;
            break;
        case 2:  // computer wins
            output.textContent = `${playerSelection} loses to ${computerSelection}!`; // "Rock loses to Paper!"
            computerScore.textContent = +computerScore.textContent + 1;
            break;
        case 3:
            output.textContent = `Invalid input. Computer wins match by default. Score: ${playerScore} - ${computerScore}`;
            break;
    }


    // if (playerScore > computerScore){
    //     console.log("You Win!");
    // } else if (computerScore > playerScore){
    //     console.log("You lose!");
    // } else {
    //     console.log("You tied!");
    // }

}


