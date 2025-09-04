let myP5; // store p5 instance

function startCanvas() {
  if (myP5) return; // prevent multiple inits

  myP5 = new p5((p) => {
    let ellipses = [];
    const count = 30;

    p.setup = () => {
      let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      canvas.parent("canvas-container");

      p.colorMode(p.HSB);
      p.fill(255); // white fill
      p.stroke(0); // gray outline
      p.strokeWeight(1);

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
      const padding = diameter / 2;
      const baseFill = p.color(255);
      const baseStroke = p.color(0);

      return {
        position: { 
          x: p.random(padding, p.width - padding), 
          y: p.random(padding, p.height - padding) 
        },
        velocity: { x: p.random(-1, 1), y: p.random(-1, 1) },
        diameter: diameter,
        rotation: p.random(p.TWO_PI),
        rotationSpeed: p.random(-0.01, 0.01),
        currentFill: baseFill,
        currentStroke: baseStroke,
        move() {
          this.position.x += this.velocity.x;
          this.position.y += this.velocity.y;
          this.rotation += this.rotationSpeed;
        },
        draw() {
          const d = p.dist(p.mouseX, p.mouseY, this.position.x, this.position.y);
          const hover = d < this.diameter;

          const targetFill = hover ? baseStroke : baseFill;
          const targetStroke = hover ? baseFill : baseStroke;
          this.currentFill = p.lerpColor(this.currentFill, targetFill, 0.1);
          this.currentStroke = p.lerpColor(this.currentStroke, targetStroke, 0.1);

          p.push();
          p.translate(this.position.x, this.position.y);
          p.rotate(this.rotation);
          p.fill(this.currentFill);
          p.stroke(this.currentStroke);
          petal(0, 0, 45, p);
          p.pop();
        },
        checkBounds() {
          if (this.position.x >= p.width - padding || this.position.x <= padding)
            this.velocity.x *= -1;
          if (this.position.y >= p.height - padding || this.position.y <= padding)
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
