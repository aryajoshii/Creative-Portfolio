//I've never coded before!! 

function setup(){
  createCanvas(640, 640); 
  // setting the size of my drawing space
}

function draw(){
  background(250);
  noStroke();


//creating a background pattern, I found a reference online to use for this
  for(let x = 0; x<= width; x+=40) {
    //this is how far apart in width the circles are from each other, they overlap a bit
  for(let y = 0; y<= height; y+=40){
    //the change in height between each circle

  fill(200, x*0.6, x*0.8);
  // the fill has to be multiplied with each circle, so that there is a smooth gradient effect
  ellipse(x, y+20, 60, 60);

  fill(150, x*0.6, x*0.8);
  // same colour formula for the inner circle, to create a gradient
  ellipse(x+5, y+22, 30, 30);
  }
}

//this is my main shape in the middle of the screen
    stroke(197, 27, 86);
    strokeWeight(15);
    fill(243, 185, 205);
    circle(320, 320, 400);
    //makes the outer ring with a dark pink outline

    stroke(197, 27, 86);
    strokeWeight(15);
    fill(2255, 47, 119);
    arc(320, 320, 400, 400, 0, PI);
    // this arc formula makes a semi circle, I struggled a bit to figure this out

    stroke(253, 236, 242);
    strokeWeight(15);
    fill(243, 185, 205);
    circle(320, 320, 200);

    stroke(253, 236, 242);
    strokeWeight(15);
    fill(255, 47, 119);
    circle(320, 320, 200);

    stroke(253, 236, 242);
    strokeWeight(15);
    fill(243, 185, 205);
    arc(320, 320, 200, 200, 0, PI);

    stroke(253, 236, 242);
    strokeWeight(10);
    fill(197, 27, 86);
    quad(320, 350, 350, 320, 320, 290, 290, 320);
    // I found this shape challenging to make because I had to figure out where to put the points 
    // of the square so it looked rotated the way I wanted it to.
}