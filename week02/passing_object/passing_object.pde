int i = 5;

PVector vec = new PVector(25, 25);

void setup() {
  //
  // this is an example of passing a simple data type to a function
  // simple data types are ints, floats, booleans, etc
  //
  println("in setup, i is: " + i); // will print 5
  addOneInt(i);
  println("in setup, after passing i to the addOneInt function, i is: " + i); // will print 5 again

  //
  // this is an example of passing an object to a function
  //
  println("in setup, vec is: " + vec); // will print [ 25.0, 25.0, 0.0 ]
  addOneVector(vec);
  println("in setup, after passing vec to the addOneVector function, vec is: " + vec); // will print [ 26.0, 26.0, 0.0 ]

  // what happened? why did vec change here, while i did not change?
  // i is a simple data type; Processing just passes a copy of the number 5 to the addOneInt function
  // vec is a PVector object; Processing passes the address of that object in memory to the addOneVector function
  // this is not a copy of the object that vec points to; it is the same object
  // this means that addOneVector operates on the object that vec is pointing to, changing the value of the
  // object that vec points to in memory
  //
  // in our fireworks example, this means that all 350 fireworks were using the same PVector object in memory
  // and adding all their velocities to it, meaning that all the fireworks were being drawn at basically
  // the same position (each firework was just the value of their velocity PVector off from the previous firework)
  // and, since they were adding all of their velocities to the same position, they moved very fast
}

void addOneInt(int i) {
  i += 1;
  println("within the addOneInt function, i is: " + i); // will print 6
}

void addOneVector(PVector argVector) {
  argVector.add(new PVector(1, 1));
  println("within the addOneVector function, vec is: " + vec); // will print [ 26.0, 26.0, 0.0 ]
}