import Character from "./scripts/character"
import Sprite from "./scripts/sprite"


document.addEventListener("DOMContentLoaded", () => {
    
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');  // c is context

    canvas.width = 1024;
    canvas.height = 576;

    context.fillRect(0, 0, canvas.width, canvas.height)

    // creatae a new player

    const player = new Character("player", canvas,context, {    // creating the position and velocity as a key: value pair
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
        imageSrc: 'assets/Martial/Sprites/Idle.png',
        framesMax: 8,
        scale: 2.5,
        offset: {
            x: 215,
            y: 157
        },
        sprites: {
            idle:{
                imageSrc: 'assets/Martial/Sprites/Idle.png',
                framesMax: 8
            },
            run:{
                imageSrc: 'assets/Martial/Sprites/Run.png',
                framesMax: 8,
                //image: new Image()
            },
            jump:{
                imageSrc: 'assets/Martial/Sprites/Jump.png',
                framesMax: 2,
                //image: new Image()
            },
            fall:{
                imageSrc: 'assets/Martial/Sprites/Fall.png',
                framesMax: 2,
                image: new Image()
            },
            attack1:{
                imageSrc: 'assets/Martial/Sprites/Attack1.png',
                framesMax: 6,
                //image: new Image()
            },
            takeHit:{
                imageSrc: 'assets/Martial/Sprites/TakeHit.png',
                framesMax: 4,
                //image: new Image()
            },
            death:{
                imageSrc: 'assets/Martial/Sprites/Death.png',
                framesMax: 6,
                //image: new Image()
            }
        },
        attackBox: {
            offset:{
                x: 0,
                y: 0
            },
            width: 200,
            height: 50
        }
    });
    console.log(player)

    

    
    
    const enemy = new Character("enemy", canvas, context, {
        position:{
            x: 700, 
            y: 150
        },
        velocity:{
            x: 0,
            y:0
        },
        color: 'blue',
        offset:{
            x:0,
            y:0
        },
        imageSrc: 'assets/King/Sprites/Idle.png',               /////////////
        framesMax: 8,
        scale: 2.5,
        offset: {
            x: 215,
            y: 110
        },
        sprites: {
            idle:{
                imageSrc: 'assets/King/Sprites/Idle.png',
                framesMax: 8
            },
            run:{
                imageSrc: 'assets/King/Sprites/Run.png',
                framesMax: 8,
                image: new Image()
            },
            jump:{
                imageSrc: 'assets/King/Sprites/Jump.png',
                framesMax: 2,
                image: new Image()
            },
            fall:{
                imageSrc: 'assets/King/Sprites/Fall.png',
                framesMax: 2,
                image: new Image()
            },
            attack1:{
                imageSrc: 'assets/King/Sprites/Attack1.png',
                framesMax: 6,
                image: new Image()
            },
            takeHit:{
                imageSrc: 'assets/King/Sprites/TakeHit.png',
                framesMax: 4,
                image: new Image()
            },
            death:{
                imageSrc: 'assets/King/Sprites/Death.png',
                framesMax: 6,
                image: new Image()
            }

        },
        
        attackBox: {
            offset:{
                x: -200,
                y: 0
            },
            width: 200,
            height: 50
        }
        
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
       console.log(
        player1.attackRect.position.x + player1.attackRect.width >= player2.attackRect.position.x
            && 
            player1.attackRect.position.x <= player2.attackRect.position.x + player2.attackRect.width
            && 
            player1.attackRect.position.y + player1.attackRect.height >= player2.attackRect.position.y
            &&
            player1.attackRect.position.y <= player2.attackRect.position.y + player2.attackRect.height
            
       )
        
        return(
            player1.attackRect.position.x + player1.attackRect.width >= player2.attackRect.position.x
            && 
            player1.attackRect.position.x <= player2.attackRect.position.x + player2.attackRect.width
            && 
            player1.attackRect.position.y + player1.attackRect.height >= player2.attackRect.position.y
            &&
            player1.attackRect.position.y <= player2.attackRect.position.y + player2.attackRect.height
            
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

        

        if(enemy.health <= 0){
            enemy.velocity.x = 0
            console.log("enemy dead ")
            enemy.switchSprites('death')
            enemy.imageSrc =  'assets/King/Sprites/Death.png'
            enemy.image = enemy.sprites.death.image
            enemy.framesMax = enemy.sprites.death.framesMax
            enemy.framesCurrent = 0
        }
        else{
            if(enemy.velocity.x != 0){
                enemy.switchSprites('run')
            }else{

                enemy.switchSprites('idle')
            }

        }

        
        
        player.velocity.x = 0;

        if(player.health <= 0){
            console.log("player dead" )
            player.switchSprites('death')
            enemy.switchSprites('idle')
        }
        else{
            if(keys.a.pressed ){
                player.velocity.x = -5
                player.switchSprites('run')
            }else if(keys.d.pressed ){
                player.velocity.x = 5
                player.switchSprites('run')
            }else if(keys.w.pressed ){
                // if(player.position.y > 0){
                    player.velocity.y = -10
                // }
            }
            else{
                
                player.switchSprites('idle')
            }
        }


        

        if(player.velocity.y < 0){
            player.switchSprites('jump')
        } else if(player.velocity.y > 0){
            player.switchSprites('fall')
        }

        //collision detection
        if( attackCollision(
            player,
            enemy
        )
            &&
            player.attacking){
                // enemy.switchSprites('takeHit')
                // enemy.health -= 5;
                enemy.takeHit()
                
                console.log("enemyHP ",enemy.health)
                player.attacking = false;
                // document.querySelector('#enemyHealth').style.width = enemy.health + '%';
                gsap.to('#enemyHealth', {
                    width: enemy.health + '%'
                })
    
        }

        if( attackCollision(
            player,
            enemy
        )
            &&
            enemy.attacking){
                // player.switchSprites('takeHit')
                // player.health -= 5;
                player.takeHit()
                enemy.attacking = false;
                console.log("playerHP ", player.health)
                // player.health -= 1; 
                // document.querySelector('#playerHealth').style.width = player.health + '%';
                gsap.to('#playerHealth', {
                    width: player.health + '%'
                })
        }

        // end game logic
        if(enemy.health <= 0 || player.health <=0 ){
            endgameFunc({player, enemy, timerId});
        }
    
    }
    movement();

    setInterval(()=>{
            
            
        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
          }
          
          const rndInt = randomIntFromInterval(-1, 1)
          console.log(rndInt)
        if(enemy.health > 0){
            enemy.velocity.x =  rndInt
            enemy.attack()
        }else{
            enemy.velocity.x = 0
        }
        
    },1000)


    window.addEventListener('keydown', (event) =>{   //keydown is a key that allows for recognition of keyboard inputs on the console
        switch(event.key){
            case 'd': 
                keys.d.pressed = true // when i press d movement function picks it up bcs it is running 
                // every unit of time. 
                // player.image = player.sprites.run.image
            break
            case 'a': 
                keys.a.pressed = true
                // player.image = player.sprites.run.image
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

// randomize attakcs ??????
// invert image   -----------DONE
// negate attack range (make enemy attack negative)  ----- DONE
// enemy sprite edit ----- DONE
// build AI ???????




