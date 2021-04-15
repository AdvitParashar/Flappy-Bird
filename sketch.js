var bird;
var birdIdle;
var birdFly;
var pipe = [];
var TopPipeIMG;
var BottomPipeIMG;
var pipeHit = 0;
var pipeClear = 0;
var score = 0; 
var ground;
var flap;

function preload() {
  birdIdle = loadImage("flappy_bird_1.png");
//birdFly = loadAnimatio("flappy_bird_1","flappy_bird_2","flappy_bird_3"); 
 TopPipeIMG = loadImage("pipe_2.png");
 BottomPipeIMG = loadImage("pipe_1.png");
 ground = loadImage("ground.png");
 flap =  loadSound("flap.wav")
}

function setup() {
  createCanvas(600, 400);


  bird = new Bird();  
  pipe.push(new Pipe());
  //pipe.show();
}

function draw() {
  background("lightblue"); 
  textSize(20);
  text("pipes cleared:" + pipeClear,20,20);
  textSize(20);
  text("pipes hit:" + Math.round(pipeHit/13),20,40);
  textSize(20);
  text("score:" + score,20,60);
  image(ground,0,385);
  

  if(frameCount % 80 === 0){
    pipe.push( new Pipe() );
  }
  
  for(var i = pipe.length-1; i>=0; i--){
  pipe[i].show();
  pipe[i].update();
    if(pipe[i].hit(bird) == true){
      pipeHit++
    }  
    if(pipe[i].offscreen()){
      pipe.splice(i,1);
      pipeClear++
    }

  }
  bird.show();
  bird.update();
 score = score + Math.round(getFrameRate()/170);

 
}

function keyPressed(){
  if(keyCode == 32){
    bird.fly();
    flap.play();
  }
}