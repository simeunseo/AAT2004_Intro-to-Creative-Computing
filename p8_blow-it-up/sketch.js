var text1= 'BLOW'
var text2= 'IT UP BLOW IT'
var text3= 'UP MY ROOTS GET'
var text4= 'DEEPER AND MY'
var text5= 'SEED WILL FLY'
var text6= 'FARTHER'
//My roots get deeper.My seed will fly farther.';
var font;
var c,x;
var pnts;


function setup() {
  createCanvas(700,700);
  
  opentype.load('FreeSans.otf',function(err,f) {
    if(err) {
      print(err)
    }else {
      font = f;
      pnts1 = getPoints1(text1);
      pnts2 = getPoints2(text2);
      pnts3 = getPoints3(text3);
      pnts4 = getPoints4(text4);
      pnts5 = getPoints5(text5);
      pnts6 = getPoints6(text6);
    }
  });
}

function draw() {
  if (!font) return;
  background(199,233,255);
  fill(60,49,39);
  rect(0,400,width,height-400);
  
  stroke(31,131,58);
  strokeWeight(5);
  line(350,265,350,450);

  mousex = map(mouseX,0,width,0,100);
  mousey = map(mouseY,0,height,0,100);
  

  
  sw = map(mouseX,0,width,0,255);
  strokeWeight(2);
  stroke(124,82,32);
  line(350,455,200,590);
  line(350,455,325,511);
  stroke(124,82,32,sw);
  line(350,455,250,510);
  stroke(124,82,32);
  line(350,455,488,520);
  line(350,455,510,500);
  stroke(124,82,32,sw);
  line(405,480,450,550);
  line(320,480,290,550);
  line(300,530,350,590);
  line(380,470,380,570);
  for (var i = 0; i < pnts1.length; i++) {   
   amount = map(mouseX,0,width,0,7);
   a = random(-amount,amount);
   pnts1[i].x += a;
   pnts1[i].y += a;
 }
  
  for (var i = 0; i < pnts2.length; i++) {   
 amount = map(mouseX,0,width,0,7);

   pnts2[i].x += random(-amount,amount);
   pnts2[i].y += random(-amount,amount);   
 }
  for (var i = 0; i < pnts3.length; i++) {   
 amount = map(mouseX,0,width,0,7);

   pnts3[i].x += random(-amount,amount);
   pnts3[i].y += random(-amount,amount);   
 }
  
  for (var i = 0; i < pnts4.length; i++) {   
 amount = map(mouseX,0,width,0,7);

   pnts4[i].x += random(-amount,amount);
   pnts4[i].y += random(-amount,amount);   
 }

  for (var i = 0; i < pnts5.length; i++) {   
 amount = map(mouseX,0,width,0,7);

   pnts5[i].x += random(-amount,amount);
   pnts5[i].y += random(-amount,amount);   
 }  
  for (var i = 0; i < pnts6.length; i++) {   
 amount = map(mouseX,0,width,0,7);

   pnts6[i].x += random(-amount,amount);
   pnts6[i].y += random(-amount,amount);   
 }  
  
  fill(255);
  stroke(255);
  strokeWeight(0.5);
  
  translate(150,260);
  
  beginShape();
  
 var prevX = 0,
 prevY = 0,
 indSave = 0;
 for (var i = 0; i < pnts1.length; i++) {

 endShape();
 beginShape();
 indSave = i;

 vertex(pnts1[i].x-3,pnts1[i].y-2);
 vertex(pnts1[i].x, pnts1[i].y);
 vertex(pnts1[i].x+3, pnts1[i].y-2);
 line(pnts1[i].x,pnts1[i].y,pnts1[i].x,pnts1[i].y+5);

 }

 for (var i = 0; i < pnts2.length; i++) {

 endShape();
 beginShape();
 indSave = i;

 vertex(pnts2[i].x-3,pnts2[i].y-2);
 vertex(pnts2[i].x, pnts2[i].y);
 vertex(pnts2[i].x+3, pnts2[i].y-2);
 line(pnts2[i].x,pnts2[i].y,pnts2[i].x,pnts2[i].y+5);

 }
 for (var i = 0; i < pnts3.length; i++) {

 endShape();
 beginShape();
 indSave = i;

 vertex(pnts3[i].x-3,pnts3[i].y-2);
 vertex(pnts3[i].x, pnts3[i].y);
 vertex(pnts3[i].x+3, pnts3[i].y-2);
 line(pnts3[i].x,pnts3[i].y,pnts3[i].x,pnts3[i].y+5);

 }
 for (var i = 0; i < pnts4.length; i++) {

 endShape();
 beginShape();
 indSave = i;

 vertex(pnts4[i].x-3,pnts4[i].y-2);
 vertex(pnts4[i].x, pnts4[i].y);
 vertex(pnts4[i].x+3, pnts4[i].y-2);
 line(pnts4[i].x,pnts4[i].y,pnts4[i].x,pnts4[i].y+5);

 } 
 for (var i = 0; i < pnts5.length; i++) {

 endShape();
 beginShape();
 indSave = i;

 vertex(pnts5[i].x-3,pnts5[i].y-2);
 vertex(pnts5[i].x, pnts5[i].y);
 vertex(pnts5[i].x+3, pnts5[i].y-2);
 line(pnts5[i].x,pnts5[i].y,pnts5[i].x,pnts5[i].y+5);

 }  
 for (var i = 0; i < pnts6.length; i++) {

 endShape();
 beginShape();
 indSave = i;

 vertex(pnts6[i].x-3,pnts6[i].y-2);
 vertex(pnts6[i].x, pnts6[i].y);
 vertex(pnts6[i].x+3, pnts6[i].y-2);
 line(pnts6[i].x,pnts6[i].y,pnts6[i].x,pnts6[i].y+5);

 }
}

function getPoints1() {
 fontPath = font.getPath(text1, 155, -130, 30);
 var path = new g.Path(fontPath.commands);
 path = g.resampleByLength(path, 2);
 textW = path.bounds().width;
 // remove all commands without a coordinate
 for (var i = path.commands.length - 1; i >= 0; i--) {
 if (path.commands[i].x == undefined) {
 path.commands.splice(i, 1);
 }
 }
 return path.commands;
}
function getPoints2() {
 fontPath = font.getPath(text2, 100, -100, 30);
 var path = new g.Path(fontPath.commands);
 path = g.resampleByLength(path, 2);
 textW = path.bounds().width;
 // remove all commands without a coordinate
 for (var i = path.commands.length - 1; i >= 0; i--) {
 if (path.commands[i].x == undefined) {
 path.commands.splice(i, 1);
 }
 }
 return path.commands;
}
function getPoints3() {
 fontPath = font.getPath(text3, 60, -70, 30);
 var path = new g.Path(fontPath.commands);
 path = g.resampleByLength(path, 2);
 textW = path.bounds().width;
 // remove all commands without a coordinate
 for (var i = path.commands.length - 1; i >= 0; i--) {
 if (path.commands[i].x == undefined) {
 path.commands.splice(i, 1);
 }
 }
 return path.commands;
}
function getPoints4() {
 fontPath = font.getPath(text4, 75, -40, 30);
 var path = new g.Path(fontPath.commands);
 path = g.resampleByLength(path, 2);
 textW = path.bounds().width;
 // remove all commands without a coordinate
 for (var i = path.commands.length - 1; i >= 0; i--) {
 if (path.commands[i].x == undefined) {
 path.commands.splice(i, 1);
 }
 }
 return path.commands;
}
function getPoints5() {
 fontPath = font.getPath(text5, 88, -10, 30);
 var path = new g.Path(fontPath.commands);
 path = g.resampleByLength(path, 2);
 textW = path.bounds().width;
 // remove all commands without a coordinate
 for (var i = path.commands.length - 1; i >= 0; i--) {
 if (path.commands[i].x == undefined) {
 path.commands.splice(i, 1);
 }
 }
 return path.commands;
}
function getPoints6() {
 fontPath = font.getPath(text6, 130, 20, 30);
 var path = new g.Path(fontPath.commands);
 path = g.resampleByLength(path, 2);
 textW = path.bounds().width;
 // remove all commands without a coordinate
 for (var i = path.commands.length - 1; i >= 0; i--) {
 if (path.commands[i].x == undefined) {
 path.commands.splice(i, 1);
 }
 }
 return path.commands;
}
