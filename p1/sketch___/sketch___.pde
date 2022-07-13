String mood = "";
int eraser = 0;
int first = 0; //창을 바꾸기 위한 변수
int r1 = 0;
int g1 = 0;
int b1 = 0;

int r2 = 0;
int g2 = 0;
int b2 = 0;

void setup() {
  frameRate(500);
  size (1000,1000);
  background(255);
  textSize(30);
  fill(0);
  text("How do you feel today?",100,600);
  text("Please describe it as an integer from 0 to 100.",100,640);
  rect(100,660,100,50); /// 기분 입력 칸
  text("and press <ENTER>.",220,695);
  textSize(20);
  text("(The better you feel, the closer to 100)",100,740);
  
  text("What color do you like the most?",300,160);
  text("q : Red up  w : Green up   e : Blue up",300,210);
  text("Q : Red down  W : Green down   E : Blue down",300,240);
  text("What color do you hate the most?",300,370);
  text("a : Red up  s : Green up   d : Blue up",300,420);
  text("A : Red down  S : Green down   D : Blue down",300,450);

  
  fill(r1,g1,b1); // 좋아하는 색 고르기
  ellipse(170,200,150,150);
  fill(r2,g2,b2); // 싫어하는 색 고르기 
  ellipse(170,400,150,150);
  
  }


void keyPressed() {
  if (key == ' ') { // 지우개 기능
    if (eraser == 0) {
      eraser = 1;
    }
    else {
      eraser = 0;
    }
  }
  
  if (first != 1) { // 첫 페이지에서만 실행
  if (key == '1' || key =='2' || key == '3' || key == '4' || key == '5' || key == '6' || key == '7' || key == '8' || key == '9' || key == '0') {
    mood += key; // 기분 입력받기
    fill(255);
    textSize(45);
    text(mood, 108, 700);
  }
  if (key == 'q') { // 좋아하는 색 고르기
    r1 += 2;
    fill(r1,g1,b1);
    ellipse(170,200,150,150);
  }
  
  if (key == 'w') {
    g1 += 2;
    fill(r1,g1,b1);
    ellipse(170,200,150,150);
  }
  
  if (key == 'e') {
    b1 += 2;
    fill(r1,g1,b1);
    ellipse(170,200,150,150);
  }
  
  if (key == 'Q') {
    r1 -= 2;
    fill(r1,g1,b1);
    ellipse(170,200,150,150);
  }
  
  if (key == 'W') {
    g1 -= 2;
    fill(r1,g1,b1);
    ellipse(170,200,150,150);
  }
  
  if (key == 'E') {
    b1 -= 2;
    fill(r1,g1,b1);
    ellipse(170,200,150,150);
  }
  ///
  // 싫어하는 색 고르기
  if (key == 'a') {
    r2 += 2;
    fill(r2,g2,b2);
    ellipse(170,400,150,150);
    println(r1);
  }
  
  if (key == 's') {
    g2 += 2;
    fill(r2,g2,b2);
    ellipse(170,400,150,150);
  }
  
  if (key == 'd') {
    b2 += 2;
    fill(r2,g2,b2);
    ellipse(170,400,150,150);
  }
  
  if (key == 'A') {
    r2 -= 2;
    fill(r2,g2,b2);
    ellipse(170,400,150,150);

  }
  
  if (key == 'S') {
    g2 -= 2;
    fill(r2,g2,b2);
    ellipse(170,400,150,150);
  }
  
  if (key == 'D') {
    b2 -= 2;
    fill(r2,g2,b2);
    ellipse(170,400,150,150);
  }
  }
  ///
  
  if (key == ENTER) {  //두번째 창으로 넘어가기
    rect(0,0,1000,1000);
    first += 1; 
  }
  
 
}


void draw() {
  
if (first == 1) { //오늘의 기분에 맞춘 색 설정
  int mood2 = Integer.parseInt(mood);
  float r3 = r2+ (r1-r2)*(mood2*0.01);
  float g3 = g2+ (g1-g2)*(mood2*0.01);
  float b3 = b2+ (b1-b2)*(mood2*0.01);

  fill(r3,g3,b3);
  noStroke();
  ellipse(100,100,100,100);
  textSize(25);
  text("This is your today's color!",170,95);
  text("Enjoy your painting.",170,130);
  textSize(15);
  text("Press space bar to use eraser",60,185);
  
  for (float i=0; i<width; i++) { //상단 그라데이션바 만들기
    float vr = r2+ (r1-r2)*(i*0.00102);
    float vg = g2+ (g1-g2)*(i*0.00102);
    float vb = b2+ (b1-b2)*(i*0.00102);
    strokeWeight(10);
    stroke(vr,vg,vb);
    line(i,0,i,20);
  }
    
  if (mousePressed) {
    if (eraser == 1) { //지우개 기능
      strokeWeight(8);
      stroke(255);
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
    else { //그리기 기능
      strokeWeight(5);
      stroke(r3,g3,b3);
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }
  }
}
