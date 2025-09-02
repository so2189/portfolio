let myP5; // store p5 instance

function startCanvas() {
  if (myP5) return; // prevent multiple inits

  myP5 = new p5((p) => {
    let ellipses = [];
    const count = 10;

    p.setup = () => {
      let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      canvas.parent('canvas-container');
      p.colorMode(p.HSB);
      p.noStroke();

      for (let n = 0; n < count; n++) {
        ellipses.push(makeEllipse(p));
      }
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    p.draw = () => {
      p.clear();
      ellipses.forEach(e => {
        e.move();
        e.checkBounds();
        e.draw();
      });
    };

    function makeEllipse(p) {
      let diameter = p.map(p.windowWidth, 0, 2000, 10, 50);
      return {
        position: { x: p.random(p.width / 4, p.width / 2), y: p.random(p.height / 4, p.height) },
        velocity: { x: p.random(-1, 1), y: p.random(-1, 1) },
        diameter: diameter,
        fillColor: p.color(p.random(150, 250), p.random(150, 210), p.random(150, 220), 0.3),
        rotation: p.random(p.TWO_PI),
        rotationSpeed: p.random(-0.01, 0.01),
        move() {
          this.position.x += this.velocity.x;
          this.position.y += this.velocity.y;
          this.rotation += this.rotationSpeed;
        },
        draw() {
          p.fill(this.fillColor);
          let radius = 45;
          p.push();
          p.translate(this.position.x, this.position.y);
          p.rotate(this.rotation);
          petal(0, 0, radius, p);
          p.pop();
        },
        checkBounds() {
          if (this.position.x >= p.width - this.diameter / 0.5 || this.position.x <= this.diameter / 0.5)
            this.velocity.x *= -1;
          if (this.position.y >= p.height - this.diameter / 0.5 || this.position.y <= this.diameter / 0.5)
            this.velocity.y *= -1;
        }
      };
    }

    function petal(x, y, r, p) {
      p.beginShape();
      p.curveVertex(x, y);
      p.curveVertex(x, y - r * 0.2);
      p.curveVertex(x + r * 0.4, y - r);
      p.curveVertex(x, y - r * 2);
      p.curveVertex(x - r * 0.4, y - r);
      p.curveVertex(x, y - r * 0.2);
      p.curveVertex(x, y);
      p.endShape();
    }
  });
}