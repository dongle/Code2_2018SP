let table;
let bubbles;

function preload(){

  table = loadTable('data.csv','header');
  // console.log(table);

}

function setup(){

  createCanvas(800,800);
  loadData();

}

function draw(){

  background(0);

  for(let i=0;i<bubbles.length;i++){
    bubbles[i].display();
  }

}

function loadData(){

  bubbles = [];

  for(let i=0;i<table.getRowCount();i++){
    let row = table.getRow(i);
    let movie = row.get("movie");
    let people = row.get("people");

    bubbles[i] = new Bubble(random(0,700),random(0,700),movie,people*100);
  }
}

class Bubble{

  constructor(tempX,tempY,tempMovie,tempPeople){
    this.x = tempX;
    this.y = tempY;
    this.movie = String(tempMovie);
    this.peopleNum = Number(tempPeople);

  }

  display(){
    noStroke();
    fill(255);
    ellipse(this.x,this.y,this.peopleNum,this.peopleNum);
    fill(0);
    text(this.movie,this.x,this.y-10);
  }


}
