import Sprite from "./scripts/sprite"

document.addEventListener("DOMContentLoaded", () => {
    
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');  // c is context

    canvas.width = 1024;
    canvas.height = 576;

    context.fillRect(0, 0, canvas.width, canvas.height)

    // creatae a new player



    const player = new Sprite(canvas,context, {    // creating the position and velocity as a key: value pair
        position:{
            x: 0, 
            y: 0
        },
        velocity:{
            x: 0,
            y:0
        }
    });

    

    
    
    const enemy = new Sprite(canvas, context, {
        position:{
            x: 400, 
            y: 100
        },
        velocity:{
            x: 0,
            y:0
        }
    });

    
    
    function movement(){
        context.fillStyle = "black";  // this is done so that when we call movement the color of the canvas doesn't turn red bcs of 
        // this.context.fillStyle = "red" in draw() method
        context.fillRect(0,0, canvas.width, canvas.height)
        window.requestAnimationFrame(movement) // this calls movement function on an endless loop
        player.update();
        enemy.update();
    
    }
    movement();


    window.addEventListener('keydown', (event) =>{   //keydown is a key that allows for recognition of keyboard inputs on the console
        switch(event.key){
            case 'd': 
            player.velocity.x = 1
            break
        }
        console.log(event.key);
    })

})




