let docReady = function() {
  console.log('ready');
}

let fizzBuzz = function() {
  // count from 1 to 100
  // if the number is a multiple of 3, print fizz
  // if the number is a multiple of 5, print buzz
  // if the number is a multiple of 3 and 5, print fizzbuzz
  // otherwise, print the number

  for (let counter = 1; counter <=100; counter++) {
    if (counter % 3 == 0 && counter % 5 == 0) {
      console.log('fizzbuzz');
    } else if (counter % 5 == 0) {
      console.log('buzz');
    } else  if (counter % 3 == 0) {
      console.log('fizz');
    } else {
      console.log(counter);
    }
  }
}

// Write a function that takes two parameters and prints the smaller one
let printMinimum = function(a, b) {
  if (a < b) {
    console.log(a);
  } else {
    console.log(b);
  }
}


// The lines below tell the browser what to run when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    // docReady();
    fizzBuzz();
}, false);
