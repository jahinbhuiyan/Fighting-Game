import Character from "./scripts/character"


document.addEventListener("DOMContentLoaded", () => {
    
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');  // c is context

    canvas.width = 1024;
    canvas.height = 576;

    context.fillRect(0, 0, canvas.width, canvas.height)

    // creatae a new player



    const player = new Character(canvas,context, {    // creating the position and velocity as a key: value pair
        position:{
            x: 0, 
            y: 0
        },
        velocity:{
            x: 0,
            y:0
        },
        color: 'green',

        offset:{
            x:0,
            y:0
        }
    });
    console.log(player)

    

    
    
    const enemy = new Character(canvas, context, {
        position:{
            x: 400, 
            y: 100
        },
        velocity:{
            x: 0,
            y:0
        },
        color: 'blue',
        offset:{
            x:-50,
            y:0
        }
        
    });

    const keys = {
        a: {
            pressed: false
        },
        d: {
            pressed: false
        },
        w:{
            pressed: false
        }
    }
    // let lastKey;

    function attackCollision(player1, player2){
        return(
            player1.attackRect.position.x + player1.attackRect.width >= player2.position.x
            && 
            player1.attackRect.position.x <= player2.position.x + player2.width
            && 
            player1.attackRect.position.y + player1.attackRect.height >= player2.position.y
            &&
            player1.attackRect.position.y <= player2.position.y + player2.height
        )
    }
    
    function movement(){
        context.fillStyle = "black";  // this is done so that when we call movement the color of the canvas doesn't turn red bcs of 
        // this.context.fillStyle = "red" in draw() method
        context.fillRect(0,0, canvas.width, canvas.height)
        window.requestAnimationFrame(movement) // this calls movement function on an endless loop
        player.update();
        enemy.update();
        
        
        // player.velocity.x = 0;
        // if(keys.a.pressed && lastKey === 'a'){
        //     player.velocity.x = -5
        // }else if(keys.d.pressed && lastKey === 'd'){
        //     player.velocity.x = 5
        // }else if(keys.w.pressed && lastKey === 'w'){
        //     player.velocity.y = -15
        // }

        //collision detection
        if( attackCollision(
            player,
            enemy
        )
            &&
            player.attacking){
            console.log('go');
            player.attacking = false;
        }
    
    }
    movement();


    window.addEventListener('keydown', (event) =>{   //keydown is a key that allows for recognition of keyboard inputs on the console
        switch(event.key){
            case 'd': 
                keys.d.pressed = true
                player.position.x += 15;
                // lastKey = 'd';
            break
            case 'a': 
                keys.a.pressed = true
                player.position.x += -15;
                // lastKey = 'a';
            break
            case 'w':
                keys.w.pressed = true
                player.position.y += -100;
                // lastKey = 'w'; 
            break
            case 'k':
                player.attack(); 
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
            case 'w':
                keys.w.pressed = false
        }
        console.log(event.key);
    })

})




