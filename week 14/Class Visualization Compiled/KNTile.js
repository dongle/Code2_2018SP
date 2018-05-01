class KNTile extends Tile {

  // Which food do you prefer?
  processData() {
    // console.log("hitting processdata")
    this.moist = 0;
    this.juicy = 0;
    this.perky = 0;
    this.thicc = 0;
    // get all the responses to that question
    // the useful method here is getColumn()
    this.answers = this.table.getColumn('Which food do you prefer?');
    // console.log(this.answers);
    this.foodAnswers = [];
    for(var i = 0; i<this.answers.length; i++){
      this.foodAnswers.push(this.answers[i]);
    }
    for (let i = 0; i < this.foodAnswers.length; i++) {
      if(this.foodAnswers[i] == "Moist cookie"){
        this.moist++;
      }else if(this.foodAnswers[i] == "Juicy steak"){
        this.juicy++;
      } else if(this.foodAnswers[i] == "Perky banana"){
        this.perky++;
      } else if(this.foodAnswers[i] == "Thicc bottle of Soylent"){
        this.thicc++;
      }
    }
    //console.log(this.foodAnswers.length);
    // console.log(this.juicy);
    // console.log(this.moist);
    // console.log(this.perky);
    // console.log(this.thicc);
  }
  display() {

    // call super class' display method so we get our
    // clean matrix and translation
      // console.log("hitting");
      super.display();
      fill(247, 210, 242);
      rect(0,0, this.tileSize, this.tileSize);
      //Pokadots back ground:
      for(var i = 0; i <=this.tileSize; i = i+50){
        for(var j = 0; j<=this.tileSize; j = j+50){
          fill(211, 209, 211, 200);
          ellipse(i, j, 10, 10);

        }
      }


      var data = [this.moist, this.juicy, this.perky, this.thicc];
      // console.log(data);
      var margin = 40;
      var barWidth = 70;
      textFont('Baton');
      textSize(24);


      for(var i=0; i<data.length; i++) {
        if( i == 1){
          fill(192, 103, 14, 70);
        } else if ( i == 2){
          fill(241, 209, 33, 150);
        } else if ( i == 3){
          fill(191, 233, 241, 70);
        } else{
          fill(239, 204, 137, 70);
        }
        noStroke();

        rect(0, (i*100)+15, data[i]*40, barWidth); // draw rect

        fill(0);
        text(data[i], data[i]*42,(i*100)+ barWidth/1.3); // write data

      }
      fill(0, 102, 153);
      textFont('Higher');
      textSize(72);
      text('moist cookie', 5, 80);

      fill(134, 190, 237);
      textSize(72);
      text('juicy steak', 5, 180);

      fill(241, 134, 83);
      textSize(48);
      text('perky', 7, 253);

      fill(241, 134, 83);
      textSize(38);
      text('banana', 7, 284);

      fill(109, 109, 107);
      textSize(42);
      text('soy', 7, 350);

      fill(109, 109, 107);
      textSize(36);
      text('lent', 5, 383);
      fill(109, 109, 107);
    }

  }
