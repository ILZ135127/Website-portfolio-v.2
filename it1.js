let font;
let flashingText, neonText, pointText;

function preload() {
  font = loadFont('Bebas.ttf'); // Load a font
}

function setup() {
  createCanvas(400, 400);
  textSize(100);
  textAlign(CENTER, CENTER);
  
  let centerX = width / 1.2 - 130;
  let centerY = height / 2;
  
  flashingText = new FlashingText('LIGHT', centerX, centerY - 60);
  neonText = new NeonText('LIGHT', centerX, centerY);
  pointText = new PointText('LIGHT', centerX, centerY + 60, 100);
}

function draw() {
  background(0);
  
  flashingText.display();
  neonText.display();
  pointText.display();
}

class FlashingText {
  constructor(txt, x, y) {
    this.txt = txt;
    this.x = x;
    this.y = y;
    this.points = font.textToPoints(this.txt, this.x, this.y, 100, { sampleFactor: 0.2 });
  }

  display() {
    noStroke();
    for (let i = 0; i < this.points.length; i++) {
      let p = this.points[i];
      fill(frameCount % 30 < 15 ? 255 : 100);
      ellipse(p.x, p.y, i < 5 ? 5 : 5);
    }
  }
}

class NeonText {
  constructor(txt, x, y) {
    this.txt = txt;
    this.x = x;
    this.y = y;
    this.points = font.textToPoints(this.txt, this.x, this.y, 100, { sampleFactor: 0.2 });
  }

  display() {
    noStroke();
    for (let i = 0; i < this.points.length; i++) {
      let p = this.points[i];
      fill(0, 255, 200);
      ellipse(p.x, p.y, i < 5 ? 5 : 5);
    }
  }
}

class PointText {
  constructor(txt, x, y, size) {
    this.txt = txt;
    this.x = x;
    this.y = y;
    this.size = size;
    this.points = font.textToPoints(this.txt, this.x, this.y, this.size, { sampleFactor: 0.2 });
  }

  display() {
    noStroke();
    for (let i = 0; i < this.points.length; i++) {
      let p = this.points[i];
      fill(random(255), random(255), random(255));
      ellipse(p.x, p.y, i < 5 ? 5 : 5);
    }
  }
}


