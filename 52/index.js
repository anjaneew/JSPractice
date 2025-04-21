//Closure

//My Example
console.log("My Example");
function loggingIn(){

    let users = 1;

    return function gamePlay(){
        console.log(`We are playing games now. We have ${users} signed up.`);
        users++;
    }
}

const europePlayers = loggingIn();
console.log("europePlayers:");
europePlayers();
europePlayers();
europePlayers();
europePlayers();
europePlayers();

const usaPlayers = loggingIn();
console.log("usaPlayers:");
usaPlayers();
usaPlayers();
usaPlayers();

console.log("-------------------");

//Example 1
console.log("Example 1");
function outer(){

    let message ="hello"
    function inner(){
        console.log(message);
    }

    inner();
}

message = "bye" ; //this cannot modify cz the variable is private
outer();
console.log("-------------------");

//Example 2 - Counter Programme
console.log("Example 2 - Counter Programme");

function createCounter(){

    let count = 0;

    function increment(){
        count++;
        console.log(`Count is increased to ${count}.`);
    }

    function getCount(){
        return count;
    }

    return { increment, getCount};

}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`Current count is ${counter.getCount()}.`);

console.log("-------------------");

//Example 3
console.log("Example 3");

  function gamePlay(){

      let score = 0;

      function increaseScore(points){
          score += points;
          console.log(`+${points}pts`);
      }

      function decreaseScore(points){
          score -= points;
          console.log(`-${points}pts`);
      }

      function getScore(){
          return score
      }

      return {increaseScore, decreaseScore, getScore};

  }

 const myScore = gamePlay();

myScore.increaseScore(100);
myScore.increaseScore(100);
myScore.decreaseScore(40);

console.log(`The current score is ${myScore.getScore()}pts.`);

console.log("-------------------");






























