var myFont;

function preload() {
  myFont = loadFont('assets/LeagueGothic-Regular.otf');
}

function setup() {
  createCanvas(800,800);

}

function draw() {
  background(0);
  fill(255).noStroke();
  textFont(myFont);
  text('Look', 10, 20);
}
