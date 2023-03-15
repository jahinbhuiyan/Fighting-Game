import Sprite from "./sprite";

const gravity = 0.7;

export default class Character extends Sprite {
    

    // add canvas and context as arguments for constructor as they were created in a different class file//

    constructor(
        canvas,
        context,
        {position, 
        velocity, 
        color, 
        // offset, 
        imageSrc, 
        scale = 1, 
        framesMax = 1, 
        offset = {x:0, y:0},
        sprites
    
    }) {

            super(
                canvas,
                context,{
                position,
                imageSrc,
                scale,
                framesMax,
                offset
            })

        this.canvas = canvas; // creating the frame
        this.context = context; // this is where we attatch our programatic logic
        // this.position = position;  // position of character. Contains x, y
        this.velocity = velocity; // velocity of character. Contains x, y. Only use is to be added to position(change position)
        this.color = color;
        
        this.width = 50;  // width of my character box. Incrases widht towards right
        this.height = 150; /// height of my character box. Increases height towards bottom

        this.attackRect ={ 
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset,
            width: 100,
            height: 50
        }
        this.attacking;
        this.health = 100;
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 5
        this.sprites = sprites

        for(const sprite in this.sprites){
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }
        
    }


    update(){
        // this is not the update for the entire fram. this just updates the specific character.
        // update gets called every unit of timein movement();
        this.draw();
        
        this.framesElapsed++

        if(this.framesElapsed % this.framesHold === 0){
        
            if(this.framesCurrent < this.framesMax - 1){
                this.framesCurrent++
            } 
            else{
                this.framesCurrent = 0
            }
    }
        
        this.attackRect.position.x = this.position.x + this.attackRect.offset.x;
        this.attackRect.position.y = this.position.y
        
        
        this.position.x += this.velocity.x;
        // if character position becomes < 0, this means it's in the ceiling. stop code from reducing the value 
        //of y anymore
        if(this.position.y < 0){ 

            this.velocity.y = gravity; // gravity is what brings it back down from the ceiling
        }
        this.position.y += this.velocity.y;
        
        
        if(this.position.y + this.height + this.velocity.y >= this.canvas.height){
            this.velocity.y = 0; //stopping movement when the user chareacter is >= canvas height(boundary wall)
         } 
         else{
            this.velocity.y += gravity;  // adding gravity prevents the characters from leaving the screen
        }
        
    }

    attack(){
        this.switchSprites('attack1')
        this.attacking = true;
        setTimeout(() => {
            this.attacking = false;
        }, 1000)
    }

    switchSprites(sprite){
        if(this.image === this.sprites.attack1.image && 
           this.framesCurrent < this.sprites.attack1.framesMax -1) return 
        switch(sprite){
            case 'idle':
                if(this.image !== this.sprites.idle.image){
                this.image = this.sprites.idle.image
                this.framesMax = this.sprites.idle.framesMax
                this.framesCurrent = 0
            }
            break;
            case 'run':
                if(this.image !== this.sprites.run.image){
                    this.image = this.sprites.run.image
                    this.framesMax = this.sprites.run.framesMax
                    this.framesCurrent = 0
                }
            break;
            case 'jump':
                if(this.image !== this.sprites.jump.image){
                this.image = this.sprites.jump.image
                this.framesMax = this.sprites.jump.framesMax
                this.framesCurrent = 0
            }
            break;
            case 'fall':
                if(this.image !== this.sprites.fall.image){
                this.image = this.sprites.fall.image
                this.framesMax = this.sprites.fall.framesMax
                this.framesCurrent = 0
            }
            break;
            case 'attack1':
                if(this.image !== this.sprites.attack1.image){
                this.image = this.sprites.attack1.image
                this.framesMax = this.sprites.attack1.framesMax
                this.framesCurrent = 0
            }
            break;
        }
    }
    
}



