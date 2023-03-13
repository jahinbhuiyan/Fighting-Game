export default class Sprite {
    

    constructor(canvas, context, {position, imageSrc, scale = 1, framesMax = 1,}) {
        this.canvas = canvas; // creating the frame
        this.context = context; // this is where we attatch our programatic logic
        this.position = position;  // position of character. Contains x, y

        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.framesMax = framesMax
        this.frameCurrent = 0
        this.framesElasped = 0
        this.framesHold = 10
        
        this.width = 50;  // width of my character box. Incrases widht towards right
        this.height = 150; /// height of my character box. Increases height towards bottom
         
    }

    draw(){
        debugger
        console.log("hi")
        this.context.drawImage(
            this.image, 
            this.frameCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width/this.framesMax,
            this.image.height/this.framesMax,

            this.position.x, 
            this.position.y, 
            this.image.width * this.scale, 
            this.image.height * this.scale
            )
    }

    update() {
        debugger;
        this.draw();
        this.framesElasped ++

        if(this.framesElasped % this.framesHold === 0){

            if(this.frameCurrent < this.framesMax - 1 ){
                this.frameCurrent ++
            }else{
                this.frameCurrent = 0
            }
    }}}