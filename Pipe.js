function Pipe() {
  this.top = 20;
  this.bottom = height-20;
  this.x = width;
  this.w = 35;
  this.gapStart = random(this.top,this.bottom);
  this.gapLength = 200;
  this.speed = 2;
 
  this.show = function() {
    fill(255);
    if(this.higlight){
      fill("red");
    }
    image(TopPipeIMG,this.x, 0, this.w, this.gapStart);
    image(BottomPipeIMG,this.x,this.gapStart + this.gapLength, this.w,height);
  }
  this.update = function() {
    this.x -= this.speed;
  }
  this.offscreen = function() {
    if (this.x < this.w) {
      return true;
    } else {
      return false;
    }
  }
  this.hit = function(bird) {
    if (bird.y < this.gapStart || bird.y > this.gapStart + this.gapLength) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        return true; 
      }
    } else {
      return false;
    }
  }
  
}