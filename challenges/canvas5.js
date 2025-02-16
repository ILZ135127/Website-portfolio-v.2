let myFont;
const ourWord = "Moo";
let pointArray = [];
let timeOffset = 0;

function preload() {
  myFont = loadFont("Bigail.ttf");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  
  // convert text into points
  pointArray = myFont.textToPoints(ourWord, 70, 218, 135, { sampleFactor: 0.3 });
}

function draw() {
  background(0);

  // loop through the points and make them move in a wave pattern using sin
  for (let i = 0; i < pointArray.length; i++) {
    let p = pointArray[i];

    // adding  sin motion to the Y-coordinate
    let floatY = sin(frameCount * 0.03 + p.x * 0.1) * 10;  // Wave effect on Y

    // slight movement using perlin noise for variation
    let noiseX = noise(p.x * 0.03, frameCount * 0.04 + i * 0.04) * 2 - 2;
    let noiseY = noise(p.y * 0.01, frameCount * 0.04 + i * 0.04) * 2 - 5;

     //applied noise and sin wave to position
    let x = p.x + noiseX;
    let y = p.y + noiseY + floatY;

    let size = (i % 2 === 0) ? 5 : 5; 
    fill((i % 2 === 0) ? 252 : 255, 0, 0); 

    circle(x, y, size);
  }
}
