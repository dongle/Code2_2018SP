let sceneStates = Object.freeze({
  INTRO: 0,
  PRESSED: 1
});

let currentSceneState = sceneStates.INTRO;

function setup() {
  createCanvas(800,800);
}

function draw() {
  switch(currentSceneState) {
    case sceneStates.INTRO:
      drawIntro();
      break;
    case sceneStates.PRESSED:
      drawPressed();
      break;
  }
}

function keyPressed() {
  currentSceneState = sceneStates.PRESSED;
}

function drawIntro() {
  background(0);
  fill(255);
  noStroke();
  textSize(50);
  text("Press a key", 50, 50);
}

function drawPressed() {
  background(255);
  fill(0);
  noStroke();
  text("You pressed a key", 50, 50);
}
