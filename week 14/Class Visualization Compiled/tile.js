class Tile {
  constructor(xPosition, yPosition, tileSize) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.tileSize = tileSize;
    this.processData();
  }

  processData() {

  }

  update() {
  }

  display() {
    // let's ensure we're not transforming on top of
    // existing transforms
    resetMatrix();

    // let's translate to the tile's starting Position
    // so we can issue draw calls in our subclass as if
    // drawing from the origin
    translate(this.xPosition, this.yPosition);
  }
}
