let video;
let w = 320;
let h = 240;
let t = "interactive";
let x, y;
let speedX = 3;
let speedY = 3;
let customFont;

function preload() {
  customFont = loadFont('Bebas.ttf');
}

function setup() {
  createCanvas(w, h);
  video = createCapture(VIDEO);
  video.size(w, h);
  video.hide();
  
  x = width / 2;
  y = height / 2;
}

function draw() {
  image(video, 0, 0, width, height);
  video.loadPixels();
  
  let brightestX = 0;
  let brightestY = 0;
  let brightestValue = 0;
  
  for (let i = 0; i < video.width; i++) {
    for (let j = 0; j < video.height; j++) {
      let index = (i + j * video.width) * 4;
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let brightness = r + g + b; 
      
      if (brightness > brightestValue) {
        brightestValue = brightness;
        brightestX = i;
        brightestY = j;
      }
    }
  }
  
  x += speedX;
  y += speedY;
  
  if (x <= 0 || x >= width) {
    speedX *= -1;
  }
  if (y <= 0 || y >= height) {
    speedY *= -1;
  }
  
  textSize(32);
  textAlign(CENTER, CENTER);
  textFont(customFont);
  fill(255, 0, 0);
  text(t, x, y);
}
