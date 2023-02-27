var formResolution = 15;
var stepSize = 2;
var initRadius = 150;
var centerX;
var centerY;
var x = [];
var y = [];
var freeze = false;
let img;

function preload() {
  img = loadImage('logo-1.png');
}

function setup() {
 createCanvas(1000,700);
 // init shape
 centerX = width / 2;
 centerY = height / 2;
 var angle = radians(360 / formResolution);
 for (var i = 0; i < formResolution; i++) {
 x.push(cos(angle * i) * initRadius);
 y.push(sin(angle * i) * initRadius);
 }
  

 stroke(0, 50);
 strokeWeight(3);
 noFill();
 background(255);
}
function draw() {
   image(img,100,50,800,500);

 // floating towards mouse position
 centerX += (mouseX - centerX) * 0.01;
 centerY += (mouseY - centerY) * 0.01;
 // calculate new points
 for (var i = 0; i < formResolution; i++) {
 x[i] += random(-stepSize, stepSize);
 y[i] += random(-stepSize, stepSize);
 }

 translate(centerX, centerY);
 beginShape();
 // first controlpoint
 curveVertex(x[formResolution - 1], y[formResolution - 1]);
 // only these points are drawn
 for (var i = 0; i < formResolution; i++) {
 curveVertex(x[i], y[i]);
 }
 curveVertex(x[0], y[0]);
 // end controlpoint
 curveVertex(x[1], y[1]);
 endShape();

}
function mousePressed() {
 // init shape on mouse position
 centerX = mouseX;
 centerY = mouseY;
 var angle = radians(360 / formResolution);
 for (var i = 0; i < formResolution; i++) {
 x[i] = cos(angle * i) * initRadius;
 y[i] = sin(angle * i) * initRadius;
   
   a = color(76,183,222,50);
   b = color(255,224,64,50);
   c = color(255,64,64,50);
   d = color(121,121,121,50);
   let 색깔 = [a,b,c,d];
   stroke(random(색깔));
 
 }
}
function keyReleased() {
 if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
 // pause/play draw loop
 if (key == 'f' || key == 'F') freeze = !freeze;
 if (freeze) {
 noLoop();
 } else {
 loop();
 }
} 