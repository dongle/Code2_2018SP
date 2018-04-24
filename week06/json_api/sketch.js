
function setup() {
  noLoop();
  var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' +
    'summary/all_day.geojson';
    loadJSON(url, drawEarthquake);
}

function draw() {
  background(200);
}

function drawEarthquake(earthquakes) {
  let earthquakeMag = earthquakes.features[0].properties.mag;
  let earthquakeName = earthquakes.features[0].properties.place;
  ellipse( width/2, height/2, earthquakeMag * 10, earthquakeMag * 10);
  textAlign(CENTER);
  text(earthquakeName, 0, height - 30, width, 30);
}
