// Based on Daniel Schiffman's
// "Nature of Code"
// Ch. 06 – Autonomous Agents
// http://natureofcode.com/book/chapter-6-autonomous-agents/

let v;

function setup() {
  createCanvas(800, 800);
  v = new Vehicle(width/2, height/2);
}

function draw() {
  background(255);

  // get mouse mousePosition
  let mousePosition = createVector(mouseX, mouseY);

  // draw ellipse at mousePosition
  fill(200);
  stroke(0);
  strokeWeight(2);
  ellipse(mousePosition.x, mousePosition.y, 48, 48);

  // tell vehicle to seek, update, and display
  v.seek(mousePosition);
  v.update();
  v.display();

}

class Vehicle {
  constructor(width, height) {
    this.position = createVector(width, height);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);

    // (we can tweak these to make the Vehicle
    // behave differently)
    this.r = 6;
    this.maxSpeed = 4;
    this.maxForce = 0.1;
}

  seek(target) {
    // calculate a vector from the current position to the target
    let desired = target.sub(this.position);

    // scale this vector (usually down) to the maximum speed
    desired.setMag(this.maxSpeed);

    // Steering vector = desired minus velocity
    let steer = desired.sub(this.velocity);
    steer.limit(this.maxForce);

    this.applyForce(steer);
  }

  applyForce(force) {
    // we're doing this simply;
    // note we could do more physics simulation here
    // by giving the car mass
    // and calculating the acceleration delta as A = F / M
    this.acceleration.add(force);
  }

  update() {
    // update velocity
    this.velocity.add(this.acceleration);
    // limit _magnitude_ of the velocity vector
    this.velocity.limit(this.maxSpeed);
    // update position
    this.position.add(this.velocity)


    // reset acceleration
    this.acceleration.mult(0);
  }

  display() {
    // draw a triangle rotated in the direction of velocity

    // get angle from velocity
    let theta = this.velocity.heading() + HALF_PI;

    // set drawing properties
    fill(127);
    stroke(0);
    strokeWeight(1);

    // move the center of the canvas to the vehicle's position
    translate(this.position.x, this.position.y);
    // rotate canvas by the heading we calculated above
    rotate(theta);

    // begin drawing the shape
    beginShape();
    vertex(0, -this.r*2);
    vertex(-this.r, this.r*2);
    vertex(this.r, this.r*2);
    endShape(CLOSE);

    // end transforms
    resetMatrix();
  }

}
