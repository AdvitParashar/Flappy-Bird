function Bird(){
  this.x = 60;
  this.y = height/2;
  this.velocity = 0;
  this.gravity = 0.5;
  this.lift = -10;
  
  this.show = function(){
    //fill(255);
    //ellipse(this.x,this.y,30,30);
    image(birdIdle,this.x,this.y,30,30); 
  }
  this.update = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;


    if(this.y > 355){
      this.y = 355;
      this.velocity = 0;
    }
    if(this.y < 0){
      this.y = 355;
      this.velocity = 0;
    }
  }
  this.fly = function(){
    this.velocity += this.lift;
  }
}

