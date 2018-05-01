class HRTile extends Tile {
  processData(){

    console.log(this.table.getColumn('What is the perfect day?'));
    let answers = this.table.getColumn('What is the perfect day?');
    this.perfectDayAnswers = [];
    for(var i = 0; i < 15; i ++){
      this.perfectDayAnswers.push(answers[i]);
    }

    this.activity = 0;
    this.eventday = 0;
    this.weather = 0;
    this.food = 0;

    for(let i =0; i<=15; i++){
      if (this.perfectDayAnswers[i] === 'A day with plenty of sunlight'){
        this.activity++;
      }
      if (this.perfectDayAnswers[i] ==='event'){
        this.eventday++;
      }
      if (this.perfectDayAnswers[i] ==='weather'){
        this.weather++;
      }
      if (this.perfectDayAnswers[i] ==='food'){
        this.food++;
      }
    }
  }


  display() {
    noStroke();

    super.display();

    //background
    for( let i= 0 ; i <= this.tileSize; i = i +50){
      fill(255);
      rect(10, 10, 10, this.tileSize);
      rect(10, 10, this.tileSize, 10);
    }


    //AK47

    for (let i = 0; i <= this.activity; i++){
      fill(0);
      var x = 25;
      var h = 10;
      //stock
      rect(x*2, h*5, 10,40);
      //handle
      rect(x*3.2, h*5, 5,40);
      //bump
      rect(x*2, 55, 25,10);
      //chamber
      rect(x*2, 55, 25,10);
      //barrel
      rect(x*3, h*5, 50, 25);
      rect(x*3, 52, 70, 10);

    }


    for (let i = 0; i <= this.eventday; i++){
      fill(255);

      rect(90,90,100,100);

    }

  }
}
