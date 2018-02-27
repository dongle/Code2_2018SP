let madlibs;

function preload() {
  madlibs = loadJSON('madlibs.json');
}

function setup() {
  createCanvas(800, 800);
  // console.log(madlibs);
  // console.log(madlibs["first_verbing"]);
}

function draw() {
  background(0);
  fill(255);
  text("Most doctors agree that bicycle " + madlibs["first_verbing"] +
   " is a " + madlibs["second_adjective"] + " form of exercise.", 50, 50);
   text(madlibs["third_verbing"] + " a bicycle enables you to develop " +
        "your " + madlibs["fourth_bodypart"] + " muscles as well as " +
        madlibs["fifth_adverb"] + " increase the rate of your " +
        madlibs["sixth_bodypart"] + " beat", 50, 100);
}

// function loadJSON(file) {
//   console.log("loading json");
//   if (file.subtype === 'json') {
//     parseJSON(file.data, parseJSON, errorLoadJSON);
//   }
// }

// function parseJSON(data) {
//   madlibs = data;
//   console.log(madlibs);
// }
//
// function errorLoadJSON(error) {
//   console.log(error);
// }
