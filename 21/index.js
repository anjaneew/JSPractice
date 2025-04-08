const minNum = 1;
const maxNum = 10;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) +  minNum;

console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Please enter a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number.");
    } else if (guess < minNum || guess > maxNum) {
        window.alert(`Please enter a number between ${minNum} and ${maxNum}`);
    } else {
        attempts++;
        if (answer > guess) {
            window.alert("guess higher");
        } else if (answer < guess) {
            window.alert("guess lower");
        } else {
            window.alert(`correct. The answer is ${answer}. It took you ${attempts} attempts to guess correctly.`);
            running = false;
        }
    }

}
