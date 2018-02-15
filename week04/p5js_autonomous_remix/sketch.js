// Based on Daniel Schiffman's
// "Nature of Code"
// Ch. 06 – Autonomous Agents
// http://natureofcode.com/book/chapter-6-autonomous-agents/

let vehicles = [];

function setup() {
  createCanvas(800, 800);

  let numVehicles = 15;
  for (let i = 0; i < numVehicles; i++) {
    v = new Vehicle(createVector(random(0, width), random(0,height)));
    // we can play with maxSpeed and color to start
    v.color = color(random(0, 255), random(0, 255), random(0, 255));
    v.maxSpeed = random(1, 8);
    vehicles.push(v);
  }
}

function draw() {
  background(255);

  // draw circle at mouse position
  fill(200);
  stroke(0);
  strokeWeight(2);
  ellipse(mouseX, mouseY, 48, 48);

  // update and display vehicle
  for (let v of vehicles) {
    v.seek(createVector(mouseX, mouseY));
    v.update();
    v.display();
  }
}

// define vehicle class
class Vehicle {
  constructor(position) {
    // this is where we define our properties
    this.position = position;
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    // r is our size
    this.r = 6;
    this.color = color(255, 0, 0);

    this.maxSpeed = 4;
  }

  // seek target
  seek(target) {
      // note that this.position is a vector
      // note that target is a vector
      // find the desired vector of travel
      // by subtracting position from target
      let desired = target.sub(this.position);

      desired.setMag(this.maxSpeed);

      // find the 'steering' vector
      let steer = desired.sub(this.velocity);

      this.applyForce(steer);
  }

  // applyForce
  // this is how we move the car in a given direction
  // with a given magnitude (vector)
  applyForce(force) {
    this.acceleration.add(force);
    // note that we can do more physics simulation here
    // eg give the car mass and calculate the acceleration
    // delta as A = F / M
  }

  // update
  // "run simulation"
  // update properties based on changes since last update
  update() {
    // update velocity
    this.velocity.add(this.acceleration);
    // update position
    this.position.add(this.velocity);

    // reset acceleration
    this.acceleration.mult(0);
  }

  // display
  display() {
    // draw a triangle rotated in the direction of velocity

    // get the angle from velocity
    let theta = this.velocity.heading() + HALF_PI;

    // set drawing properties
    fill(this.color);
    stroke(0);
    strokeWeight(1);

    // move center of the canvas to the vehicle's position
    translate(this.position.x, this.position.y);
    // rotate the canvas to the heading we calculated above
    rotate(theta);

    // draw the vehicle shape
    // can also use triangle
    beginShape();
    vertex(0, -this.r*2);
    vertex(-this.r, this.r*2);
    vertex(this.r, this.r*2);
    endShape(CLOSE);

    // end transforms
    resetMatrix();
  }
}
