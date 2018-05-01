

class QWTile extends Tile {

  processData(){

    this.size = 20;
    this.salty = 0;
    this.withSauce = 0;
    this.curly = 0;
    this.straight = 0;
    this.withoutSauce = 0;
    this.getAnswers = this.table.getColumn('How do you like your fries?');

    this.myFont;
    this.myFont = loadFont('Uni Sans Heavy Italic.otf');


    console.log(this.getAnswers);

    for (let i = 0; i < this.getAnswers.length;i ++){
      if(this.getAnswers[i] === 'Salty'){
        this.salty++;
      }
      if(this.getAnswers[i] === 'With sauce'){
        this.withSauce++;
      }
      if(this.getAnswers[i] === 'Curly'){
        this.curly++;
      }
      if(this.getAnswers[i] === 'Without sauce'){
        this.withoutSauce++;
      }
      else if(this.getAnswers[i] === 'Straight'){
        this.straight++;
      }
    }
    console.log("Without sauce: " + this.withoutSauce);
    console.log("Salty: " + this.salty);
    console.log("With sauce: " + this.withSauce);
    console.log("Curly: " + this.curly);
    console.log("Straight: " + this.straight);
  }








  display() {
    super.display();
    // background(255,200,50);
    fill(255,200,50);
    rect(0, 0, this.tileSize, this.tileSize);
    noStroke();

    fill(255,240,0);
    rect(0,0,this.tileSize,this.tileSize/(this.getAnswers.length)*this.withoutSauce);
    fill(255,220,0);
    rect(0,this.tileSize/(this.getAnswers.length)*this.withoutSauce,this.tileSize,this.tileSize/(this.getAnswers.length)*this.straight);
    fill(255,200,0); rect(0,this.tileSize/(this.getAnswers.length)*(this.straight+this.withoutSauce),this.tileSize,this.tileSize/(this.getAnswers.length)*this.withSauce);
    fill(255,180,0);
    rect(0,this.tileSize/(this.getAnswers.length)*(this.straight+this.withSauce+this.withoutSauce),this.tileSize,this.tileSize/(this.getAnswers.length)*this.salty);
    fill(255,160,0)
    rect(0,this.tileSize/(this.getAnswers.length)*(this.straight+this.withSauce+this.salty+this.withoutSauce),this.tileSize, this.tileSize/(this.getAnswers.length)*this.curly);

    fill(255);
    textFont(this.myFont);
    textSize(this.size*this.withoutSauce +1);
    text('WITHOUT SAUCE  FRIES WITHOUT SAUCE ',5,this.tileSize/(this.getAnswers.length )*this.withoutSauce);
    textSize(this.size*this.straight-15);
    text('STRAIGHT FRIES   STRAIGHT FRIES',5,this.tileSize/(this.getAnswers.length )*(this.straight+this.withoutSauce));
    textSize(this.size*this.withSauce-15);
    text('FRIES WITH SAUCE',5,this.tileSize/(this.getAnswers.length)*(this.withSauce+this.straight+this.withoutSauce));
    textSize(this.size*this.salty-15);
    text('SALTY FRIES',5,this.tileSize/(this.getAnswers.length)*(this.withSauce+this.straight+this.salty+this.withoutSauce));
    textSize(this.size*this.curly+21);
    text('CURLY FRIES',5,this.tileSize/(this.getAnswers.length)*(this.withSauce+this.straight+this.salty+this.curly+this.withoutSauce));


  }

}
