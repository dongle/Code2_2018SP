// variable to keep of state
// (key hasn't been pressed; key has been pressed)
// let keyHasBeenPressed = false;
// let keyHasBeenPressedAgain = false;

let sceneStates = Object.freeze({
  INTRO: 0,
  KEYPRESS: 1,
  MULTIKEYPRESS: 2
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
    case sceneStates.KEYPRESS:
      drawKeypress();
      break;
    case sceneStates.MULTIKEYPRESS:
      drawMultikeypress();
      break;
  }
}

function drawIntro() {
  // draw background
  background(0);
  // draw text
  fill(255);
  noStroke();
  textSize(50);
  text("Press a key", 50, 50);
}

function drawKeypress() {
  background(255);
  fill(0);
  noStroke();
  textSize(50);
  text("Key has been pressed", 50, 50);
}

function drawMultikeypress() {
  background(192, 192, 192);
  fill(0);
  noStroke();
  textSize(50);
  text("Key has been pressed more than once", 50, 50);
}

// handle keypresses
function keyPressed() {
  if (currentSceneState === sceneStates.INTRO) {
    currentSceneState = sceneStates.KEYPRESS;
  } else {
    currentSceneState = sceneStates.MULTIKEYPRESS;
  }
}
