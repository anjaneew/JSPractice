//counter program

const display = document.getElementById("display");
const increaseBtn = document.getElementById("increase-btn");
const resetBtn = document.getElementById("reset-btn");
const decreaseBtn = document.getElementById("decrease-btn");

let count = 0; 

decreaseBtn.addEventListener("click", ()=>{
    count--;
    
    if(count <0){
        count = 0;
    }

    display.textContent = count;

});

increaseBtn.addEventListener("click", ()=>{
    count++;
    display.textContent = count;
});

resetBtn.addEventListener("click", ()=>{
    count = 0;
    display.textContent = count;
});

