var url; //승하차 인원 API
var url_home;
var index; //역 인덱스
var max_ride; //최대 승차인원
var min_ride; //최소 승차인원
var max_alight; //최대 하차인원
var min_alight; //최소 하차인원
var popuColor_ride; //승차인원에 따른 도형 밝기
var popuColor_alight; //하차인원에 따른 도형 밝기
var bigone; //승차인원과 하차인원 중에 큰 값
var smallone; //승차인원과 하차인원 중에 작은 값
var popuSize_ride; //승차인원에 따른 도형 크기
var popuSize_alight; //하차인원에 따른 도형 크기
var homebutton; //홈버튼 이미지
var easy;
var tough;
var label;
var page; //홈버튼 눌렀을 때 페이지 바꾸기 위한 변수. true가 되면 홈바탕.

var min_sum;
var tmp_sum;

var dirx = [];
var diry = [];

var rad;
var rat;
var x;
var y;


function preload() {
  var url = 'http://openapi.seoul.go.kr:8088/696b674747726b6436307475586c6e/json/CardSubwayStatsNew/11/60/20191204';
  //역 별 승하차인원
  loadJSON(url, popu);
  var url_home = 'http://openapi.seoul.go.kr:8088/4656446248686c62323646766e5a74/json/StationDstncReqreTimeHm/1/44/2/';
  //역 별 구간거리(시간)
  loadJSON(url_home, home);

  homebutton = loadImage('homebutton.png');
  easy = loadImage('easy.png');
  tough = loadImage('tough.png');
  label = loadImage('label.png');
}

//data 가져오기
function popu(data) {
  popu = data.CardSubwayStatsNew;
}

function home(data) {
  home = data.StationDstncReqreTimeHm;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 360, 100, 100);
  background(360);

  rad = windowHeight * 0.3;
  rat = (TWO_PI * (tmp_sum / min_sum));
  x = windowWidth * 0.5;
  y = windowHeight * 0.5;
  page = true;

  min_sum = 0;
  for (var i = 0; i < 44; i++) {
    min_sum += home.row[i].MNT;
  }

  tmp_sum = 0;

  index = 39; //인덱스 디폴트
}

function draw() {
  if (page === true) {
    drawhome();

  } else if (page === false) {
    colorMode(RGB);
    background(255);
    showdata();
    basic_shape();
    info_text();
  }
}

function drawhome() {
  colorMode(RGB);
  background(0, 170, 80);
  noStroke();
  textAlign(LEFT);
  textSize(20);
  tmp_sum = 0;
  image(label, width / 2 - 100, height / 2 - 50, 200, 100);
  for (var i = 0; i < 44; i++) {
    tmp_sum += home.row[i].MNT;
    push();
    translate(width / 2, height / 2);
    rotate(2 * PI * tmp_sum / min_sum);
    if (i === 43) {
      fill(255);
      ellipse(rad, 0, 40);
      fill(0);
      text(popu.row[0].SUB_STA_NM, rad + 30, 0);

    } else {

      if (popu.row[i].RIDE_PASGR_NUM > popu.row[i].ALIGHT_PASGR_NUM) fill(255);
      else fill(255, 192, 0);
      ellipse(rad, 0, 40);
      fill(0);
      text(popu.row[i].SUB_STA_NM, rad + 30, 0);
    }
    pop();
  }

}

function showdata() {
  //승차 최대최솟값 알아내기
  var max_ride = 0;
  var min_ride = 5000;
  for (i = 0; i < 42; i++) {
    max_ride = max(max_ride, popu.row[i].RIDE_PASGR_NUM);
    min_ride = min(min_ride, popu.row[i].RIDE_PASGR_NUM);
  }
  //하차 최대최솟값 알아내기
  var max_alight = 0;
  var min_alight = 5000;
  for (i = 1; i < 43; i++) {
    max_alight = max(max_alight, popu.row[i].ALIGHT_PASGR_NUM);
    min_alight = min(min_alight, popu.row[i].ALIGHT_PASGR_NUM);
  }
  //승하차 인원수에 따라 색 맵핑
  popuColor_ride = map(popu.row[index].RIDE_PASGR_NUM, min_ride, max_ride, 90, 40);
  popuColor_alight = map(popu.row[index].ALIGHT_PASGR_NUM, min_alight, max_alight, 90, 40);

  //승하차 인원수에 따라 크기 맵핑
  bigone = max(popu.row[index].ALIGHT_PASGR_NUM, popu.row[index].RIDE_PASGR_NUM);
  smallone = min(popu.row[index].ALIGHT_PASGR_NUM, popu.row[index].RIDE_PASGR_NUM);
  popuSize_ride = map(popu.row[index].RIDE_PASGR_NUM, smallone - 100, bigone + 100, 0.1 * width, 0.25 * width);
  popuSize_alight = map(popu.row[index].ALIGHT_PASGR_NUM, smallone - 100, bigone + 100, 0.1 * width, 0.25 * width);
  //승차 반원 그리기
  colorMode(HSL);
  fill(45, 100, popuColor_ride);
  arc(width / 2, height / 2 + 0.020 * width, popuSize_ride, popuSize_ride, 0, PI);
  //하차 반원 그리기
  fill(45, 100, popuColor_alight)
  arc(width / 2, height / 2 - 0.020 * width, popuSize_alight, popuSize_alight, PI, 0);

  if (popuSize_ride > popuSize_alight) {
    image(tough, 0.75 * width, 0.12 * height, 0.2 * width, 0.05 * width);
  } else {
    image(easy, 0.75 * width, 0.12 * height, 0.2 * width, 0.05 * width);
  }

}

//막대기, 화살표
function basic_shape() {
  noStroke();
  colorMode(RGB);
  fill(0, 176, 80);
  rect(width * 0.1, height / 2 - 0.020 * width, width * 0.75, 0.04 * width); // 긴 막대기
  triangle(width * 0.07, height / 2, width * 0.12, height * 0.42, width * 0.12, height * 0.58); //왼쪽 삼각형
  triangle(width * 0.9, height / 2, width * 0.85, height * 0.42, width * 0.85, height * 0.58); //오른쪽 삼각형
  rect(0, 0, windowWidth, 0.08 * windowHeight); //위 라벨
  rect(0, 0.92 * windowHeight, windowWidth, 0.08 * windowHeight); //아래 라벨
  fill(255);
  strokeWeight(20);
  stroke(0, 176, 80);
  rect(width * 0.425, height / 2 - 0.033 * width, width * 0.15, 0.066 * width); //역 이름 들어가는 상자
  noStroke();

  image(homebutton, 0.03 * windowWidth, 0.93 * windowHeight, 0.03 * windowWidth, 0.03 * windowWidth);
}

//각종 글자들
function info_text() {

  //역 이름
  fill(0);
  textSize(40);
  textAlign(CENTER, CENTER);
  text(popu.row[index].SUB_STA_NM, width / 2, height / 2);

  //승하차인원
  textSize(30);
  fill(255);
  strokeWeight(8);
  stroke(255, 192, 0);
  text("승차인원 : " + popu.row[index].RIDE_PASGR_NUM + "명", width / 2, height * 0.60);
  text("하차인원 : " + popu.row[index].ALIGHT_PASGR_NUM + "명", width / 2, height * 0.40);
  noStroke();

  //이전역
  fill(255);
  textSize(40);
  textAlign(LEFT, CENTER);
  if (index == 0) {
    text(popu.row[42].SUB_STA_NM, width * 0.12, height * 0.5);
  } else {
    text(popu.row[index - 1].SUB_STA_NM, width * 0.12, height * 0.5);
  }

  //다음역
  textAlign(RIGHT, CENTER);
  if (index == 42) {
    text(popu.row[0].SUB_STA_NM, width * 0.85, height * 0.5);
  } else {
    text(popu.row[index + 1].SUB_STA_NM, width * 0.85, height * 0.5);
  }
}

//역 넘기기
function keyPressed() {
  background(360);
  if (keyCode == LEFT_ARROW) {
    index -= 1;
    if (index < 0) {
      index += 43;
    }

  } else if (keyCode == RIGHT_ARROW) {
    index += 1;
    if (index > 42) {
      index -= 43;
    }
  }
}

//홈버튼 기능
function mousePressed() {
  if (page) {

    var i;
    tmp_sum = 0;
    for (i = 0; i < 44; i++) {
      tmp_sum += home.row[i].MNT;

      if (dist(width / 2 + rad * cos(2 * PI * tmp_sum / min_sum), height / 2 + rad * sin(2 * PI * tmp_sum / min_sum), mouseX, mouseY) < 20) {
        index = i;
        print(mouseX, mouseY, rad, 0);
        page = false;
        break;
      }
    }

  } else {
    if (mouseX > width * 0.03 && mouseX < width * 0.06 && mouseY > height * 0.93 && mouseY < height * 0.93 + 0.03 * width) {
      page = true;
    }
  }
}