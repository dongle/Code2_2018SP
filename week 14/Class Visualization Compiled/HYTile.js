// make an empty array to hold our tiles
//var tiles = [];
var tileSize = 900;
var x =[];
var y =[];
var table;
var yy = "Yes";
var angle = 0;
function preload() {
  // let table = loadTable('https://dl.dropboxusercontent.com/s/cgrl2ekchqrf9hp/Untitled%20form.csv?dl=1&raw=1', 'csv', 'header');
  // let table = loadTable('https://dl.dropboxusercontent.com/s/mrq421mkmg31wng/survey.csv?dl=1&raw=1', 'csv', 'header');
  table = loadTable("survey.csv", "header");
  //Tile.prototype.table = table;
}

function setup() {
  //tiles.push(new JBTile(0, 0, tileSize));

  createCanvas(tileSize * 1, tileSize * 1);
  //textMode(0);
  //noLoop();

  for (var i=0; i < 15; i++) {
    x[i]=450+240* cos(24*radians(i));
    y[i]=  450+240* sin(24*radians(i));
    console.log(y[i]);
  }
  rectMode(CENTER);
}

function draw() {
	angle+=0.004;
	translate(450,450);
	rotate(angle);
	translate(-450,-450);
  background(0);
  fill(60, 63, 62);
  ellipse(450, 450, 300, 300);
  fill(255);
  textSize(35);
  text("Do you feel lonely?", 300, 450);
  //console.log(table.getRow());
  //for (var row : table.rows()) {
  //getColum
  //console.log(table);
  //var n = row.getString("Do you feel lonely?");
  // }
  for (var i = 0; i < 14; i++) {
    var n = table.getString(i, 10);
   // console.log(n);
    //if (n.equals(y) == true) {
    if (n == "Yes") {
      fill(77, 160, 110);
      rect(x[i], y[i], 70, 70);
      fill(255);
      text("Yes", x[i]-26, y[i]+10);
    } else {
      fill(234, 84, 48);
      ellipse(x[i], y[i], 70, 70);
      fill(255);
      text("No", x[i]-20, y[i]+10);
    }
  }
}
