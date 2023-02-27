let mic;
let img;

//소영 변수선언
let lavas = [];
let volcanos = [];

//영훈 변수선언
let savedLava = [];
let volcanoX
let volcanoY
let maxLava = 5000

//image load
function preload() {
  volcano_inside = loadImage('volcano_inside.png');
  volcano_outside = loadImage('volcano_outside.png');
  volcano_hide = loadImage('volcano_hide.png');
}

function setup() {
  let canvasWidth = 4814 / 3598 * windowHeight;
  createCanvas(canvasWidth, windowHeight);

  //Audio input
  mic = new p5.AudioIn();
  mic.start();

  frameRate(20);

  //소영lavas  
  for (let i = 0; i < 800; i++) {
    let x = random(canvasWidth/2);
    let y;
    let r = random(15, 35);
    lavas[i] = new Lava(x, y, r);
  }
  //소영volcano
  for (let i = 0; i < 250; i++) {
    let x = random(canvasWidth / 4 - 20, canvasWidth / 4 + 20);
    let y;
    let r = random(15, 30);
    volcanos[i] = new Volcano(x, y, r);
  }

  //영훈 변수선언
  volcanoX = canvasWidth *0.75;
  volcanoY = windowHeight * 0.4

  // 영훈 savedLava 생성
  for (i = 0; i <= maxLava; i += 1) {
    savedLava[i] = new lava(volcanoX, random(volcanoY, windowHeight));
  }
  
}

function draw() {
  
  background(0);
  let canvasWidth = 4814 / 3598 * windowHeight;
  //sound
  let inputSound = mic.getLevel();
  
  
  //image
  image(volcano_inside, 0, 0, canvasWidth/2, windowHeight);
  
  //소영
  //lavas function
  for (let i = 0; i < lavas.length; i++) {
    lavas[i].move();
    lavas[i].show();
  }
  //volcanos function
  for (let i = 0; i < volcanos.length; i++) {
    volcanos[i].move();
    volcanos[i].show();
  }

  image(volcano_outside, canvasWidth/2, 0, canvasWidth/2,windowHeight);
  
  //영훈
  let drawinglava = map(inputSound, 0.2, 1, 1000, maxLava);
  for (var i = 0; i < drawinglava; i++) {
    savedLava[i].moveLava();
    savedLava[i].drawLava();
  }
  image(volcano_hide, 0, 0, canvasWidth/2, windowHeight);
}


//소영lava
class Lava {

  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    //volume mapping
    let vol = mic.getLevel();
    let h = map(vol, 0, 1, windowHeight, windowHeight / 1.2);

    this.x = this.x + random(-5, 5);
    this.y = random(h - windowHeight / 2, h);
  }

  show() {
    stroke(255);
    strokeWeight(0.1);
    var r = random(100, 225);
    var g = random(0, 50);
    fill(r, g, 0);
    ellipse(this.x, this.y + windowHeight / 2.5, this.r);
  }
}

//소영volcano
class Volcano {

  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  move() {
    let vol = mic.getLevel();
    let h = map(vol, 0, 1, windowHeight, 0);
    this.x = this.x + random(-1, 1);
    this.y = random(h - windowHeight / 2.5, h + windowHeight / 3.5);
  }

  show() {
    stroke(255);
    strokeWeight(0.1);
    var r = random(100, 225);
    var g = random(0, 50);
    fill(r, g, 0);
    ellipse(this.x, this.y * 1.5, this.r);
  }
}

//영훈
function lava(x, y) {
  let canvasWidth = 4814 / 3598 * windowHeight;
  this.x = x;
  this.y = y;
  this.c = color(255, random(0, 100), 0);
  this.moveLava = function() {
    let rangeX = map(this.y, volcanoY, windowHeight, 10, canvasWidth *0.7840466);
    let speedLava = map(mic.getLevel(), 0, 1, 3, 120)


    switch (true) {
      case this.y >= canvasWidth:
        this.x = volcanoX;
        this.y = volcanoY;
        break;

      case abs(this.x - volcanoX) > rangeX:
        this.x = random(volcanoX - rangeX, volcanoX + rangeX);
        break;

      case true:
        this.y += speedLava + random(0, 200)
        this.x += random(-75, 75);
        break;
    }
  }

  this.drawLava = function() {
    fill(this.c);
    noStroke();
    let sizeLava = map(mic.getLevel(), 0, 1, 10, 30)
    ellipse(this.x, this.y, sizeLava, sizeLava);
  }
}
