let i = 0;

function preload(){ //I struggled for a while to get my own font choice to work.
  MyFont = loadFont('PlayfairDisplay-VariableFont_wght.ttf');
 // I wanted to use a different font for this, so I downloaded this off Google Fonts and preloaded it into my sketch
}

//Text from 'A Thousand Splendid Suns' by Khaled Hosseini. I compiled a few different quotes from the book so that the passage is longer
const BookText = "One could not count the moons that shimmer on her roofs, or the thousand splendid suns that hide behind her walls. She is the noor of my eyes and the sultan of my heart."
const textArray = BookText.split(" ");
//makes my text into a list of words so it can display one by one on the screen.

function setup() {
  createCanvas(1000, 1000);
  frameRate(5); //changes the speed of the words appearing on the screen 
}

function draw() {
  let x = random(width);
  let y = random(height);

  if (i < textArray.length) {
    fill(0);
    stroke(100);
    console.log(i);
    textFont(MyFont)
    textSize(50);
    textAlign(CENTER, CENTER);
    text(textArray[i], x, y);
    i++;
  }else{
    i=0;
    background(255, 199, 115); 
  }
}
  
//I tried to add a drawing of a rotating sun to my sketch to make it more interesting, but I couldn't manage to get it working. If I had more time I would have fixed this.
  //drawSun(width / 2, height / 3.3, 220);

  //let x = random(width);
  //let y = random(height);

//function drawSun(centerX, centerY, radius){
  //noStroke();
  //fill("#b4481a");
  //circle(centerX, centerY, radius);

  //let numberOfTriangles = 10;
  //let distance = 140;
  //let triangleSize = 20;
  //let rotationSpeed = 0.002;
  //drawSunRays(centerX, centerY, numberOfTriangles, distance, triangleSize, rotationSpeed);
//}

//function drawSunRays(centerX, centerY, numberOfTriangles, distance, triangleSize, rotationSpeed){
  //for(let i = 0; i < numberOfTriangles; i++){
    //let angle = map(i, 0, numberOfTriangles, 0, TWO_PI);
    //let x = centerX + cos(angle+ sunRaysOffset);
    //triangle(-triangleSize, triangleSize, triangleSize, triangleSize, 0, -triangleSize);
    //pop();
  //}
  //sunRaysOffset += rotationSpeed;
//}

//function drawWave(color, waveHeight, xScale, yScale, offsetSpeed) {
  //if(!(color in wavesStartOffset)){
    //wavesStartOffset[color] = 0;
  //}
  //stroke(color);
  //for(let i = 0; i < width; i++){
   // let y = yScale * sin(i * xScale + wavesStartOffset[color]) + waveHeight;
    //line(i, height, i, height - y);
  //}
  //wavesStartOffset[color] += offsetSpeed;
//}

