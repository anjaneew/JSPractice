//Platformer Game

const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");
const  startScreen  = document.querySelector(".start-screen");
const  checkpointScreen = document.querySelector(".checkpoint-screen");

const checkpointMessage = document.querySelector(".checkpoint-screen > p");
/**child combinator >
targets the paragraph element inside the .checkpoint-screen element. */

// const  = document.getElementById("");
// const  = document.getElementById("");

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
canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 0.5;
let isCheckpointCollisionDetectionActive = true;

const proportionalSize = size => {
    return innerHeight < 500 ? Math.ceil((size/500)* innerHeight): size ;
};

class Player{
    
    constructor(){
        this.position = {
            x: proportionalSize(10), 
            y: proportionalSize(400)
        };

        /**You need to use the proportionalSize function here to make sure that the player's position is always proportional to the screen size. This is important because you want the player to be able to move around the screen regardless of the screen size. */
        
        this.velocity = {x: 0, y: 0}
        //player's speed in x & y directions

        this.width = proportionalSize(40);
        this.height = proportionalSize(40);
    }

    draw(){
        ctx.fillStyle = "#99c9ff";

        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}