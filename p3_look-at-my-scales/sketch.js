let fish;
let snake;
let shell;
var mode = 'FISH';

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(120,220,220);
  fish = loadImage('fish.png');
  snake = loadImage('snake.png');
  shell = loadImage('shell.png');
}

function draw() {

  background(170,240,240);
  randomSeed(0);
  
  var delta = map(mouseY,0,windowHeight,15,80);
  
  for(y=0;y<windowHeight*2;y+=delta) {
    for(x=windowWidth*2;x>0;x-=delta) {
        noStroke();
        fill(random(120,175),random(200,255),random(200,255));
        arc(x,y,delta+random(70,100),delta+random(30,50),-QUARTER_PI,QUARTER_PI); 
        
        noFill();
        stroke(255);
        strokeWeight(random(1,15));
        ellipse(x+random(0,100),y+random(0,100),5,5);
    }
  }
  
  switch(mode) {
    case 'FISH' : image(fish,0,0,windowWidth,windowHeight);
    break;
    case 'SHELL' : image(shell,0,0,windowWidth,windowHeight);
    break;
    case 'SNAKE' : image(snake,0,0,windowWidth,windowHeight);
  }
}

function keyPressed() {
  switch(key) {
    case '1' : mode = 'FISH';
    break;
    case '2' : mode = 'SHELL';
    break;
    case '3' : mode = 'SNAKE';
    break
  }
}
      