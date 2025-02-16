let myFont;
const ourWord = "Moo";
let pointArray;

function preload() {
  myFont = loadFont("Bigail.ttf");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  
  pointArray = myFont.textToPoints(ourWord, 70, 217, 135, { sampleFactor: 0.2 });

  //  min and max x values in pointArray
  let minX = min(pointArray.map(pt => pt.x));
  let maxX = max(pointArray.map(pt => pt.x));
  let splitX = (minX + maxX) / 1.8; // Midpoint for color split

  for (let i = 0; i < pointArray.length; i++) {
    let size = i < 5 ? 5 : 5;

   // if the point is to the left of the middle, make it green, otherwise red
    if (pointArray[i].x < splitX) {
      fill(0, 255, 0); // Green
    } else {
      fill(255, 0, 0); // Red
    }
  
    circle(pointArray[i].x, pointArray[i].y, size);
  }
}

function draw() {}
