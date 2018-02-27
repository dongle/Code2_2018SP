let paintmarks = [];
let loadButton;

function setup() {
  createCanvas(400, 500);

  createButton('save')
  .position(10, 10)
  .mousePressed(savePaint);

  loadButton = createFileInput(loadPaint);
  loadButton.position(width-100, 10);
}

function draw() {
  background(255);
  for (paintmark of paintmarks) {
    paintmark.display();
  }
}

function mouseDragged() {
  paintmarks.push(new PaintMark(createVector(mouseX, mouseY)));
}

function savePaint() {
  // console.log(paintmarks[0].toJSON());

  let paintmark_positions = [];
  for (paintmark of paintmarks) {
    paintmark_positions.push(paintmark.toJSON());
  }
  saveJSON(paintmark_positions, 'paint.json');
}

function loadPaint(file) {
  // console.log(file);
  if (file.subtype === 'json') {
    loadJSON(file.data, parsePaintJSON, errorLoadJSON);
  }
}

function parsePaintJSON(data) {
  for (var property in data) {
    let position = data[property];
    // console.log(position);
    paintmarks.push(new PaintMark(createVector(position.x, position.y)));
  }
}

function errorLoadJSON(error) {
  console.log(error);
}

class PaintMark {
  constructor(position) {
    this.position = position;
  }

  display() {
    noStroke();
    fill(0, 0, 0, 64);
    ellipse(this.position.x, this.position.y, 10, 10);
  }

  toJSON() {
    return { "x": this.position.x, "y": this.position.y };
  }
}
