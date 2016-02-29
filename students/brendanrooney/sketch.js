var movers = [];

function setup() {
  createCanvas(800,500);
  noCursor();
  for (var i = 0; i <10; i++){
    movers[i] = new Mover();
  }
};

function draw() {

  background(255, 237, 255, 240);
  rectMode(CENTER);

  for (var i = 0; i < movers.length; i++){
  movers[i].update();
  movers[i].display();
}
  fill(250,234,200);
  rect(mouseX, mouseY + 50, 10, 50);
  fill(255, 255, 0);
  rect(mouseX, mouseY, 40,50);
};

var Mover = function(){

  this.position = createVector(random(width), random(height));
  this.velocity = createVector();
  this.acceleration = createVector();
  this.topspeed = 1.5;

  this.update = function(){
    var mouse = createVector(mouseX, mouseY);
    this.acceleration = p5.Vector.sub(mouse,this.position);
    if (mouseIsPressed == true){
    this.acceleration.setMag(-2);
    } else {
    this.acceleration.setMag(random(0.01));
    }

    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);

  this.display = function(){

    strokeWeight(1);
    fill(255);
    ellipse(this.position.x - 10, this.position.y, 15, 15);
    ellipse(this.position.x + 10, this.position.y, 15, 15);
    strokeWeight(3);
    fill(50, 250);
    ellipse(this.position.x, this.position.y, 10 ,10);
    }
  }
};
