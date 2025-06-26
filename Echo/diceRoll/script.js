//DiceRoll


const rollBtn = document.getElementById("roll-btn");
const display = document.getElementById("display");


// const max = 100;
// const min = 50;

rollBtn.addEventListener("click", ()=>{
    // display.textContent = Math.floor(Math.random() * (max - min)) + min;

    display.textContent = Math.floor(Math.random() * 6) + 1 ; 
});
