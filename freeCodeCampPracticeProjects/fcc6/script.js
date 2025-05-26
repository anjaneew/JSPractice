function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];

  /* Better way: use length
  return options[Math.floor(Math.random()*3)];
    */
    const randomIndex = Math.floor(Math.random * options.length);
    return options[randomIndex];
}



/* later deleted by fcc
console.log(getRandomComputerResult()); */

function hasPlayerWonTheRound(player, computer) {
/*Better way: use booleans  
if(player === "Rock" && computer === "Scissors"){
    return true;
  } else if (player === "Scissors" && computer === "Paper"){
    return true;
  } else if (player === "Paper" && computer === "Rock"){
    return true;
  } else {
    return false;
  } */
 return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper")||
    (player === "Paper" && computer === "Rock")
 );
}
/* later deleted by fcc
console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
console.log(hasPlayerWonTheRound("Scissors", "Rock")); */

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if(hasPlayerWonTheRound(userOption, computerResult)){
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption){
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
 
}

/* later deleted by fcc
console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);*/

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;

    /*Better way: use terinary operator
    if( playerScore === 3){
        winnerMsgElement.innerText = "Player has won the game!";
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    } else if (computerScore === 3){
        winnerMsgElement.innerText = "Computer has won the game!";
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    } */

    if( playerScore === 3 || computerScore === 3){
        winnerMsgElement.innerText = `${playerScore === 3 ? "Player" : "Computer"} has won the game!`;
        
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }    

};

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
};

/* later deleted by fcc
showResults("Rock"); */

