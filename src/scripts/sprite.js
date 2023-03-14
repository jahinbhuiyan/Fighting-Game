export default class Sprite {
    

    constructor(canvas, context, {position, imageSrc}) {
        this.canvas = canvas; // creating the frame
        this.context = context; // this is where we attatch our programatic logic
        this.position = position;  // position of character. Contains x, y
        this.image = new Image()
        this.image.src = imageSrc
        
        this.width = 50;  // width of my character box. Incrases widht towards right
        this.height = 150; /// height of my character box. Increases height towards bottom
         
    }

    draw(){
        this.context.drawImage(this.image, this.position.x, this.position.y)
    }

    update(){
        this.draw();
    }

    
}

