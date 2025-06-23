//Platformer Game

const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");
const  startScreen  = document.querySelector(".start-screen");
const  checkpointScreen = document.querySelector(".checkpoint-screen");

const checkpointMessage = document.querySelector(".checkpoint-screen > p");
/**child combinator >
targets the paragraph element inside the .checkpoint-screen element. */

/** -----------------Canvas API  - 2D graphics---------------- 
 * 
 * html element 
 * <canvas id="canvas"></canvas>
 * 
 * ----------------- getContext-----------------
 * 
 * The Canvas API can be used to create graphics in games using
 * JavaScript and the HTML canvas element.
 * You will need to use the getContext method which will provide
 * the context for where the graphics will be rendered.
 * 
 * Example Code
 *      canvas.getContext("2d");
 * 
 * ----------------- canvas.width-----------------
 * 
 * The canvas element has a width property which is a positive
 * number that represents the width of the canvas.
 * Example Code
 *        canvas.width 
 * 
 * --------------- innerWidth & innerHeight-----------------
 *  
 * The innerWidth property is a number that represents the
 * interior width of the browser window.
 * 
 * The innerHeight property is a number that represents the 
 * interior height of the browser window.
 * 
 * -----------------fillRect---------
 * 
 * fillRect(x, y, width, height)
 * 
*/

const ctx = canvas.getContext("2d");
canvas.width = innerWidth;  // full browser width
canvas.height = innerHeight; // full browser height

const gravity = 0.5; // gravity pulls player down
let isCheckpointCollisionDetectionActive = true;

const proportionalSize = size => {
    return innerHeight < 500 ? Math.ceil((size/500)* innerHeight): size ;
};

/**scales sizes based on screen height
 * You need to use the proportionalSize function here to make sure that the player's
 *  position is always proportional to the screen size. This is important because you
 *  want the player to be able to move around the screen regardless of the screen size. */

class Player{
    
    constructor(){
        this.position = {
            x: proportionalSize(10), // ← initial X (horizontal) position
            y: proportionalSize(400) // ← initial Y (vertical) position
        };

        
        
        this.velocity = {
            x: 0,  // ← horizontal speed
            y: 0   // ← vertical speed (used in jumping/falling)
        }
        //player's speed in x & y directions

        this.width = proportionalSize(40); // player's width
        this.height = proportionalSize(40); // player's height
    }

    draw(){
        ctx.fillStyle = "#99c9ff"; // player color

        ctx.fillRect(
            this.position.x,  // ← current X (horizontal) position
            this.position.y,  // ← current Y (vertical) position
            this.width, 
            this.height
        );
    }
    update(){
        this.draw();
        this.position.x += this.velocity.x; // ← moves player horizontally
        this.position.y += this.velocity.y; // ← moves player vertically -  jumping

        //condition to stop the player from falling past the height of the canvas.
        if(this.position.y + this.height + this.velocity.y <= canvas.height){
            if(this.position.y < 0){
                this.position.y = 0;       // snap player to top edge
                this.velocity.y = gravity; // start falling down
            }

            this.velocity.y += gravity; // apply gravity to increase fall speed
        }
        else{
            this.velocity.y = 0; // stop falling if player hits bottom
        }

        if(this.position.x < this.width){
            this.position.x = this.width;
        }

        if(this.position.x >= canvas.width - this.width * 2){
            this.position.x = canvas.width - this.width * 2;
        }
    }
}


const player = new Player(); 

/**The requestAnimationFrame() web API  && clearRect() Web API
 *  
 * The requestAnimationFrame() web API, 
 * takes in a callback and is used to update the animation on the screen. 
 * The animate function will be responsible for updating the 
 * player's position and continually drawing it on the canvas.
 * Inside the animate function, call the requestAnimationFrame() API and 
 * pass animate as the argument.
 * Ex:
 *        requestAnimationFrame(animate);
 * 
 * 
 * clearRect() Web API
 * 
 * As the player moves through the game, you will need to clear the canvas before 
 * rendering the next frame of the animation.You can use the clearRect() Web API 
 * to accomplish this. It takes in an x, y, width, and height arguments. 
 * call the clearRect() method on the ctx  variable and pass in 0, 0, canvas.width, 
 * canvas.height as the arguments.
 * Ex: 
 *    ctx.clearRect(0,0,canvas.width, canvas.height);
 */

const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width, canvas.height);
    player.update();


    //add the logic for increasing or decreasing a player's velocity based on if they move to the left or right of the screen.

    if(keys.rightKey.pressed && player.position.x < proportionalSize(400)){
        player.velocity.x = 5;
    }
    else if(keys.leftKey.pressed && player.position.x > proportionalSize(100)){
        player.velocity.x = -5;
    }
    else{
        player.velocity.x = 0;
    }
};

//manage the player's movement
const keys = {
    rightKey: 
        {pressed: false},
    leftKey: 
        {pressed:false},
};

//The next step is to add the functionality that will be responsible for moving the 
// player across the screen.

const movePlayer = (key, xVelocity, isPressed) =>{
    if(!isCheckpointCollisionDetectionActive){
        player.velocity.x = 0;
        player.velocity.y = 0;
        return;
    }

    switch(key){
        case "ArrowLeft":
            keys.leftKey.pressed = isPressed;

            if(xVelocity === 0){
                player.velocity.x = xVelocity;
            }

            player.velocity.x -= xVelocity;
            break; 
    }


};

const startGame = () =>{
    canvas.style.display = "block";
    startScreen.style.display = "none";
    player.draw();
};



startBtn.addEventListener("click", startGame);