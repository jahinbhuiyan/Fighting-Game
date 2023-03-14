export default class Sprite {
    

    constructor(canvas, context, {position, imageSrc, scale = 1, framesMax = 1, offset = {x:0, y: 0}}) {
        this.canvas = canvas; // creating the frame
        this.context = context; // this is where we attatch our programatic logic
        this.position = position;  // position of character. Contains x, y
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.framesMax = framesMax
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 15
        this.offset = offset
        
        this.width = 50;  // width of my character box. Incrases widht towards right
        this.height = 150; /// height of my character box. Increases height towards bottom
         
    }

    draw(){
        this.context.drawImage(
            this.image,
            this.framesCurrent* (this.image.width /this.framesMax),
            0,
            this.image.width/ this.framesMax,
            this.image.height,
            
            this.position.x - this.offset.x, 
            this.position.y - this.offset.y, 
            (this.image.width / this.framesMax) * this.scale, 
            this.image.height * this.scale
            )}

    update(){
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
    }

    
}

//starting player sprite



//The update() method is responsible for updating the state of the sprite and drawing it on the canvas.

//The first thing that the method does is call the draw() method, which draws the current frame of the sprite on the canvas.

//After drawing the sprite, the method updates the number of frames that 
//have elapsed since the last frame change, by incrementing the framesElapsed property.

//Then, it checks whether the framesElapsed property is a multiple of the framesHold property. 
//If it is, it means that it's time to change to the next frame.
// The framesHold property determines how many frames should be displayed before switching to the next frame in the sprite animation.

//The method checks if the framesCurrent property is less than framesMax - 1, 
//which means that there are more frames to show. If there are, the method increments the framesCurrent property by 1 to move to the next frame.

//If the framesCurrent property is already equal to framesMax - 1, 
//it means that the sprite has reached the last frame. In this case, the method sets the framesCurrent property 
//back to 0 to start the animation over again.

//Overall, the update() method updates the state of the sprite, including its frame animation, and redraws it on the canvas.