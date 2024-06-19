let opacity = 0;
let fadeInSpeed = 1;

function setup() {
  createCanvas(1080, 1920);
}

function draw() {
  background(243, 240, 231);

  if (opacity < 255) {
    opacity += fadeInSpeed;
  }

  let showLogoElement = document.querySelector(".show-logo");
  if (showLogoElement) {
    showLogoElement.style.opacity = opacity / 255;
  }
}
