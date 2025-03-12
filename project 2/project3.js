let video;
let w = 320;
let h = 240;
let t = "interactive";
let x, y;
let speedX = 3;
let speedY = 3;
let customFont;
let points = [];
let trailLength = 10; // Number of points in the trail

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
 
  // Extracts the brightest pixel position (same as original code)
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

  // Move the text
  x += speedX;
  y += speedY;
  if (x <= 0 || x >= width) {
    speedX *= -1;
  }
  if (y <= 0 || y >= height) {
    speedY *= -1;
  }

  // Add the current position of the text to the points array
  let currentPoints = fontToPoints(t, x, y, 32, {
    sampleFactor: 0.25
  });
  points.push(currentPoints);

  // Keep only the last 'trailLength' points
  if (points.length > trailLength) {
    points.shift();
  }

  // Draw the trail (shadows)
  noFill();
  stroke(255, 0, 0, 100); // Red shadow with some transparency
  for (let i = 0; i < points.length; i++) {
    let alpha = map(i, 0, points.length, 100, 50);
    stroke(255, 0, 0, alpha); // Fade out the older points
    beginShape();
    for (let pt of points[i]) {
      vertex(pt.x, pt.y);
    }
    endShape(CLOSE);
  }

  // Draw the current text on top of the trail
  textSize(32);
  textAlign(CENTER, CENTER);
  textFont(customFont);
  fill(255, 0, 0);
  text(t, x, y);
}

// Converts text to points (using textToPoints)
function fontToPoints(text, x, y, size, options) {
  return customFont.textToPoints(text, x, y, size, options);
}
