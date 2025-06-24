const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

ctx.fillStyle = "green"; //sets color
ctx.fillRect(0,0, canvas.width, canvas.height) //fill 

let posX = 0, //initial position
    posY = 0, //initial position
    dx = 0, dy = 0; //velocity = speed & directions

setInterval(() => {
    ctx.fillStyle = "green";
    ctx.fillRect(0,0,canvas.width, canvas.height)
    posX += dx;
    posY += dy;

    if(posX > 550){ //x moving ➡️
       dx = 0;
       posX = 550; //if reached 500 should stop
    }

    if(posX < 0){ //x moving ⬅️
        dx = 0;
        posX = 0;
    }

    if(posY > 550){ //up
        dy = 0;
        posY = 550;
    }

    if(posY < 0){ //down
        dy = 0;
        posY = 0;
    }

            ctx.fillStyle = "black"; //objcet color
            ctx.fillRect(posX, posY, 50, 50); //object size

}, (20));


//Moving

        window.addEventListener("keydown", press001, true);

        function press001(event){
            switch(event.keyCode){
                case 37: 
                    dx = -1;
                    dy = 0;
                    break;
                case 38:
                    dx = 0;
                    dy = -1;
                    break;  

                case  39:
                    dx = 1;
                    dy = 0;
                    break;
                case 40: 
                    dx = 0;
                    dy = 1;
                    break;
                    
                case 32: 
                     dx = 0;
                     dy = 0;    
            }
        }