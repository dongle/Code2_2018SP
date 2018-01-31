class FireworkParticle {
  color fireworkColor;
  PVector position;
  PVector velocity;
  PVector acceleration;
  float alpha;
  int size;
  
  FireworkParticle(PVector position, color fireworkColor) {
    reset(position, fireworkColor);
  }
  
  void reset(PVector position, color fireworkColor) {
    this.position = new PVector(position.x, position.y);
    this.fireworkColor = fireworkColor;
    
    this.velocity = new PVector(random(-1.2, 1.2), random(-1, 1));
    this.acceleration = new PVector(0, random(0, 0.04));
    
    this.size = 5;
    this.alpha = 255;
  }
  
  void update() {
    velocity.add(acceleration);
    position.add(velocity);
    
    alpha--;
  }
  
  void draw() {
    noStroke();
    fill(fireworkColor, alpha);
    ellipse(position.x, position.y, size, size);
  }
}