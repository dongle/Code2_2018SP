class JBTile extends Tile {

  // Do you feel lonely?
  processData() {
    // make a counter for each response type
    this.lonelyYes = 0;
    this.lonelyNo = 0;

    // get all the responses to that question
    // the useful method here is getColumn()
    this.lonelyAnswers = this.table.getColumn('Do you feel lonely?');
    console.log(this.lonelyAnswers);

    // compare each answer to the string 'Yes'
    // increment counters as appropriate
    for (let i = 0; i < this.lonelyAnswers.length; i++) {
      if (this.lonelyAnswers[i] === 'Yes') {
        this.lonelyYes++;
      } else {
        this.lonelyNo++;
      }
    }

    console.log(this.lonelyYes);
  }

  display() {
    // call super class' display method so we get our
    // clean matrix and translation
    super.display();
  }
}
