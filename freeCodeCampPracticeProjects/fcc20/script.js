//Project 20 Platformer Game

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

        // prevent player from moving past left edge
        if(this.position.x < this.width){
            this.position.x = this.width; 
        }

        // prevent player from moving past right edge
        if(this.position.x >= canvas.width - this.width * 2){
            this.position.x = canvas.width - this.width * 2;
        }
    }
}

//Platforms & platform logic

class Platform {
  constructor(x,y){
    this.position = {x,y}; //⬇️objects &  shorthand property name syntax
    this.width = 200;
    this.height = proportionalSize(40);
  }

  draw(){
    ctx.fillStyle = "#acd157";
    ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
  }
}


/**objects &  shorthand property name syntax
 * 
 * When working with objects where the property name and value are the 
 * same, you can use the shorthand property name syntax. This syntax 
 * allows you to omit the property value if it is the same as the 
 * property name.

    Example Code
    // using shorthand property name syntax
    obj = {
    a, b, c
    }

    The following code is the same as:

    Example Code
    obj = {
    a: a,
    b: b,
    c: c
    }
 */


class CheckPoint{
    constructor(x,y,z){
        this.position = {x, y};
        this.width = proportionalSize(40);
        this.height = proportionalSize(70);
        this.claimed = false;
    }

    draw(){
        ctx.fillStyle = "#f1be32";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    claim(){
        this.width = 0;
        this.height = 0;
        this.position.y = Infinity;
        this.claimed = true;
    }
}    

const player = new Player(); 

const platformPositions = [
    {x:500,y:proportionalSize(450)},
    {x:700,y:proportionalSize(400)},
    {x:850,y:proportionalSize(350)},
    {x:900,y:proportionalSize(350)},
    {x:1050,y:proportionalSize(150)},
    {x:2500,y:proportionalSize(450)},
    {x:2900,y:proportionalSize(400)},
    {x:3150,y:proportionalSize(350)},
    {x:3900,y:proportionalSize(450)},
    {x:4200,y:proportionalSize(400)},
    {x:4400,y:proportionalSize(200)},
    {x:4700,y:proportionalSize(150)},
];

const platforms = platformPositions.map(
    (platform) => new Platform(platform.x,platform.y)

);

const checkpointPositions = [
    {x: 1170, y: proportionalSize(80), z: 1},
    {x: 2900, y: proportionalSize(330), z: 2},
    {x: 4800, y: proportionalSize(80), z: 3},
];

const checkpoints = checkpointPositions.map((checkpoint)=>
    new CheckPoint(checkpoint.x, checkpoint.y, checkpoint.z)
);

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
    //tells browser to run animate() on next frame for smooth animation loop
    requestAnimationFrame(animate); 

    // clears entire canvas before redrawing 
    ctx.clearRect(0,0,canvas.width, canvas.height); 

    platforms.forEach((platform)=> {
        platform.draw();
    });

    checkpoints.forEach((checkpoint) => {
        checkpoint.draw();
    });


    // updates player position and redraws it on canvas each frame
    player.update();


    //move the platforms with the player
    if(keys.rightKey.pressed && isCheckpointCollisionDetectionActive){
        platforms.forEach((platform)=>{
            platform.position.x -= 5;
        });

        checkpoints.forEach((checkpoint)=>{
            checkpoint.position.x -= 5;
        });
    }
    else if(keys.leftKey.pressed && isCheckpointCollisionDetectionActive){
        platforms.forEach((platform)=>{
            platform.position.x +=5;
        })

        checkpoints.forEach((checkpoint)=>{
            checkpoint.position.x += 5;
        });

    }

    //collision detection logic 
    platforms.forEach((platform)=> {
        const collisionDetectionRules = [
            player.position.y + player.height <= platform.position.y,
            player.position.y + player.height + player.velocity.y >= platform.position.y , 
            player.position.x >= platform.position.x - player.width/ 2, 
            player.position.x <= platform.position.x + platform.width - player.width/ 3,
        ];

        //every method  //prevents falling
        if(collisionDetectionRules.every((rule)=> rule)){
            player.velocity.y = 0;
            return;
        }

        const platformDetectionRules = [
            player.position.x >= platform.position.x - player.width/ 2,
            player.position.x <= platform.position.x + platform.width - player.width/3,
            player.position.y + player.height >= platform.position.y,
            player.position.y <= platform.position.y + platform.height,
        ];

        //prevents jumping through the platforms
        if(platformDetectionRules.every((rule)=> rule)){
            player.position.y = platform.position.y + player.height;
            player.velocity.y = gravity;
        }
    });

    checkpoints.forEach((checkpoint, index, checkpoints)=>{

        const checkpointDetectionRules = [
            player.position.x >= checkpoint.position.x,
            player.position.y >= checkpoint.position.y,
            player.position.y + player.height <= checkpoint.position.y + checkpoint.height,
            isCheckpointCollisionDetectionActive,
            player.position.x - player.width <= checkpoint.position.x - checkpoint.width + player.width * 0.9, // player is close enough to the checkpoint to claim it
            index === 0 || checkpoints[index - 1].claimed === true, // player can only claim the first checkpoint or a checkpoint that has already been claimed.
        ];

        if(checkpointDetectionRules.every((rule)=> rule)){
            checkpoint.claim();

            if(index === checkpoints.length - 1){
                isCheckpointCollisionDetectionActive = false;
                showCheckpointScreen("You reached the final checkpoint!");
                movePlayer("ArrowRight", 0, false);
            }
            else if(player.position.x >= checkpoint.position.x && 
                    player.position.x <= checkpoint.position.x + 40){
               showCheckpointScreen("You reached a checkpoint!");         
            }
        }
    });

    /**Every Method
     * if statement that checks if every rule in the collisionDetectionRules array 
     * is truthy. 
     */

    /**collision detection logic 
     * 
     * When you start the game, you will notice that the position of 
     * the platforms is animating alongside the player. But if you try 
     * to jump below one of the platforms, then you will jump right 
     * through it.
     * 
     * To fix this issue, you will need to add collision detection
     * logic to the game.
     * **/


    //add the logic for increasing or decreasing a player's velocity based on if they move to the left or right of the screen.

    if(keys.rightKey.pressed && player.position.x < proportionalSize(400)){
        player.velocity.x = 5; //go right
    }
    else if(keys.leftKey.pressed && player.position.x > proportionalSize(100)){
        player.velocity.x = -5; //go left
    }
    else{
        player.velocity.x = 0; //no movement
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

//velocity = Speed + direction.

const movePlayer = (key, xVelocity, isPressed) =>{

     // stop all movement if checkpoint logic is off
    if(!isCheckpointCollisionDetectionActive){
        player.velocity.x = 0;
        player.velocity.y = 0;
        return;
    }

    switch(key){
        case "ArrowLeft":
            keys.leftKey.pressed = isPressed; // update key status

            if(xVelocity === 0){
                player.velocity.x = xVelocity; // stop if no velocity
            }

            player.velocity.x -= xVelocity; // move left
            break; 
        case "ArrowUp":
        case " ":
        case "Spacebar":
            player.velocity.y -= 8;   // jump up
            break;   
            
        case "ArrowRight":
            keys.rightKey.pressed = isPressed;  // update key status
            
            if(xVelocity === 0 ){
                player.velocity.x = xVelocity; // stop if no velocity
            }
 
            player.velocity.x += xVelocity;  // move right
    }


};

const startGame = () =>{
    canvas.style.display = "block";
    startScreen.style.display = "none";
    animate();
};

const showCheckpointScreen = (msg) => {
    checkpointScreen.style.display = "block";
    checkpointMessage.textContent = msg;
    if(isCheckpointCollisionDetectionActive){
        setTimeout(()=>{
            checkpointScreen.style.display = "none";
        } , 2000);
    }
};


startBtn.addEventListener("click", startGame);
window.addEventListener("keydown", ({key})=>{
    movePlayer(key,8,true); //moves the player
});

window.addEventListener("keyup", ({key})=>{
    movePlayer(key,0,false); //moves the player
});

/***destructuring assignment in the parameter 
 * 
 * Here is the syntax for using the destructuring assignment in the parameter list of the
 *  arrow function:
 * Example Code
        * btn.addEventListener('click', ({ target }) => {
        * console.log(target);
        * });
 * 
 */