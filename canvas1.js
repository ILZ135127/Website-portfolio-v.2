let myFont;
const ourWord = "Moo";
let pointArray;

function preload() {
  myFont = loadFont("./Comic Sans.ttf");
}

function setup() {
  createCanvas(400, 400).parent("canvas1");
  background(0);
  
  pointArray = myFont.textToPoints(ourWord, 70, 218, 135, { sampleFactor: 0.2 });

  // find min and max x values in pointArray
  let minX = min(pointArray.map(pt => pt.x));
  let maxX = max(pointArray.map(pt => pt.x));
  let splitX = (minX + maxX) / 2; // Midpoint for color split

  for (let i = 0; i < pointArray.length; i++) {
    let size = i < 5 ? 5 : 5;

    // Use map() to determine smooth transition of colors
    let inter = map(pointArray[i].x, minX, maxX, 0, 1);
    let r = lerp(255, 0,  inter); // Red fades in
    let b = lerp(0, 0, inter); // Green fades out

    fill(r, b, 0);
    circle(pointArray[i].x, pointArray[i].y, size);
  }
}


