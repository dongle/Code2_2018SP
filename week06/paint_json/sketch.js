let paintmarks = [];
let input;

function setup() {
  createCanvas(800, 500);

  createButton('save')
  .position(10, 10)
  .mousePressed(savePaint);

  input = createFileInput(loadPaint);
  input.position(10, 100);
}

function draw() {
  background(255);
  for (paintmark of paintmarks) {
    paintmark.draw();
  }
}

class PaintMark {
  constructor(position) {
    this.position = position;
  }

  draw() {
    noStroke();
    fill(0, 0, 0, 64);
    ellipse(this.position.x, this.position.y, 10, 10);
  }
}

function loadPaint(file) {
  if (file.subtype === 'json') {
    paintmark_positions = loadJSON(file.data, parsePaintJSON, errorLoadJSON );
  }
}

function parsePaintJSON(data) {
  for (var property in paintmark_positions) {
    if (paintmark_positions.hasOwnProperty(property)) {
      let position = paintmark_positions[property];
      paintmarks.push(new PaintMark(createVector(position.x, position.y)));
    }
  }
}

function errorLoadJSON(error) {
  console.log(error);
}

function savePaint() {
  paintmark_positions = [];
  for (paintmark of paintmarks) {
    paintmark_positions.push({ x: paintmark.position.x, y: paintmark.position.y });
  }
  saveJSON(paintmark_positions, 'paint.json');
}

function mouseDragged() {
  paintmarks.push(new PaintMark(createVector(mouseX, mouseY)));
}
