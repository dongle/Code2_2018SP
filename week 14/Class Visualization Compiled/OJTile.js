class OJTile extends Tile {

  processData() {
 //    // make a counter for each response type
 //    console.log(this.table.getColumn('How much of a Hype Beast are you?'));
	// 	let answers = this.table.getColumn('How much of a Hype Beast are you?');
	// 	this.answer =  [];
	// 	// this.answer2 = [];
	// 	for(var i =0; i<14;i++){
	// 		this.answer.push(answers[i]);

	// 	}
	// }

    this.answer1 = 0;
    this.answer2 = 0;
    this.answer3 = 0;
    this.answer4 = 0;
    this.answer5 = 0;

    // get all the responses to that question
    // the useful method here is getColumn()
    this.hypeAnswers = this.table.getColumn('How much of a Hype Beast are you?');
    console.log(this.hypeAnswers);

    // compare each answer to the string 'Yes'
    // increment counters as appropriate
    //console.log(this.hypeAnswers[1].charAt(0));
    for (let i = 0; i < this.hypeAnswers.length; i++) {
      if (this.hypeAnswers[i].charAt(0) === '1') {
        this.answer1++;
      } else if(this.hypeAnswers[i] === '2 - Heard about it') {
      	this.answer2++;
      } else if(this.hypeAnswers[i].charAt(0) === '3'){
      	this.answer3++;
      } else if(this.hypeAnswers[i].charAt(0) === '4'){
      	this.answer4++;
      } else if(this.hypeAnswers[i].charAt(0) === '5'){
      	this.answer5++;
      }
    }
    console.log(this.answer1, "people have no idea what a hypebeast is.")
    console.log(this.answer2, "people heard about hypebeast.");
    console.log(this.answer3, "people know some things.");
    console.log(this.answer4, "people have bought some hype merch.");
    console.log(this.answer5, "people is the ultimate hypebeast.");

    this.supremelogo = loadImage("assets/supreme.png");
  }

  display() {

	super.display();

  fill(255);
  rect(0, 0, this.tileSize, this.tileSize);

	// img = loadImage("assets/bape.png");
	// img1 = loadImage("assets/stussy.jpg");
	//img2 = loadImage("assets/supreme.png");
	// img3 = loadImage("assets/yeezy.png");

  	let size = this.answer1*15;
  	let size1 = this.answer2*15;
  	let size2 = this.answer3*15;
  	let size3 = this.answer4*15;
  	let size4 = this.answer5*15;

  	fill(255,0,0);
  	textSize(18);
  	textFont('Helvetica');
    text('How much of a hypebeast are you?',20, 50);

    image(this.supremelogo, 20, 70, this.supremelogo.width/5, this.supremelogo.height/5);

    noStroke();

    fill(244, 215, 66);
    rect(20, 160, size+50, size+120);
    fill(244, 184, 65);
    rect(70, 160, size1+50, size1+120);
    fill(244, 139, 65);
    rect(150, 160, size2+50, size2+120);
    fill(244, 94, 65);
    rect(260, 160, size3+50, size3+120);
    fill(255, 65, 65);
    rect(320, 160, size4+50, size4+120);

    // call super class' display method so we get our
    // clean matrix and translation

  }
}
