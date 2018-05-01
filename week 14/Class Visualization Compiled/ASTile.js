class ASTile extends Tile {

  processData() {

    this.morning = 0;
    this.afternoon = 0;
    this.night = 0;
    this.unanswered = 0;

    this.answer = this.table.getColumn('What is your favorite time of day?');
    // console.log(this.answer);
    this.dayAnswers = [];
    for(var j =0; j<this.answer.length; j++){
      this.dayAnswers.push(this.answer[j]);
    }

    for (let i = 0; i < this.dayAnswers.length; i++) {
      if (this.dayAnswers[i] === 'Morning') {
        this.morning++;
      } else if (this.dayAnswers[i] === 'Afternoon') {
        this.afternoon++;
      } else if (this.dayAnswers[i] === 'Night') {
        this.night++;
      } else {
        this.unanswered++;
      }

    }

    // console.log("morning" + this.morning);
    // console.log("afternoon" + this.afternoon);
    // console.log("night" + this.night);
    // console.log("unanswered" + this.unanswered);
  }

  display() {
    fill(0);
    rect(0, 0, this.tileSize, this.tileSize);
    super.display();

    fill(248, 255, 117);
    textSize(14);
    text('Number of Morning People', 125, 30);
    fill(248, 255, 117);
    ellipse(50, 80, 55, 55);
    ellipse(150, 80, 55, 55);
    ellipse(250, 80, 55, 55);
    ellipse(350, 80, 55, 55);
    fill(154, 244, 243);
    text('Number of Afternoon People', 123  , 150);
    fill(154, 244, 243);
    ellipse(50, 200, 55);
    ellipse(150, 200, 55);
    ellipse(250, 200, 55);
    ellipse(350, 200, 55);
    fill(254, 196, 255);
    text('Number of Night People', 135, 270);
    fill(254, 196, 255);
    ellipse(50, 320, 55);
    ellipse(150, 320, 55);
    ellipse(250, 320, 55);
    ellipse(350, 320, 55);

  }
}
