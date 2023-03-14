export default class Sprite {
    

    constructor(canvas, context, {position, imageSrc, scale = 1, framesMax = 1}) {
        this.canvas = canvas; // creating the frame
        this.context = context; // this is where we attatch our programatic logic
        this.position = position;  // position of character. Contains x, y
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.framesMax = framesMax
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 5
        
        this.width = 50;  // width of my character box. Incrases widht towards right
        this.height = 150; /// height of my character box. Increases height towards bottom
         
    }

    draw(){
        this.context.drawImage(
            this.image,
            this.framesCurrent* (this.image.width/ this.framesMax),
            0,
            this.image.width/ this.framesMax,
            this.image.height,
            
            this.position.x, 
            this.position.y, 
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