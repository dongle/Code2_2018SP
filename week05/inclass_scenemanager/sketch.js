// Based on code by Bryan Ma

// BFADT Code 2 Simple State Manager

let sceneStates = Object.freeze({
  INTRO: 0,
  TUTORIAL: 1,
  GAME: 2,
  WIN: 3,
  LOSE: 4
});

let currentState = sceneStates.INTRO;

let keyOn = false;
let tutorialTimer;

let gameTimer;
let gameTimePressed;
const timeForGame = 5000;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  drawScene();
  checkTransition();
  keyOn = false;
}

function drawScene() {
  switch (currentState) {
    case sceneStates.INTRO:
      drawIntro();
      break;
    case sceneStates.TUTORIAL:
      drawTutorial();
      break;
  case sceneStates.GAME:
    drawGame();
    break;
  case sceneStates.WIN:
    drawWin();
    break;
  case sceneStates.LOSE:
    drawLose();
    break;
  }
}

function checkTransition() {
  switch(currentState) {
    case sceneStates.INTRO:
      checkIntro();
      break;
    case sceneStates.TUTORIAL:
      checkTutorial();
      break;
    case sceneStates.GAME:
      checkGame();
      break;
    case sceneStates.WIN:
      checkWin();
      break;
    case sceneStates.LOSE:
      checkLose();
      break;
  }
}

function setupScene() {
  switch(currentState) {
    case sceneStates.INTRO:
      break;
    case sceneStates.TUTORIAL:
      tutorialTimer = millis();
      break;
    case sceneStates.GAME:
      gameTimer = millis();
      break;
  }
}

function keyPressed() {
  keyOn = true;
}

//
// INTRO
//

function drawIntro() {
  background(100 + sin(frameCount * 0.05) * 50, 100 + sin(frameCount * 0.06) * 50, 100 + sin(frameCount * 0.07) * 50);
  // console.log("frameCount: " + frameCount);
  // console.log("sin(frameCount): " + sin(frameCount));
  fill(255);
  textSize(80);
  textAlign(CENTER, CENTER);
  text("welcome to the\nPUSH BUTTON\n\"game\"", width/2, height/2);
}

function checkIntro() {
  if (keyOn) {
    currentState++;
    setupScene();
  }
}

//
// TUTORIAL
//

function drawTutorial() {
  background(150, 200, 200);
  fill(0);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("HOW TO PLAY...", width/2, height/2 - 100);
  textSize(32);
  text("try to hit a key exactly when\nthe counter hits zero", width/2, height/2);
  textSize(24);
  text("notice that this screen progresses\nwhen hitting a key only after a\ntimer has been completed", width/2, height/2 + 120);
  if (millis() > tutorialTimer + 3000) {// 3000 is 3 seconds; that's the time for the tutorial to appear
    text("OK now you can hit a key", width/2, height/2 + 190);
}
}

function checkTutorial() {
  if (millis() > tutorialTimer + 3000) {
    if (keyOn) {
      currentState++;
      setupScene();
    }
  }
}

//
// GAME
//

function drawGame() {
  let timeLeft = (timeForGame - (millis() - gameTimer))/1000;
  background(map(timeLeft, 5, 0, 255, 0), 250, 150);
  fill(0);
  textSize(164);
  textAlign(CENTER, CENTER);
  text(timeLeft.toFixed(1), width/2, height/2);
}

function checkGame() {
  if (keyOn) {
    gameTimePressed = (timeForGame - (millis() - gameTimer))/1000;
    gameTimePressed = gameTimePressed.toFixed(3);

    if (gameTimePressed < 0.1 && gameTimePressed > -0.1) {
      currentState = sceneStates.WIN;
    } else {
      currentState = sceneStates.LOSE;
    }
    setupScene();
  }
}

//
// END STATES
//

function drawWin() {
  background(127 + sin(frameCount * 0.05) * 127, 127 + sin(frameCount * 0.06) * 127, 127 + sin(frameCount * 0.07) * 127);
  fill(0);
  textSize(64);
  textAlign(CENTER, CENTER);
  text("YOU WIN!\nresult: " + gameTimePressed, width/2, height/2 - 70);
  textSize(24);
  text("Press any key to return to title", width/2, height - 100);
}

function checkWin() {
  if (keyOn) {
    currentState = sceneStates.INTRO;
    setupScene();
  }
}

function drawLose() {
  background(10, 10, 10);
  fill(255);
  textSize(64);
  textAlign(CENTER, CENTER);
  text("You lose...\nresult: " + gameTimePressed, width/2, height/2);
  textSize(24);
  text("Press any key to try again", width/2, height - 100);
}

function checkLose() {
  if (keyOn) {
    currentState = sceneStates.GAME;
    setupScene();
  }
}
