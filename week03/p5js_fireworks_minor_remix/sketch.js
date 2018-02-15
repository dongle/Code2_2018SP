let fireworkArray = [];

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  blendMode(HARD_LIGHT);

  let numFireworks = 500;
  for (let i = 0; i < numFireworks; i++) {
    fireworkArray.push(new FireworkParticle());
  }
  fireworksReset();
}

let fireworksReset = function() {
  // iterate through fireworkArray and tell each FireworkParticle to reset at the defined
  // position and randomColor
  for (let i = 0; i < fireworkArray.length; i++) {
    let randomColor = color(random(360), 70, 80);
    let position = createVector(random(0.33*width, 0.66*width), random(0.33*height, 0.66*height));
    fireworkArray[i].reset(position, randomColor);
    fireworkArray[i].doesJitter = true;
  }
}

function draw() {
  background(0);
  for (let i = 0; i < fireworkArray.length; i++) {
    fireworkArray[i].update();
    fireworkArray[i].display();
  }
}

function FireworkParticle() {
  this.fireworkColor;
  this.fireworkSize;
  this.position;
  this.velocity;
  this.acceleration;
  this.doesJitter = true;

  // this is how we declare methods in js
  // everything is an object; we just bind a function
  // to a property of our class
  this.reset = function(position, fireworkColor) {
    this.position = createVector(position.x, position.y);
    this.fireworkColor = fireworkColor;

    this.velocity = createVector(random(-1.2, 1.2), random(-1, 1));
    this.acceleration = createVector(0, random(0, 0.04));

    this.fireworkSize = 5;
  }

  this.update = function() {

    if (this.doesJitter === true) {
      this.position.add(createVector(random(-2, 2), random(-2, 2)));
    } else {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
    }
  }

  this.display = function() {
    noStroke();
    fill(this.fireworkColor);
    ellipse(this.position.x, this.position.y, this.fireworkSize, this.fireworkSize);
  }
}
