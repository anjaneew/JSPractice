//Rock Paper Scissors Game

const choices =["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    // console.log(`player ${playerChoice}`);
    // console.log(`computer ${computerChoice}`);

    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case 'rock':
                result = (computerChoice === 'scissors') ? "You Win!" : "You Lose!";
                break;
            case 'paper':
                result = (computerChoice === 'rock') ? "You Win!" : "You Lose!";
                break;
            case 'scissors':
                result = (computerChoice === 'paper') ? "You Win!" : "You Lose!";
                break;
        }
        // console.log(result);
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = `${result}`;

    resultDisplay.classList.remove("greenText","redText");

    switch(result){
        case "You Win!":
            resultDisplay.classList.add("greenText");
            // console.log(resultDisplay.classList);
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose!":
            resultDisplay.classList.add("redText");
            // console.log(resultDisplay.classList);
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;

    }


}
//Added myself
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerDisplay.textContent = `PLAYER: ...........`;
    computerDisplay.textContent = `COMPUTER: ...........`;
    resultDisplay.textContent = ``;
}