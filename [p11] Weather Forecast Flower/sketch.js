//API 변수선언
gu_List = [];
dong_List = [];

let sel_gu ;
let sel_dong ;

let gu = "마포구";
let dong = "신수동";
  
let latitude = 59;
let longtitude = 126;

let rainForm;
let hum;
let sky;
let skyName;
let tem;
let wind;

//꽃 변수선언
let month = 5;
let date=28;
let petalNum = month;
let bgPetals = [];

let isGoingDown = true;

let petalSize = 10;

let moveRange;
let velX;

//API
function preload() {
  data = loadJSON('location5.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  posX=0;

  flowerColor();
  
  //효과 꽃잎 제작
  for (let i=0; i<50; i++) {
    bgPetals[i] = new bgPetal(
      random(0), random(0), random(-5,5), random(10,50), random(0.4,0.8), random(0.4,0.8))
  }
  
  sort_gu();
  make_sel_gu();
}


function draw(){

  if (sky==1) {
    background(80,195,255);
  } else if (sky==3) {
    background(222,245,255);
  } else if (sky==4) {
    background(170,170,170);
  }

  //background(255);

  
  a = latitude+'_'+longtitude+'.json';
  loadJSON(a,getdata2);

  
  //정보텍스트
  textSize(25);
  fill(0);
  textAlign(LEFT);
  text("서울특별시 "+gu+" "+dong,width*0.05,height*0.07);
  textAlign(RIGHT);
  text("풍속 : "+wind+"m/s",width*0.95,height*0.07)
  text("기온 : "+tem+"도",width*0.95,height*0.12);
  text("습도 : "+hum+"%",width*0.95,height*0.17);
  text("하늘 상태 : "+skyName,width*0.95,height*0.22);
  //text("강수 형태 : "+rainForm,width*0.95,height*0.27);
  
  //풍속 설정
  if (wind<4){
    moveRange=map(wind,0,3.9,0,0.1);
    velX=map(wind,0,3.9,0,0.0009);
  } else if(wind>=4 && wind<9){
    moveRange=map(wind,4,8.9,0.1,0.8);
    velX=map(wind,4,8.9,0.0009,0.005);
  } else if(wind>=9 && wind<14){
    moveRange=map(wind,9,13.9,0.8,1);
    velX=map(wind,9,13.9,0.005,0.05);
  } else {
    moveRange=1.5;
    velX=0.1;
  }
  
  petalSize = map(hum,0,100,-10,40);

  
  trunk(); //줄기
  moving_flower();
  
  push();
  translate(width/2,height*0.65);
  flower(); //꽃
  pop();
  
  fill(flowerColor);
  //효과꽃잎
  for (let i=0; i<50; i++) {
    bgPetals[i].move();
    bgPetals[i].render();
  }
}

//구 목록 만들기
function sort_gu() {
  for (i=1; i<453; i++) {
    if (gu_List.includes(data[i][1])) {
      continue;
    } else {
      gu_List.push(data[i][1]);
    }
  }
}

//구 선택창 만들기
function make_sel_gu() {
  sel_gu = createSelect();
  sel_gu.position(width*0.05, height*0.1);
  for (i=0; i<gu_List.length; i++){
    sel_gu.option(gu_List[i]);
  }
  sel_gu.changed(gu_select_event);
}

function gu_select_event() { 
  dong_List = []; //동 목록 초기화
  dong = ""; //동 이름 초기화
  gu = sel_gu.value();
  for (i=1; i<453; i++) {
    if(data[i][1] == gu) {
      if(dong_List.includes(data[i][2])){
        continue;
      } else {
        dong_List.push(data[i][2])
      }
    }else {
      continue;
    }
  }
  //동 선택창 만들기
  sel_dong = createSelect();
  sel_dong.position(width*0.05,height*0.15);
  for (i=0; i<dong_List.length; i++) {
    sel_dong.option(dong_List[i]);
  }
  sel_dong.changed(dong_select_event);
}

function dong_select_event() {
  
  dong = sel_dong.value();
  for (i=1; i<453; i++) {
    if (data[i].includes(dong)) {
      latitude = data[i][3];
      longtitude = data[i][4];
      break;
    }
  }
  
  //flowerColor();
  //효과 꽃잎 제작
  for (let i=0; i<50; i++) {
    bgPetals[i] = new bgPetal(
      random(0), random(0), random(-5,5), random(10,50), random(0.4,0.8), random(0.4,0.8))
  }
  
  fill(flowerColor);
  //효과꽃잎
  for (let i=0; i<50; i++) {
    bgPetals[i].move();
    bgPetals[i].render();
  }
  
}

//기상 정보 저장
function getdata2(d) {
  let data2 = d;
  //강수형태 파악
  for (i=0; i<12; i++) {
    if (data2.records[i].category == "PTY") {
      rainForm = data2.records[i].fcstValue;
      break;
    }
  }
  
  //습도 파악
  for (i=0; i<12; i++) {
    if (data2.records[i].category == "REH") {
      hum = data2.records[i].fcstValue;
      break;
    }
  }
  
  //하늘 상태 파악
  for (i=0; i<12; i++) {
    if (data2.records[i].category == "SKY") {
      sky = data2.records[i].fcstValue;
      break;
    }
  }
  //하늘 네이밍
  if (sky==1) {
    skyName = "맑음";
  } else if (sky==3) {
    skyName = "구름많음";
  } else if (sky==4) {
    skyName = "흐림"
  }
  
  //기온 파악
  for (i=0; i<12; i++) {
    if (data2.records[i].category == "T3H") {
      tem = data2.records[i].fcstValue;
      break;
    }
  }
  
  //풍속 파악
  for (i=0; i<12; i++) {
    if (data2.records[i].category == "WSD") {
      wind = data2.records[i].fcstValue;
      break;
    }
  }
  
  //꽃 색깔 결정
  m = 12;
  if ((m>=1 && m<=5)||(m==11 || m==12)) { //추울때
    var red = 35;
    var blue = 212;
    var green = map(tem,-10.6,28.2,0,255);
  } else { //따뜻할때
    var red = 255;
    var blue = 0;
    var green = map(tem,4.7,36.8,255,0);
  }
  flowerColor = color(red,green,blue);
  
}

//꽃
//꽃잎 모양 결정
function petalShape(x,y) {
  beginShape();
  vertex(0+x,0+y);
  bezierVertex(40+x+petalSize,50+y,40+x+petalSize,110+y,0+x,160+y);
  bezierVertex(-40+x-petalSize,110+y,-40+x-petalSize,50+y,0+x,0+y);
  endShape();
}

//배경 꽃잎 속성
function bgPetal(x,y,vx,vy,Xsz,Ysz) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.Xsz = Xsz;
  this.Ysz = Ysz;
  this.move = function () {
    this.x += this.vx;
    this.y += this.vy;
  }
  this.render = function() {
    noStroke();
    push();
    translate(width/2,height*0.65);
    rotate(random(TWO_PI));
    scale(Xsz,Ysz);
    petalShape(this.x,this.y);
    pop();
  }
}

function flowerColor() {
//꽃 색깔 결정
  m = 12;
  
  //추울때(11,12,1,2,3,4)
  if ((m>=1 && m<=5)||(m==11 || m==12)) {
    var red = 35;
    var blue = 212;
    var green = map(tem,-10.6,28.2,0,255);
  } else { //따뜻할때(5,6,7,8,9,10)
    var red = 255;
    var blue = 0;
    var green = map(tem,4.7,36.8,255,0);
  }
  
  flowerColor = color(red,green,blue);
  return flowerColor;
}

function moving_flower() {

  
  if(isGoingDown){
    posX += velX;
    
    if(posX>moveRange){
      isGoingDown= false;
    }
  } else {
    posX -= velX;
    if(posX<0){
      isGoingDown = true;
    }
  }
}

//꽃
function flower() {
  stroke(255);
  strokeWeight(0.8);
  fill(flowerColor);
  randomSeed(1);
  x=0; y=0;
  Yangle = map(mouseY,0,height,0.4,0.7);
  scale(1,Yangle);
  rotate(posX);
  for (i=0; i<petalNum; i++) {
    rotate(TWO_PI/petalNum);
    petalShape(0,0);
  }
  
  fill(255,228,120);
  ellipse(0,0,30,30);
}
  
  
function trunk() {
  fill(92,145,57);
  
  // if (petalNum>4) {
  //   noStroke();
  //   triangle(width/2-20,height*0.65,width/2+20,height*0.65,width/2,height*0.75);
  // }
  
  strokeWeight(10);
  stroke(92,145,57);
  noFill();
  beginShape();
  var curve = map(posX,0,1,-10,10);
  vertex(width/2+curve,height*0.65);
  bezierVertex(width/2+curve,height*0.85,width/2+curve,height*0.85,width/2,height);
  endShape();
}

