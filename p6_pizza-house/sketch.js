var slider;
var potato;
var pepperoni;
var olive;
var cheese;

function setup() {
  createCanvas(500,500);
  
  colorMode(HSB, 360, 100, 100);
  
  color_slider = createSlider(0,360,360,1);
  color_slider.position(30,60);
  
  cheese_slider = createSlider(180,300,300,10);
  cheese_slider.position(30,30);
  cheese_slider.changed(drawCircle);
  
  drawCircle();
  
  button1 = createButton('potato');
  button1.position(color_slider.x+150,color_slider.y);
  button1.mousePressed(potato);
  
  button2 = createButton('pepperoni');
  button2.position(cheese_slider.x+150,cheese_slider.y);
  button2.mousePressed(pepperoni);
  
  button3 = createButton('olive');
  button3.position(button2.x+80,cheese_slider.y);
  button3.mousePressed(olive);
  
  button4 = createButton('cheese');
  button4.position(button1.x+58,color_slider.y);
  button4.mousePressed(cheese);
}

function drawCircle() {
  background(255);
  fill(10,10,100);
  noStroke();
  ellipse(250,280,330,330);
  
  length = cheese_slider.value();
  noStroke();
  //접시
  fill(28,31,74); 
  arc(250, 302, 197, 67, 0, TWO_PI);
  
  //밑판
  //빵
  fill(34,68,56); 
  arc(250, 302, 187, 57, 0, TWO_PI-QUARTER_PI);
  //치즈
  fill(50, 80, 100);
  arc(250, 300, 180, 50, 0, TWO_PI-QUARTER_PI);
  
  //늘어나는치즈
  stroke(50,80,100);
  strokeWeight(2);
  line(273,length-23,273,277);
  
  //조각
  //빵
  fill(34,68,56);
  arc(250,length+2,180,50,-QUARTER_PI,0);
  //치즈
  fill(50,80,100);
  arc(248,length,180,50,-QUARTER_PI,0);
  
  //늘어나는치즈
  stroke(50,80,100);
  strokeWeight(1);
  line(252,length,250,300);
  strokeWeight(3);
  line(280,length,280,300);
  strokeWeight(2);
  line(295,length,295,300);
  strokeWeight(2.7);
  line(320,length,320,300); 
  
  //간판
  
}

function draw(){
  
  var color = color_slider.value();
  noStroke();
  fill(color,50,80);
  rect(180,360,140,30);
  triangle(180,360,180,375,170,360);
  triangle(180,375,180,390,170,390);
  triangle(320,360,320,375,330,360);
  triangle(320,375,320,390,330,390);
  
  stroke(100);
  strokeWeight(1);
  textSize(16);
  fill(100);
  text('PIZZA HOUSE',200,380);
}

function potato() {
  fill(40,40,90);
  noStroke();
  arc(270,length-5,50,random(18,22),-QUARTER_PI,0);
  for (i=QUARTER_PI/4; i<TWO_PI-QUARTER_PI*1.8; i+=QUARTER_PI*0.8) {
  var x = 250+random(35,54)*cos(i);
  var y = 302+random(3,8)*sin(i);
  var start = i;
  var end = i+QUARTER_PI*0.5;
  arc(x,y,50,30,start,end)
  }
}

function pepperoni() {
  fill(354,90,80);
  noStroke();
  ellipse(295,length-12,20,8);
  for (i=QUARTER_PI/4; i<TWO_PI-QUARTER_PI*1.8; i+=QUARTER_PI*0.8) {
  var x = 250+55*cos(i);
  var y = 302+15*sin(i);
  ellipse(x,y,20,8);
  }
}

function olive() {
  stroke(97,38,16);
  strokeWeight(2);
  noFill();
  ellipse(random(280,310),length-random(5,9),10,3);
  ellipse(random(280,278),length-random(12,15),10,3);
  for (i=QUARTER_PI*0.8; i<TWO_PI-QUARTER_PI*1.8; i+=QUARTER_PI*0.8) {
  var x = 250+random(40,70)*cos(i);
  var y = 302+random(7,18)*sin(i);
  ellipse(x,y,10,3);
  }
}
  
function cheese() {
  fill(50,80,100);
  arc(248,length,180,50,-QUARTER_PI,0);
  arc(250, 300, 180, 50, 0, TWO_PI-QUARTER_PI);
  }
