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

//done
const rollDice = () => {
    diceValuesArr = [];

    for(let i = 0; i < 5; i++){
        const randomDice= Math.floor(Math.random() * 6) + 1;
        diceValuesArr.push(randomDice);

        //  listOfAllDice.textContent =  diceValuesArr.sort((a,b)=> a - b);
    }

    listOfAllDice.forEach((dice, index)=>{
        dice.textContent = diceValuesArr[index];
    });
    
};//hellod

//done
const updateStats = () =>{
    rollsElement.textContent = rolls;
    roundElement.textContent = round;
};

//done
const updateRadioOption = (index, score) => {
    scoreInputs[index].disabled = false;
    scoreInputs[index].value = score;
    scoreSpans[index].textContent = `, score = ${score}`;
};

const updateScore = (selectedValue, achieved) => {
    score += parseInt(selectedValue);
    totalScoreElement.textContent = score;

    scoreHistory.innerHTML += `<li>${achieved} : ${selectedValue}</li>`;
};

const getHighestDuplicates = (arr) => {

    const counts = {}; //clears counts object each time

    for(const num of arr){ 
        if(counts[num]){ //if counts object has num, then count duplicates
            counts[num]++;
        }
        else{
            counts[num] = 1;//or this is the first run
        }
    }

    let highestCount = 0;

    for(const num of arr){
        const count = counts[num];

        if(count >= 3 && count > highestCount){
            highestCount = count;
        }

        if(count >= 4 && count > highestCount){
            highestCount = count;
        }
    }

    const sumOfAllDice = arr.reduce((a,b)=> a + b, 0);

    if(highestCount >= 4){
        updateRadioOption(1, sumOfAllDice);
    }

    else if(highestCount >= 3){
        updateRadioOption(0, sumOfAllDice);
    }

    // updateRadioOption(5, 0);
};

const detectFullHouse = (arr) => {
    const counts = {};

    for(const num of arr){
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    const hasThreeOfAKind = Object.values(counts).includes(3);
    const hasPair = Object.values(counts).includes(2);

    if(hasThreeOfAKind && hasPair){
        updateRadioOption(2, 25);
    }

    // updateRadioOption(5, 0);
}; 

const checkForStraights = (arr) => {
    const sortedNumbersArr = arr.sort((a,b)=>a-b);
    const uniqueNumbersArr = [...new Set(sortedNumbersArr)];
    const uniqueNumbersStr = uniqueNumbersArr.join("");
    const smallStraightsArr = ["1234", "2345", "3456"];
    const largeStraightsArr = ["12345", "23456"];

    if(largeStraightsArr.includes(uniqueNumbersStr)){
        updateRadioOption(4, 40);
    }

    if(smallStraightsArr.some(straight => uniqueNumbersStr.includes(straight))){
        updateRadioOption(3, 30);
    }

    // updateRadioOption(5, 0);

};

const resetRadioOptions = () => {
    scoreInputs.forEach((input)=>{
        input.disabled = true;
        input.checked = false;
    });

    scoreSpans.forEach((span)=>{
        span.textContent = '';
    });
};

const resetGame = () => {
    diceValuesArr = [0, 0, 0, 0, 0];
    rolls = 0;
    score = 0;
    round = 1;

    listOfAllDice.forEach((dice, index)=>{
        dice.textContent = diceValuesArr[index];
    });

    totalScoreElement.textContent = score;
    scoreHistory.innerHTML = '';

    rollsElement.textContent = rolls;
    roundElement.text = round;

    resetRadioOptions();
};

rollDiceBtn.addEventListener("click", () => {
    if(rolls === 3){
        alert("You have made three rolls this round. Please select a score.");
    } 
    else{
        resetRadioOptions();
        rolls++;
        rollDice();
        updateStats();
        getHighestDuplicates(diceValuesArr);
        detectFullHouse(diceValuesArr);
        checkForStraights(diceValuesArr);
    }
  
});

//done
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

keepScoreBtn.addEventListener("click", ()=>{
    let selectedValue;
    let achieved;

    for(const radioButton of scoreInputs){
        if(radioButton.checked){
            selectedValue = radioButton.value;
            achieved = radioButton.id;
            break;
        }
    }

    if(selectedValue){
        rolls = 0;
        round++;
        updateStats();
        resetRadioOptions();
        updateScore(selectedValue, achieved);
        if(round > 6){
            setTimeout(() => {
                alert(`im confused. why you removed the 87 steps of instructions? ${score}`);
                resetGame();
            }, 500);
        }

    }
    else{
        alert("Please select an option or roll the dice. FUck not giving us enough instructions to pass this one")
    }

});
