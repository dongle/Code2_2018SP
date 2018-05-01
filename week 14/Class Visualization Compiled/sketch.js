// make an empty array to hold our tiles
let tiles = [];
let tileSize = 400;

console.log = function() {}

function preload() {
  let table = loadTable('https://dl.dropboxusercontent.com/s/mrq421mkmg31wng/survey.csv?dl=1&raw=1', 'csv', 'header');
  Tile.prototype.table = table;
}

function setup() {
  let tileCoords = [];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 3; j++) {
      tileCoords.push(createVector(i*tileSize, j*tileSize));
    }
  }

  let tileNum = 0;
  tiles.push(new ASTile(tileCoords[tileNum].x, tileCoords[tileNum].y, tileSize));
  tileNum++;
  tiles.push(new ESTile(tileCoords[tileNum].x, tileCoords[tileNum].y, tileSize));
  tileNum++;

  // not done
  // tiles.push(new HRTile(tileCoords[tileNum].x, tileCoords[tileNum].y, tileSize));
  // tileNum++;

  // needs refactor
  // tiles.push(new HYTile(tileCoords[tileNum].x, tileCoords[tileNum].y, tileSize));
  // tileNum++;

  tiles.push(new KFTile(tileCoords[tileNum].x, tileCoords[tileNum].y, tileSize));
  tileNum++;

  tiles.push(new KNTile(tileCoords[tileNum].x, tileCoords[tileNum].y, tileSize));
  tileNum++;

  tiles.push(new LMTile(tileCoords[tileNum].x, tileCoords[tileNum].y, tileSize));
  tileNum++;

  tiles.push(new NTTile(tileCoords[tileNum].x, tileCoords[tileNum].y, tileSize));
  tileNum++;

  tiles.push(new OJTile(tileCoords[tileNum].x, tileCoords[tileNum].y, tileSize));
  tileNum++;

  tiles.push(new QWTile(tileCoords[tileNum].x, tileCoords[tileNum].y, tileSize));
  tileNum++;
  tiles.push(new RianTile(tileCoords[tileNum].x, tileCoords[tileNum].y, tileSize));
  tileNum++;

  // big, animated, lots of logging
  tiles.push(new SkyTile(tileCoords[tileNum].x, tileCoords[tileNum].y, tileSize));
  tileNum++;

  createCanvas(tileSize * 4, tileSize * 3);

  // noLoop();
}

function draw() {
  // background(0);

  for (var i = 0; i < tiles.length; i++) {
    tiles[i].update();
    tiles[i].display();
  }
}
