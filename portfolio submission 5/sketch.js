let img;
let capture;
let video;
let playing = false;

function preload() {
  img = loadImage("media background.png"); //loading my image of a camera screen into the sketch
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  img.resize(windowWidth, windowHeight)
  capture = createCapture(VIDEO);
  capture.size(500, 340);
  video = createVideo('ditl1.mov'); //this is my own footage from social media, which I have added onto the phone template
  video.hide();
  video.play();
}

function draw() {
  background(255)
  image(video, 5, 5, 420, 1000);
  image(img, 0, 0);
  image(capture, 900, 320, 500, 340);
  image(video, 357, 150, 320, 600);
}

function mousePressed(){
  if (playing) {
    video.pause(); //video pauses when mouse is clicked
  } else {
    video.loop();
    }
  playing = !playing;
}
