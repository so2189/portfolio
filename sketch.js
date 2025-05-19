let ellipses = [];
let count = 10;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-container'); // Set parent to the new container
  colorMode(HSB);
  noStroke();

  for (let n = 0; n < count; n++) {
    ellipses.push(makeEllipse());
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  ellipses.forEach(ellipse => {
    ellipse.move();
    ellipse.checkBounds();
    ellipse.draw();
  });
}

function makeEllipse() {
  let minDiameter = 10; // Set a minimum diameter
  let maxDiameter = 50; // Set a maximum diameter

  // Calculate the diameter based on the window width
  let diameter = map(windowWidth, 0, 2000, minDiameter, maxDiameter);

  return {
    position: { x: random(width / 4, width / 2), y: random(height / 4, height) },
    velocity: { x: random(-1, 1), y: random(-1, 1) },
    diameter: diameter,
    fillColor: color(random(150, 250), random(150, 210), random(150, 220), 0.3),
    rotation: random(TWO_PI),
    rotationSpeed: random(-0.01, 0.01),
    move: move,
    draw: drawEllipse,
    checkBounds: checkBounds,
  };
}

function drawEllipse() {
  fill(this.fillColor);
  let radius = 45;
  push();
  translate(this.position.x, this.position.y);
  rotate(this.rotation);
  petal(0, 0, radius);
  pop();
}

function move() {
  this.position.x += this.velocity.x;
  this.position.y += this.velocity.y;
  this.rotation += this.rotationSpeed;
}

function checkBounds() {
  if (
    this.position.x >= width - this.diameter / 0.5 ||
    this.position.x <= this.diameter / 0.5
  ) {
    this.velocity.x *= -1;
  }

  if (
    this.position.y >= height - this.diameter / 0.5 ||
    this.position.y <= this.diameter / 0.5
  ) {
    this.velocity.y *= -1;
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function petal(x, y, r) {
  beginShape();
  curveVertex(x, y);
  curveVertex(x, y - r * 0.2);
  curveVertex(x + r * 0.4, y - r);
  curveVertex(x, y - r * 2);
  curveVertex(x - r * 0.4, y - r);
  curveVertex(x, y - r * 0.2);
  curveVertex(x, y);
  endShape();
}