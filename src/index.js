import Character from "./scripts/character"
import Sprite from "./scripts/sprite"


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
            y: 150 // so that we start at the bottom of the frame
        },
        velocity:{
            x: 0,
            y:0
        },
        color: 'green',

        offset:{
            x:0,
            y:0
        },
        imageSrc: 'assets/Knight/Sprites/Idle.png',
        framesMax: 11,
        scale: 2.5,
        offset: {
            x: 160,
            y: 140
        },
        sprites: {
            idle: {
                imageSrc: 'assets/Knight/Sprites/Idle.png',
                framesMax: 11
            },
            run: {
                imageSrc: 'assets/Knight/Sprites/Run.png',
                framesMax: 8,
                image: new Image()
            },
            jump: {
                imageSrc: 'assets/Knight/Sprites/Jump.png',
                framesMax: 3
            }
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
        },
        imageSrc: 'assets/Knight/Sprites/Idle.png'
        
    });

    const background = new Sprite(canvas, context, {
        position:{
            x: 0,
            y: 0
        },
        imageSrc: 'assets/game_background_3/background.png'
        
    })

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

    function endgameFunc({player, enemy, timerId}){
        
        clearTimeout(timerId);

        document.querySelector('#textresult').style.display = 'flex'; 
        if(player.health === enemy.health){
            document.querySelector('#textresult').innerHTML = 'Tie'
            document.querySelector('#textresult').style.display = 'flex'; 
        }else if(player.health > enemy.health){
            document.querySelector('#textresult').innerHTML = 'PLAYER 1 WINS'
            document.querySelector('#textresult').style.display = 'flex'; 
        }else if(enemy.health > player.health){
            document.querySelector('#textresult').innerHTML = 'PLAYER 2 WINS'
            document.querySelector('#textresult').style.display = 'flex'; 
        }
    }
    
    let timer = 45;
    let timerId;
    function countdown()  {
        if(timer > 0){
        timerId = setTimeout(countdown, 1000)   // set interval allows multiple execution of code in set interval; setTimeout allows one execution
            timer -- ;
            document.querySelector("#timer").innerHTML = timer;
        }
        if(timer === 0){
            document.querySelector('#textresult').style.display = 'flex'; 
            endgameFunc({player, enemy});
        }   
    }

    countdown();

    function movement(){
        context.fillStyle = "black";  // this is done so that when we call movement the color of the canvas doesn't turn red bcs of 
        // this.context.fillStyle = "red" in draw() method
        context.fillRect(0,0, canvas.width, canvas.height)
        window.requestAnimationFrame(movement) // this calls movement function on an endless loop
        background.update();
        player.update();
        enemy.update();
        
        
        player.velocity.x = 0;

        player.image = player.sprites.idle.image
        
        if(keys.a.pressed ){
            player.velocity.x = -5
            player.image = player.sprites.run.image

        }else if(keys.d.pressed ){
            player.velocity.x = 5
            player.image = player.sprites.run.image
        }else if(keys.w.pressed ){
            // if(player.position.y > 0){
                player.velocity.y = -10
                player.image = player.sprites.jump.image
            // }
        }

        if(player.velocity.y < 0){
            player.image = player.sprites.jump.image
            player.framesMax = player.sprites.jump.framesMax
        }

        //collision detection
        if( attackCollision(
            player,
            enemy
        )
            &&
            player.attacking){
                player.attacking = false;
                enemy.health -= 5;
                document.querySelector('#enemyHealth').style.width = enemy.health + '%';
        }

        if( attackCollision(
            enemy,
            player
        )
            &&
            enemy.attacking){
                enemy.attacking = false;
                player.health -= 5;  //**************** */
                document.querySelector('#playerHealth').style.width = player.health + '%';
        }

        // end game logic
        if(enemy.health <= 0 || player.health <=0 ){
            endgameFunc({player, enemy, timerId});
        }
    
    }
    movement();


    window.addEventListener('keydown', (event) =>{   //keydown is a key that allows for recognition of keyboard inputs on the console
        switch(event.key){
            case 'd': 
                keys.d.pressed = true // when i press d movement function picks it up bcs it is running 
                // every unit of time. 
            break
            case 'a': 
                keys.a.pressed = true
            break
            case 'w':
                keys.w.pressed = true
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
                keys.d.pressed = false // when i release d, movement functuin picks it up bcs it's running
                // every unit of time
            break
            case 'a': 
                keys.a.pressed = false
            break
            case 'w':
                keys.w.pressed = false
                console.log("released",event.key);
        }
        
    })

})




