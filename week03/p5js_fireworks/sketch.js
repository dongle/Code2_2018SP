let fireworkArray = [];

function setup() {
  createCanvas(800, 800);

  let numFireworks = 500;
  let position = createVector(random(width/3.0, (2.0/3.0) * width), random(0, height/2));
  let randomColor = color(random(255), random(255), random(255));

  for (let i = 0; i < numFireworks; i++) {
    let firework = new FireworkParticle();
    firework.reset(position, randomColor);
    fireworkArray.push(firework);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < fireworkArray.length; i++) {
    let firework = fireworkArray[i];
    firework.update();
    firework.display();
  }
}

function FireworkParticle() {
  this.fireworkColor;
  this.position;
  this.velocity;
  this.acceleration;
  this.alpha;
  this.fireworkSize;

  this.reset = function(position, fireworkColor) {
    this.position = createVector(position.x, position.y);
    this.fireworkColor = fireworkColor;

    this.velocity = createVector(random(-1.2, 1.2), random(-1, 1));
    this.acceleration = createVector(0, random(0, 0.04));

    this.fireworkSize = 5;
  }

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  }

  this.display = function() {
    noStroke();
    fill(this.fireworkColor);
    ellipse(this.position.x, this.position.y, this.fireworkSize, this.fireworkSize);
  }
}
