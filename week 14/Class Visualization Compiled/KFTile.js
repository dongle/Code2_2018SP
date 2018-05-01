class KFTile extends Tile{
	processData(){

		this.xspacing = 16;
		this.w;
		this.theta = 0.0;
		this.amplitude = 75.0;
		this.period = 500.0;
		this.dx;
		this.yvalues;

		this.w = width + 16;
		this.dx = (TWO_PI / this.period) * this.xspacing;
		this.yvalues = new Array(floor(this.w / this.xspacing));

		console.log(this.xPosition);
	}

	display(){
		super.display();

		fill(255, 252, 181);
		rect(0, 0, tileSize, tileSize);

		this.calcWave();
		this.renderWave();

		fill(123, 237, 231);
		rect(0, 50, 400, 2);
		rect(0, 70, 400, 2);
		rect(0, 90, 400, 2);
		rect(0, 110, 400, 2);
		rect(0, 60, 400, 2);

		fill(247, 180, 219);
		rect(50, 50, 25, 40);
		rect(90, 50, 25, 80);
		rect(130, 50, 25, 120);
		rect(170, 50, 25, 40);
		rect(210, 50, 25, 20);

		textSize(18);
		text('? hype what ?', 25, 30);
		fill(247, 180, 219);

		rect(0, 350, 400, 2);
		rect(0, 331, 400, 2);
		rect(0, 251, 400, 2);
		rect(0, 317, 400, 2);

		fill(112, 135, 249);
		rect(290, 350, 25, -40);
		rect(250, 350, 25, -60);
		rect(210, 350, 25, -200);

		textSize(18);
		text('? star who ?', 300, 380);
		fill(112, 135, 249);
	}

	calcWave(){
		this.theta += 0.02;

		var x = this.theta;
		for(var i =0; i < this.yvalues.length; i ++){
			this.yvalues[i] = sin(x)*this.amplitude;
			x += this.dx;
		}
	}

	renderWave(){
		noStroke();
		fill(255);
		for(var x = 0; this.x < this.yvalues.length; x ++){
			ellipse(this.x*this.xspacing, height/2 + this.yvalues[x], 16, 16);
		}
	}
}
