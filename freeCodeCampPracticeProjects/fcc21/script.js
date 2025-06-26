//Project 21 Dice game

const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesBtn = document.getElementById("rules-btn");
const rulesContainer = document.querySelector(".rules-container");

let isModalShowing = false;
let diceValuesArr = [];
let rolls = 0;
let score = 0;
let round = 1;


rulesBtn.addEventListener("click", ()=>{
    isModalShowing = !isModalShowing

    if(isModalShowing){
        rulesContainer.style.display = "block";
        rulesBtn.textContent = "Hide rules";

    } else {
        rulesContainer.style.display = "none";
        rulesBtn.textContent = "Show rules";
    }
});

rollDiceBtn.addEventListener("click",()=>{
    
});

