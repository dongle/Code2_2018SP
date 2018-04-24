class JBTile extends Tile {

  display() {
    noStroke();

    // call super class' display method so we get our
    // clean matrix and translation
    super.display();

    console.log(this.table);
  }

}
