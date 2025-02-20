let customFont;
let angleOffset = 0; // controls the oscillation

function preload() {
  customFont = loadFont('Bebas.ttf');
}

function setup() {
  createCanvas(400, 400);
  textSize(100);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  fill(255);
  
  let txt = "cat";
  
  // Get the points of the text, now centered in the middle of the canvas
  let points = customFont.textToPoints(txt, width / 2 - textWidth(txt) / 3.5, height / 2.7 + 60, 180, {
    sampleFactor: 0.1, // Density of points (lower for more points)
    simplifyThreshold: 0
  });
  
  // Draw the furry edges attached to the text with swaying tail effect
  drawFurryEdges(points);
  
  // Update the tail motion
  angleOffset += 0.09; // Control the speed of the swaying
}

function drawFurryEdges(points) {
  for (let i = 0; i < points.length; i++) {
    let x = points[i].x;
    let y = points[i].y;
    
    for (let j = 0; j < 5; j++) { //loop 5 times to create 5 fur strands for each text point
      let angle = noise(x * 0.05, y * 0.05) * TWO_PI; // Perlin noise based on position
      let r = noise(x * 0.05, y * 0.05) * 10; // Fur length varies based on noise
      
      let x1 = x + random(-1, 1);  // Slight random displacement
      let y1 = y + random(-1, 1);
      
      // Apply sine-based swaying to the tail points
      let sway = sin(angleOffset + x * 0.05) * 20; // Sine-based side-to-side motion
      
      let x2 = x1 + cos(angle) * r + sway; // add swaying offset to the x position
      let y2 = y1 + sin(angle) * r;

      stroke(255, 255, 255, 200); // softer white for the fur effect
      line(x1, y1, x2, y2);
    }
  }
}
