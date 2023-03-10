
const gravity = 0.2;

export default class Sprite {
    

    // add canvas and context as arguments for constructor as they were created in a different class file//

    constructor(canvas, context, {position, velocity}) {
        this.canvas = canvas;
        this.context = context;
        this.position = position;
        this.velocity = velocity;
        this.height = 150; /// assigned ranomd height
    }

    draw(){

        // we defined context in DOMContentLoaded in index.js
        // hence context will not be available in sprite.js /  sprite class;
        // that's why we have to do this.context instead

        this.context.fillStyle = "red";
        this.context.fillRect(this.position.x, this.position.y, 50, this.height);
    }

    update(){
        this.draw();

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if(this.position.y + this.height + this.velocity.y >= this.canvas.height){
            this.velocity.y = 0; //stopping movement when the user chareacter is >= canvas height(boundary wall)
        } else{
            this.velocity.y += gravity;  // adding gravity prevents the characters from leaving the screen
        }
    }
}