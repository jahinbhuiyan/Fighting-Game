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

    const keys = {
        a: {
            pressed: false
        },
        d: {
            pressed: false
        }
    }
    let lastKey;
    
    function movement(){
        context.fillStyle = "black";  // this is done so that when we call movement the color of the canvas doesn't turn red bcs of 
        // this.context.fillStyle = "red" in draw() method
        context.fillRect(0,0, canvas.width, canvas.height)
        window.requestAnimationFrame(movement) // this calls movement function on an endless loop
        player.update();
        enemy.update();
        
        player.velocity.x = 0;
        if(keys.a.pressed && lastKey === 'a'){
            player.velocity.x = -1
        }else if(keys.d.pressed && lastKey === 'd'){
            player.velocity.x = 1
        }
    
    }
    movement();


    window.addEventListener('keydown', (event) =>{   //keydown is a key that allows for recognition of keyboard inputs on the console
        switch(event.key){
            case 'd': 
            keys.d.pressed = true
            lastKey = 'd';
            break
            case 'a': 
            keys.a.pressed = true
            lastKey = 'a';
            break
        }


        console.log(event.key);
    })

    window.addEventListener('keyup', (event) =>{   //keydown is a key that allows for recognition of keyboard inputs on the console
        switch(event.key){
            case 'd': 
            keys.d.pressed = false
            break
            case 'a': 
            keys.a.pressed = false
            break
        }

        
        console.log(event.key);
    })

})




