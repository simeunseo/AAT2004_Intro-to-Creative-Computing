let movie;
var mode = 'A';
let myFont;

function preload() {
  //movie = createVideo('video.mp4');
  //movie.hide();
  //movie.play();
  movie = loadImage('picture.jpg');

  myFont = loadFont('VT323-Regular.ttf');
}

function setup() {
  createCanvas(movie.width+200,movie.height+200);
  movie.loadPixels();

  //image(movie,0,0);
}

function draw() {
  background(0);

  push();
  translate(100, 100);

  switch (mode) {
    case 'A':
      amount = map(mouseX,0,width,0,5);
  for (let posY=0;posY<movie.height;posY+=5){
    for (let posX=0;posX<movie.width;posX+=5){
      let id = (posX+movie.width*posY)*4;
      let red = movie.pixels[id];
      let green = movie.pixels[id+1];
      let blue = movie.pixels[id+2];
      let c1 = color(red,0,0);
      let c2 = color(0,green,0);
      let c3 = color(0,0,blue);
      let c4 = color(red,green,blue);

      blendMode(LIGHTEST);
      noStroke();
      fill(c1);
      rect(posX,posY-amount,5,5);
      fill(c2);
      rect(posX-amount,posY,5,5);
      fill(c3);
      rect(posX,posY,5,5);
        }
      }
      break;

    case 'B':
      let a = map(mouseX, 0, width, 20, 50);
      let amounts = [-a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, a];
      for (let posY = 0; posY < movie.height; posY +=5) {
        for (let posX = 0; posX < movie.width; posX +=5) {

          let id = (posX + movie.width * posY) * 4;
          let red = movie.pixels[id];
          let green = movie.pixels[id + 1];
          let blue = movie.pixels[id + 2];

          let c1 = color(red, green, blue);

          noStroke();
          fill(c1);
          rect(posX, posY,5 + random(amounts),10);

        }
      }
      break;
  }
    pop();
    fill(0);
    rect(0, 0, movie.width + 100, 100);
    rect(0, movie.height + 100, movie.width + 100, 100);
    rect(0, 0, 100, movie.height + 100);
    rect(movie.width + 100, 0, 100, movie.height + 100);

    fill(0);
    textFont(myFont);
    textSize(50);
    text("Play", 120, 150);

    var y = year();
    var m = 'DEC';
    var d = day();
    text(m+'. '+d+' '+y,475,390);
    var h = hour();
    var m2 = minute();
    if (h>12) {
      h -= 12
    }
    if (h>=0&&h<12) {
      text(0,595,340);
    }
    if (m2>=0&&m2<10) {
      text(0,655,340);
    }
    text(h+':'+m2,615,340);    
    noStroke();
    triangle(215, 120, 215, 150, 242, 135);
}

function keyPressed() {
  switch (key) {
    case '1':
      mode = 'A';
      break;
    case '2':
      mode = 'B';
      break;
  }
}