let myFont;
const ourWord = "Moo";
let pointArray;

function preload() {
  myFont = loadFont("Bigail.ttf");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  
  pointArray = myFont.textToPoints(
    ourWord, 
    70, 
    217, 
    135,                          
    { sampleFactor: 0.2 }
  );
  
  noStroke(); 
}

function draw() {
  background(0); 
  
  for (let i = 0; i < pointArray.length; i++) {
    let size = (i < 10) ? 5 : 5;
    let x = pointArray[i].x;
    let y = pointArray[i].y;
    
    let d = dist(mouseX, mouseY, x, y); // calculate distance to mouse

    // ff the mouse is close enough, increase the size of the circle
    if (d < 30) {
      size = 22; // bigger circle when hovering over it
    }

    fill(252, 0, 0); // set the color for the circles
    circle(x, y, size); // draw the circle with updated size
  }
}
