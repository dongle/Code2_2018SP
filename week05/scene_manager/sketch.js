// Code 2
// Section B
// BFADT
// Spring 2018
// Jonathan Beilin

// Based on code by Bryan Ma

// week 4
// simple scene state machine

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
const timeForTutorial = 3000;
const timeForGame = 5000;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  drawScene(currentState);
  checkTransition(currentState);
  keyOn = false;
}

function drawScene(whichScene) {
  switch (whichScene) {
    case sceneStates.INTRO:
      background(100 + sin(frameCount * 0.05) * 50, 100 + sin(frameCount * 0.06) * 50, 100 + sin(frameCount * 0.07) * 50);
      fill(255);
      textSize(80);
      textAlign(CENTER, CENTER);
      text("welcome to the\nPUSH BUTTON\n\"game\"", width/2, height/2);
      break;
    case sceneStates.TUTORIAL:
      if (millis() > tutorialTimer + timeForTutorial) {
        background(150, 200, 200);
        fill(0);
        textSize(48);
        textAlign(CENTER, CENTER);
        text("HOW TO PLAY...", width/2, height/2 - 100);
        textSize(32);
        text("try to hit a key exactly when\nthe counter hits zero", width/2, height/2);

        textSize(24);
        text("notice that this screen progresses\nwhen hitting a key only after a\ntimer has been completed", width/2, height/2 + 120);
        text("OK now you can hit a key", width/2, height/2 + 190);
      } else {
        background(150, 200, 250);
        fill(0);
        textSize(48);
        textAlign(CENTER, CENTER);
        text("HOW TO PLAY...", width/2, height/2 - 100);
        textSize(32);
        text("try to hit a key exactly when\nthe counter hits zero", width/2, height/2);

        textSize(24);
        text("notice that this screen progresses\nwhen hitting a key only after a\ntimer has been completed", width/2, height/2 + 120);
      }
      break;
    case sceneStates.GAME:
      var timeLeft = (timeForGame - (millis() - gameTimer))/1000;
      background(map(timeLeft, 5, 0, 255, 0), 250, 150);
      fill(0);
      textSize(164);
      textAlign(CENTER, CENTER);
      text(timeLeft.toFixed(1), width/2, height/2);
      break;
    case sceneStates.WIN:
      background(127 + sin(frameCount * 0.05) * 127, 127 + sin(frameCount * 0.06) * 127, 127 + sin(frameCount * 0.07) * 127);
      fill(0);
      textSize(64);
      textAlign(CENTER, CENTER);
      text("You WIN!\n" + "result: " + gameTimePressed, width/2, height/2 - 70);
      textSize(24);
      text("Press any key to return to title", width/2, height - 100);
      fill(255);
      textSize(64);
      text("You WIN!\n" + "result: " + gameTimePressed, width/2 + 5, height/2 - 75);
      textSize(24);
      text("Press any key to return to title", width/2 + 2, height - 102);
      break;
    case sceneStates.LOSE:
      background(10, 10, 10);
      fill(255);
      textSize(64);
      textAlign(CENTER, CENTER);
      text("You lose...\n" + "result: " + gameTimePressed, width/2, height/2);
      textSize(24);
      text("Press any key to try again", width/2, height - 100);
    default:
      break;
  }
}

function checkTransition(whichScene) {
  switch (whichScene) {
    case sceneStates.INTRO:
      if (keyOn) {
        currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneStates.TUTORIAL:
      if (millis() > tutorialTimer + timeForTutorial) {
        if (keyOn) {
          currentState++;
          setUpScene(currentState);
        }
      }
      break;
    case sceneStates.GAME:
      if (keyOn) {
        gameTimePressed = (timeForGame - (millis() - gameTimer))/1000;
        gameTimePressed = gameTimePressed.toFixed(3);

        if (gameTimePressed < 0.1 && gameTimePressed > -0.1) {
          currentState = sceneStates.WIN;
        } else {
          currentState = sceneStates.LOSE;
        }
        setUpScene(currentState);
      }
      break;
    case sceneStates.WIN:
      if (keyOn) {
        currentState = sceneStates.INTRO;
        setUpScene(currentState);
      }
      break;
    case sceneStates.LOSE:
      if (keyOn) {
        currentState = sceneStates.GAME;
        setUpScene(currentState);
      }
      break;
    default:
      break;
  }
}

function setUpScene(whichScene) {
  switch (whichScene) {
    case sceneStates.INTRO:
      break;
    case sceneStates.TUTORIAL:
      tutorialTimer = millis();
      break;
    case sceneStates.GAME:
      gameTimer = millis();
      break;
    case sceneStates.END:
      break;
    default:
      break;
  }
}

function keyPressed() {
  keyOn = true;
}
