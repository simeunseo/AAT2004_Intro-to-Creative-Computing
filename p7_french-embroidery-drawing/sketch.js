let bg;
let mode = 'running';
var reset = 0;

function preload() {
  bg = loadImage('background.jpg');
}

function setup() {

  colorMode(HSB, 360, 100, 100);
  
  color_slider = createSlider(0,360,360,1);
  color_slider.position(30,60);
  
  bright_slider = createSlider(0,100,100,1);
  bright_slider.position(30,90);
  
  size_slider = createSlider(0,10,0,1);
  size_slider.position(200,60);
  
  createCanvas(1000, 1000);
  background(0);
  cursor(CROSS);
  x = mouseX;
  y = mouseY;
  strokeWeight(4);
  image(bg,0,0,1000,1000);
}

function draw() {

  var color = color_slider.value();
  var bright = bright_slider.value();
  var size = size_slider.value();
  
  noStroke();
  fill(color,50,bright);
  rect(20,50,320,80);
  
  stroke(color,50,bright);
  
  switch(mode) {
    case 'running':
    
     if (mouseIsPressed && mouseButton == LEFT) {
       var d = dist(x, y, mouseX, mouseY);
       if (d>20+size) {
         var angle = atan2(mouseY - y, mouseX - x);
         push();
         translate(x, y);
         rotate(angle);
         line(0,0,7+size,0);
         pop();

         x = x + cos(angle) * (20+size);
         y = y + sin(angle) * (20+size);
        } 
       break;
      }
    case 'outline':
      if (mouseIsPressed && mouseButton == LEFT) {
       var d = dist(x, y, mouseX, mouseY);
       if (d>10+size) {
         var angle = atan2(mouseY - y, mouseX - x);
         push();
         translate(x, y);
         rotate(angle);
         line(0,0,7+size,1);
         pop();

         x = x + cos(angle) * (9+size);
         y = y + sin(angle) * (9+size);
        }
      }
      break;
    case 'french_knot':
      if (mouseIsPressed && mouseButton == LEFT) {
        push();
        translate(x,y);
        noFill();
        ellipse(0,0,7,7);
        pop();
      }
      break;
    case 'fly':
      if (mouseIsPressed && mouseButton == LEFT) {
        push();
        var d = dist(x,y,mouseX,mouseY);
          if (d>20) {
            var angle = atan2(mouseY - y, mouseX - x);
            translate(x,y);
            rotate(angle);
            line(0,0,5+size,5+size);
            line((5+size)*2,0,5+size,5+size);
            line(5+size,5+size,5+size,(5+size)*2);
            pop();
            
            x = x + cos(angle) * (20+size);
            y = y + sin(angle) * (20+size);
          }
      }
    break;
    
    case 'lazydaisy':
      if (mouseIsPressed && mouseButton == LEFT) {
        push();
        var d = dist(x, y, mouseX, mouseY);
           if (d>10+size) {
             var angle = atan2(mouseY - y, mouseX - x);
             push();
             translate(x, y);
             rotate(angle);
             noFill();
             ellipse(0,0,5+size,15+(size*3));
             pop();

             x = x + cos(angle) * (10+size);
             y = y + sin(angle) * (10+size);
           }
      }
      break;
      
      case 'bullion' :
      if (mouseIsPressed && mouseButton == LEFT) {
        push();
        var d = dist(x, y, mouseX, mouseY);
           if (d>4.5) {
             var angle = atan2(mouseY - y, mouseX - x);
             push();
             translate(x, y);
             rotate(angle);
             noFill();
             ellipse(0,0,0,7);
             pop();

             x = x + cos(angle) * 4.5;
             y = y + sin(angle) * 4.5;
           }
      }
      break;
     

        
  }
        if (reset == 1) {
        image(bg,0,0,1000,1000);
        reset = 0;
      }
}
      
function mousePressed() {
 x = mouseX;
 y = mouseY;
} 



function keyPressed() {
  switch(key) {
    case '1' : mode = 'running';
    break;
    case '2' : mode = 'outline';
    break;
    case '3' : mode = 'french_knot';
    break;
    case '4' : mode = 'fly';
    break;
    case '5' : mode = 'lazydaisy';
    break;
    case '6' : mode = 'bullion';
    break;
  }
  
  if (keyCode === BACKSPACE) {
    reset +=1;
    print(reset);
  }
}