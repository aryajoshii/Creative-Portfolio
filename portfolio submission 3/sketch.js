function setup(){
  createCanvas(windowWidth, windowHeight);
  background(184, 217, 255); //I tried a light blue background this time, as most of my other projects are pink.

  let space = random(30, 100);
  fill(255, 184, 207);
  for(x=0; x<width+50; x+=space){
    for(y=0; y<height+50; y+=space){
      triangle(x, y-30, x-3, y-10, x+3, y-10); //These triangles together form a star type shape
      triangle(x, y+30, x-3, y+10, x+3, y+10);
      triangle(x-30, y, x-10, y-3, x-10, y+3);
      triangle(x+30, y, x+10, y-3, x+10, y+3);
    }
  }
  for
  (x=space/2; x<width+50;x+=space){
    for
  (y=space/2;y<height+50;y+=space){
    triangle(x,y-30,x-3,y-10,x+3,y-10);
    triangle(x, y+30, x-3, y+10, x+3, y+10);
    triangle(x-30, y, x-10, y-3, x-10, y+3);
    triangle(x+30, y, x+10, y-3, x+10, y+3);
    }
  }
}