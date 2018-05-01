class NTTile extends Tile {

  processData() {

    this.howl = loadImage("NTassets/howl.png");
    this.kiki = loadImage("NTassets/kiki.png");
    this.mononoke = loadImage("NTassets/mononoke.png");
    this.spirited = loadImage("NTassets/spirited.png");
    this.totoro = loadImage("NTassets/totoro.png");
    // make a counter for each response type
    this.spiritedAway = 0;
    this.princessMononoke = 0;
    this.howlsMovingCastle = 0;
    this.myNeighborTotoro = 0;
    this.others = 0;

    // get all the responses to that question
    // the useful method here is getColumn()
    this.ghibliAnswers = this.table.getColumn('What is your preferred Ghibli movie?');

    // compare each answer to the string 'Yes'
    // increment counters as appropriate
    for (let i = 0; i < this.ghibliAnswers.length; i++) {
      if (this.ghibliAnswers[i] === 'Spirited Away') {
        this.spiritedAway++;
      } else if(this.ghibliAnswers[i] === 'Princess Mononoke'){
        this.princessMononoke++;
      } else if(this.ghibliAnswers[i] === "Howl's Moving Castle"){
        this.howlsMovingCastle++;
      } else if(this.ghibliAnswers[i] === 'My Neighbor Totoro'){
        this.myNeighborTotoro++;
      } else if(this.ghibliAnswers[i] === 'Other'){
        this.others++;
      }
    }

    this.spiritedAway *= 30;
    this.princessMononoke *= 30;
    this.howlsMovingCastle *= 30;
    this.myNeighborTotoro *= 30;
    this.others *= 30;

    // console.log(this.ghibliAnswers);

  }

  display(){
    super.display();
    fill(255, 224, 214);
    rect(0,0,this.tileSize,this.tileSize);

    image(this.spirited,20,40,this.spiritedAway,this.spiritedAway);
    image(this.mononoke,180,30,this.princessMononoke,this.princessMononoke);
    image(this.howl,300,150,this.howlsMovingCastle,this.howlsMovingCastle);
    image(this.totoro,70,275,this.myNeighborTotoro,this.myNeighborTotoro);
    image(this.kiki,200,300,this.others,this.others);

    fill(66,71,104);
    noStroke();
    textFont('Courier');
    textSize(12);
    text("most beloved ghibli movies",20,20);
    textSize(10);
    text("spirited away",40,230);
    text("princess mononoke",195,190);
    text("howl's moving castle",240,220);
    text("my neighbor totoro",50,320);
    text("other",200,345);

  }

}
