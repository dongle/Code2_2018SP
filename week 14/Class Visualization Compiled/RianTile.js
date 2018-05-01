class IceCream{
	constructor(flaverString, tileSize){
		this.x = random(0, tileSize);
		this.y = random(0, tileSize);
		this.velX = random(0,5);
		this.valY = random(0,5);
		this.iceCreamColor = color(255, 0, 255);
		this.chip = false;
		this.chipColor =color(255, 0, 255);

		if (flaverString == "Chocolate mint" || flaverString == "chocolate mint"){
			this.iceCreamColor = color(191,252,230);
			this.chip = true;
			this.chipColor = color(123, 63, 0);
			//console.log("is chocolate mint");
		} else if(flaverString == "Ben and Jerry's Strawberry Cheesecake "){
			this.iceCreamColor = color(251,255,193);
			this.chip = true;
			this.chipColor = color(255, 0, 255);
		}else if(flaverString == "Strawberry cheesecake"){
			this.iceCreamColor = color(251,255,193);
		}else if(flaverString == "Chocolate w/whiskey"){
			this.iceCreamColor = color(123, 63, 0);
		}else if(flaverString == "strawberry" || flaverString == "Strawberry"){
			this.iceCreamColor = color(245,177,175);
		}else if(flaverString == "green tea" || flaverString == "matcha"){
			this.iceCreamColor = color(245,177,175);
		}else if(flaverString == "cookies n creme betch!"){
			this.iceCreamColor = color(252,251,227);
			this.chip = true;
			this.chipColor = color(5, 0, 5);
		}else if(flaverString == "EGG NOG"){
			this.iceCreamColor = color(236, 227, 214);
		}else if(flaverString == "Mint chocolate chip"){
			this.chip = true;
			this.chipColor = color(123, 63, 0);
			this.iceCreamColor = color(191,252,230);
		}else if(flaverString == "Horchata"){
			this.iceCreamColor = color(222,216,175);
		}else if(flaverString == "non-dairy"){
			this.iceCreamColor = color(0,0,0);
		}
	}

	iceCreamDisplay(){
		//console.log(this.iceCreamColor);
		fill(this.iceCreamColor);
		ellipse(this.x,this.y,50,50);
		if(this.chip){
			for(var i = 0; i<10; i++){
				fill(this.chipColor);
				ellipse(random(this.x-20,this.x+20),random(this.y-20,this.y+20),5,5);
			}

		}
	}

	iceCreamUpdate(){
		this.x+=this.valX;
		this.y+=this.valY;
	}
}

class RianTile extends Tile {

	processData(){
		console.log(this.table.getColumn('What is your favorite ice cream flavor?'));
		let answers = this.table.getColumn('What is your favorite ice cream flavor?');
		this.flavors =  [];
		this.icecream = [];
		for(var i =0; i<14;i++){
			this.flavors.push(answers[i]);
			this.icecream.push(new IceCream(this.flavors[i], this.tileSize));
		}
	}

  display() {
  	super.display();

    noStroke();
    for(var i =0; i<14;i++){
		this.icecream[i].iceCreamDisplay();
		this.icecream[i].iceCreamUpdate();
	}

    // call super class' display method so we get our
    // clean matrix and translation


  }

}
