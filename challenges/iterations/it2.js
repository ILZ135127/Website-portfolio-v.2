function preload() {
  // Load your custom font (replace 'assets/font.ttf' with the path to your font)
  customFont = loadFont('Bigail.ttf');
}

function setup() {
  createCanvas(400, 400);
  textSize(100);
  textAlign(CENTER, CENTER);
  noLoop();
}

function draw() {
  background(0);
  fill(255);
  
  let txt = "cat";
  
  // Get the points of the text, now centered in the middle of the canvas
  let points = customFont.textToPoints(txt, width / 2 - textWidth(txt) / 3, height / 3 + 80, 150, {
    sampleFactor: 0.1, // Density of points (lower for more points)
    simplifyThreshold: 0
  });
  
  // Draw the fur attached to the text
  drawFurryEdges(points);
}

function drawFurryEdges(points) {
  for (let i = 0; i < points.length; i++) {
    let x = points[i].x;
    let y = points[i].y;
    
    for (let j = 0; j < 5; j++) { // Number of fur strands per point
      let angle = noise(x * 0.05, y * 0.05) * TWO_PI; // Perlin noise based on position
      let r = noise(x * 0.05, y * 0.05) * 10; // Fur length varies based on noise
      
      let x1 = x + random(-2, 2);  // Slight random displacement
      let y1 = y + random(-3, 2);
      let x2 = x1 + cos(angle) * r;
      let y2 = y1 + sin(angle) * r;

      stroke(255, 255, 255, 180); // Softer white for the fur effect
      line(x1, y1, x2, y2);
    }
  }
}