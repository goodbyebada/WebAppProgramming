let imagesArr = [];
let currentImageIndex = 0;
let nextImageIndex = 1;
let changeInterval = 180;
// 이미지 변경 간격 (프레임 수)
let transitionFrames = 60;
// 전환에 걸리는 프레임 수
let alpha = 0; // 알파 값

function preload() {
  let path = "images/jordan_shoes/";

  imagesArr.push(loadImage(path + "jordanShoe_back.png"));
  imagesArr.push(loadImage(path + "jordanShoe_bottom.png"));
  imagesArr.push(loadImage(path + "jordanShoe_left.png"));
  imagesArr.push(loadImage(path + "jordanShoe_leftRight.png"));
  imagesArr.push(loadImage(path + "jordanShoe_Right.png"));
  imagesArr.push(loadImage(path + "jordanShoe_up.png"));
}

function setup() {
  let canvas = createCanvas(515, 485);
  canvas.parent("Jordan-img");
}

function draw() {
  background(243, 240, 231);

  // 현재 이미지
  tint(255, 255 - alpha); // 알파값을 조정하여 페이드아웃 효과
  image(imagesArr[currentImageIndex], 0, 0, width, height);

  tint(255, alpha); // 알파값을 조정하여 페이드인 효과
  image(imagesArr[nextImageIndex], 0, 0, width, height);

  if (frameCount % changeInterval === 0) {
    nextImageIndex = (currentImageIndex + 1) % imagesArr.length;
    alpha = 0;
  }

  if (alpha < 255) {
    alpha += 255 / transitionFrames;
  } else {
    currentImageIndex = nextImageIndex;
  }
}
