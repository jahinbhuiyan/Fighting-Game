
const gravity = 0.7;

export default class Character {
    

    // add canvas and context as arguments for constructor as they were created in a different class file//

    constructor(canvas, context,{position, velocity, color, offset}) {
        this.canvas = canvas;
        this.context = context;
        this.position = position;
        this.velocity = velocity;
        this.color = color;
        
        this.width = 50;
        this.height = 150; /// assigned random height
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
        
    }

    draw(){

        // we defined context in DOMContentLoaded in index.js
        // hence context will not be available in character.js /  character class;
        // that's why we have to do this.context instead

        this.context.fillStyle = this.color;
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height);

        if(this.attacking){
        this.context.fillStyle = "blue";
        this.context.fillRect(this.attackRect.position.x, this.attackRect.position.y,
             this.attackRect.width, this.attackRect.height)
        }
    }

    update(){
        this.draw();
        this.attackRect.position.x = this.position.x + this.attackRect.offset.x;
        this.attackRect.position.y = this.position.y
        
        // this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        // this.velocity.x = 0;


        if(this.position.y + this.height + this.velocity.y >= this.canvas.height){
            this.velocity.y = 0; //stopping movement when the user chareacter is >= canvas height(boundary wall)
        } else{
            this.velocity.y += gravity;  // adding gravity prevents the characters from leaving the screen
        }
    }

    attack(){
        this.attacking = true;
        setInterval(() => {
            this.attacking = false;
        }, 1000)
    }

    
}