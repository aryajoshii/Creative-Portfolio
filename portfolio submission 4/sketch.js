var a = 70;
var b = 80;
var c = 500; //setting variables for different positions on the canvas, as the values will change as you interact with the code

function setup() {
  createCanvas(1000, 1000); 
}

function draw() {
  background(194, 220, 240);
  fill(224, 194, 240); // making a light purple platform to catch the ball
  rect(a, 800, 250, 40);
  fill(240, 194, 215); // pink ball to fall from the top of the screen
  ellipse(c, b, 125, 125);

  if(c > a - 40 && c < a + 200) { 
    if(b > 720 && b < 800) {
      while(b > 0) {
        b = b - 2; // moves the ball down 
      }
      c = random(50, 350);
    }
  }

  b = b + 2;

}

function keyPressed() {
  if (keyCode === RIGHT_ARROW){ // when you press the right arrow key the platform moves 25 coordinates to the right
    a = a + 25;
  } else if(keyCode === LEFT_ARROW){ // moves to the left
    a = a - 25;
  } else (keyCode === DOWN_ARROW);{ // moves the platform down
    b = b - 25;
  }
  return false;
}
