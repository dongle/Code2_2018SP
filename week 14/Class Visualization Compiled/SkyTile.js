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
				// console.log("Salt: " + this.salt);
			}
			if (this.FriesAnswers[i] ==='With sauce'){
				this.sauceWith++;
				console.log("Sauce: " + this.sauceWith);
			}
			if (this.FriesAnswers[i] ==='Without sauce'){
				this.sauceWithout++;
			}
		}

		// set up random vars
		//
		// CURLY
		//
		this.curlyW = parseInt(random(70,350)); //keep the desmol number to whole.
		this.curlyH = parseInt(random(70,350));
		this.curlyColor = parseInt(random(210, 255));
		this.curlyRadians1 = radians(random(70, 90));
		this.curlyRadians2 =radians(random(150, 250));

		// STRAIGHT
		this.straightW = parseInt(random(20,380)); //keep the desmol number to whole.
		this.straightH = parseInt(random(20, 380));
		this.straightRanX = null;
		this.straightRanY = null;

		// SALT
		this.saltW = parseInt(random(70,350)); //keep the desmol number to whole.
		this.saltH = parseInt(random(70,350));
		this.saltColor = parseInt(random(248, 252));

		// SAUCEWITHOUT
		this.sauceWithoutW = parseInt(random(70,350));
		this.sauceWithoutH = parseInt(random(70,350));

		// SAUCEWITH
		this.sauceWithW = parseInt(random(70,350));
		this.sauceWithH = parseInt(random(70,350));
	}

	display() {
		noStroke();

		// call super class' display method so we get our
		// clean matrix and translation
		super.display();
		console.log("width " + width);
		//BACKGROUND ELEMENTS:
		//Fabric Color n Grid:
		fill(247, 246, 242);
		rect(0, 0, this.tileSize, this.tileSize);

		for (let i=0; i<= this.tileSize; i=i+30){
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

			//console.log(w,h);
			noFill();
			stroke(this.curlyColor+5, this.curlyColor, 0);
			strokeWeight(25);
			arc(this.curlyW, this.curlyH, 180, 100, this.curlyRadians1, this.curlyRadians2);
		}

		//STRAIGHT FRIES:
		for (let i = 0; i<this.shapeStraight; i++){

			// console.log(w,h);
			stroke(255,204,0);
			strokeWeight(30);
			if (!this.straightRanX) {
				if (this.straightH < this.tileSize/2){
					this.straightRanX = parseInt(random(0,200));
				}else{
					this.straightRanX = parseInt(random(0,-200));
				}
			}

			if (!this.straightRanY) {
				if (this.straightW < this.tileSize/2){
					this.straightRanY = parseInt(random(0,200));
				}else{
					this.straightRanY = parseInt(random(0,-200));
				}
			}
			line(this.straightW, this.straightH, this.straightW +this.straightRanX, this.straightH +this.straightRanY);
		}

		//SALT:
		//10 grains of salt for any option
		for (let i =0; i <this.salt*10; i++){
			//console.log(w,h);
			noStroke();
			fill(this.saltColor+3, this.saltColor, this.saltColor+2);
			rect(this.saltW, this.saltH, 5, 5);
		}

		//SAUCEWITHOUT:
		for (let i =0; i <this.sauceWithout; i++){

			//package:
			fill(234, 230, 239);
			rect(this.sauceWithoutW -3, this.sauceWithoutH -3, 56, 96);
			fill(248, 244, 252);
			rect(this.sauceWithoutW, this.sauceWithoutH, 50, 90);
			fill(193, 13, 52);
			rect(this.sauceWithoutW +5, this.sauceWithoutH +30, 40, 50);

			//text:
			var packText = 'tear here';
			fill (0);
			textSize(7);
			text(packText, this.sauceWithoutW +5, this.sauceWithoutH +7);
			var packDash = '_ _ _ _ _ _';
			fill (0);
			textSize(5);
			text(packDash, this.sauceWithoutW, this.sauceWithoutH +7);

			//tomato:

			fill(247, 61, 105);
			ellipse(this.sauceWithoutW +25, this.sauceWithoutH +60, 25, 20);
			fill(58, 122, 58);
			triangle(this.sauceWithoutW +25, this.sauceWithoutH +50, this.sauceWithoutW+30, this.sauceWithoutH+55, this.sauceWithoutW+10, this.sauceWithoutH+55);
		}


		//SAUCEWITH:
		for (let i =0; i <this.sauceWith; i++){

			//package:
			fill(234, 230, 239);
			rect(this.sauceWithW -3, this.sauceWithH, 56, 83);
			fill(248, 244, 252);
			rect(this.sauceWithW, this.sauceWithH, 50, 80);
			fill(193, 13, 52);
			rect(this.sauceWithW +5, this.sauceWithH +20, 40, 50);

			//text:
			var packDash = '_ _ _ _ _ _';
			fill (0);
			textSize(5);
			text(packDash, this.sauceWithW, this.sauceWithH);

			//tomato:
			fill(247, 61, 105);
			ellipse(this.sauceWithW +25, this.sauceWithH +50, 25, 20);
			fill(58, 122, 58);
			var difference = 10;
			triangle(this.sauceWithW +25, this.sauceWithH +50 -difference, this.sauceWithW+30, this.sauceWithH+55 -difference, this.sauceWithW+10, this.sauceWithH+55 - difference);

		}

	}

}
