let myFont;
const ourWord = "Moo";
let pointArray;

function preload() {
  myFont = loadFont("Bigail.ttf");
}

function setup() {
  createCanvas(400, 400);
  background(0);

  pointArray = myFont.textToPoints(ourWord, 70, 
    218,  135, { sampleFactor: 0.2 });

  // find min and max y values to determine top and bottom
  let minY = min(pointArray.map(pt => pt.y));
  let maxY = max(pointArray.map(pt => pt.y));

  for (let i = 0; i < pointArray.length; i++) {
    // map y position to circle size (smaller at the top, larger at the bottom)
    let size = map(pointArray[i].y, minY, maxY, 2, 6);

    // set color based on x position
    if (pointArray[i].x < width / 1.8) {
      fill(0, 255, 0); // green
    } else {
      fill(255, 0, 0); // red
    }

    circle(pointArray[i].x, pointArray[i].y, size);
  }
}

function draw() {}
