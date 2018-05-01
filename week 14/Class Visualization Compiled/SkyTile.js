class SkyTile extends Tile {
	processData(){

		console.log(this.table.getColumn('How do you like your fries?'));
		let answers = this.table.getColumn('How do you like your fries?');
		this.FriesAnswers = [];
		for(var i =0; i<14;i++){
			this.FriesAnswers.push(answers[i]);
		}
		this.shapeCurly= 0;
		this.shapeStraight= 0;
		this.salt= 0;
		this.sauceWith= 0;
		this.sauceWithout= 0;


		for(let i =0; i<=15; i++){
			if (this.FriesAnswers[i] === 'Curly'){
				this.shapeCurly++;
				// console.log("Curly: "+this.shapeCurly);
			}
			if (this.FriesAnswers[i] ==='Straight'){
				this.shapeStraight++;
				// console.log("Straight: " + this.shapeStraight);
			}
			if (this.FriesAnswers[i] ==='Salty'){
				this.salt++;
				console.log("Salt: " + this.salt);
			}
			if (this.FriesAnswers[i] ==='With sauce'){
				this.sauceWith++;
			}
			if (this.FriesAnswers[i] ==='Without sauce'){
				this.sauceWithout++;
			}
		}
	}

  display() {
    noStroke();

    // call super class' display method so we get our
    // clean matrix and translation
    super.display();
    console.log("width " + width);
    //BACKGROUND ELEMENTS:
    //Fabric Grid:
    for (let i=0; i<= 400; i=i+30){
    	fill(252, 58, 58);
    	rect(i-3, 0, 5, this.tileSize);
    	rect(0, i-6, this.tileSize, 5);
    }

    //Dish:
    fill(249, 251, 255);
    ellipse(this.tileSize/2, this.tileSize/2, this.tileSize*7/8, this.tileSize*7/8);
    fill(234, 235, 237);
    ellipse(this.tileSize/2, this.tileSize/2, this.tileSize*5/8, this.tileSize*5/8);
    fill(244, 245, 247)
    ellipse(this.tileSize/2, this.tileSize/2, this.tileSize*5/8 -10, this.tileSize*5/8 -10);

    //CURLY FRIES:
    for (let i = 0; i<this.shapeCurly;i++){
    	var w = parseInt(random(70,350)); //keep the desmol number to whole.
    	var h = parseInt(random(70,350));
    	var colorRandom = parseInt(random(210, 255));
    	//console.log(w,h);
    	noFill();

    	stroke(colorRandom+5, colorRandom, 0);
    	strokeWeight(25);
    	arc(w, h, 180, 100, radians(random(70, 90)), radians(random(150, 250)));

    	// line(w,h,w+parseInt(random(-50,-200)),h+parseInt(random(-50,-200)));
    }

    //STRAIGHT FRIES:
    for (let i = 0; i<this.shapeStraight; i++){
    	var w = parseInt(random(20,380)); //keep the desmol number to whole.
    	var h = parseInt(random(20, 380));
    	console.log(w,h);
    	stroke(255,204,0);
    	strokeWeight(30);
    	if(w <this.tileSize/2){
    		var ranX = parseInt(random(0,200));
    	}else{
    		var ranX = parseInt(random(0,-200));
    	}

    	if(h<this.tileSize/2){
    		var ranY = parseInt(random(0,200));
    	}else{
    		var ranY = parseInt(random(0,-200));
    	}
    	line(w,h,w+ranX,h+ranY);
    }

    //SALT:
    //10 grains of salt for any option
    for (let i =0; i <this.salt*10; i++){
    	var w = parseInt(random(70,350)); //keep the desmol number to whole.
    	var h = parseInt(random(70,350));
    	var colorRandom = parseInt(random(248, 252));
    	//console.log(w,h);
    	noStroke();
    	fill(colorRandom+3, colorRandom, colorRandom+2);
    	rect(w, h, 5, 5);
    }

    //SAUCEWITH:
    for (let i =0; i <this.sauceWith; i++){
    	var w = parseInt(random(70,350));
    	var h = parseInt(random(70,350));
    }

    // rect(30, 20, 55, 55, 20, 15, 10, 5);

    // console.log(this.table);
  }

}
