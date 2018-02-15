// declare variable to hold the image
let img;

function preload() {
  img = loadImage('assets/popteamepic.jpeg');
}

function setup() {
  createCanvas(800, 800);

}

function draw() {
  background(255);

  image(img, 0, 0);
}
