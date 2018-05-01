/* stuff we have to move in
let imgLove;
let imgAlright;
let imgDontCare;

imgLove = loadImage("assets/jedi.png");
imgAlright = loadImage("assets/alright.png");
imgDontCare = loadImage("assets/dontcare.png");
*/


class ESTile extends Tile {

  processData() {
    // make a counter for each response DOCTYPE
    this.love = 0;
    this.hate = 0;
    this.alright = 0;
    this.care = 0;

    // get all the responses to that question
    // the useful method here is getColumn()
    this.jediAnswers = this.table.getColumn('How did you feel about The Last Jedi?');
    // console.log(this.jediAnswers);
    // compare each answer to the string
    // increment counters as appropriate
    for (let i = 0; i < this.jediAnswers.length; i++) {
      if (this.jediAnswers[i] === 'Loved it') {
        this.love++;
      } else if (this.jediAnswers[i] === 'Hated it') {
        this.hate++;
      } else if (this.jediAnswers[i] === 'Alright') {
        this.alright++;
      } else {
        this.care++;
      }
    }

    this.imgLove;
    this.imgAlright;
    this.imgDontCare;

    this.imgLove = loadImage("assets/jedi.png");
    this.imgAlright = loadImage("assets/alright.png");
    this.imgDontCare = loadImage("assets/dontcare.png");
  }

  display() {
    // call super class' display method so we get our
    // clean matrix and translation
    super.display();

    noStroke();

    fill(255, 255, 255);
    rect(0, 0, this.tileSize, this.tileSize);

    this.xLove = 50;
    this.yLove = 50;

    this.xAlright = 50;
    this.yAlright = 200;

    this.xCare = 50;
    this.yCare = 350;

    for (let i = 0; i < this.love; i++) {
      image(this.imgLove, this.xLove, this.yLove);
      this.xLove += 50;
    }

    for (let i = 0; i < this.alright; i++) {
      image(this.imgAlright, this.xAlright, this.yAlright);
      this.xAlright += 50;
    }

    for (let i = 0; i < this.care; i++) {
      image(this.imgDontCare, this.xCare, this.yCare);
      this.xCare += 50;
    }



    // console.log(this.table);
  }

}
