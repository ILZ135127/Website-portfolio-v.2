let video;
let w = 320;
let h = 240;

let thresholdVal = 0.50;
let t = "interactive"; // Text to be animated
let x, y;
let customFont;

function preload() {
  // Load your custom font (replace with the correct path to your font file)
  customFont = loadFont('Bebas.ttf');
}

function setup() {
  createCanvas(w, h);
  video = createCapture(VIDEO);
  video.size(w, h); // Set the video feed size to match the canvas
  
  x = width / 2; // Start text position at the center horizontally
  y = 1; // Start text position at the top vertically
}

function draw() {
  background(220);
  image(video, 0, 0); // Display the webcam feed
  
  filter(THRESHOLD, thresholdVal); // Apply threshold filter to webcam feed
  
  // Get the pixel color at position (x, y)
  let color = video.get(x, y);
  let b = brightness(color); // Get brightness of that pixel
  
  // If brightness is greater than the threshold, move text down
  if (b > thresholdVal * 100) {
    y += 1;
  } else {
    // If brightness is less, move text up
    if (y > 0 && b < thresholdVal * 100) {
      y -= 1;
      color = video.get(x, y); // Update color for new y position
      b = brightness(color); // Update brightness
    }
  }
  
  // Draw the text with your custom font
  fill(255, 0, 0); // Set text color to red
  textSize(30); // Set text size
  textFont(customFont); // Use your custom font
  text(t, x, y); // Draw the text at (x, y)
}
