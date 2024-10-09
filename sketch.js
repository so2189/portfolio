let ellipses = [];
let count = 8;

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
    move: move,
    draw: drawEllipse,
    checkBounds: checkBounds,
  };
}

function drawEllipse() {
  fill(this.fillColor);
  star(this.position.x, this.position.y, 60, 15, 100);
}

function move() {
  this.position.x += this.velocity.x;
  this.position.y += this.velocity.y;
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



let projTitleElement;
let outputGridElement;
let projectDisplayElement;

let projCollection = [
  {
    "itemTitle": "Fullourish",
    "category": "Web Dev",
    "id": "1",
    "image": "fullourish.png",
    "language": "HTML/CSS"
  },

  {
    "itemTitle": "Cache Simulator",
    "category": "Data Analysis",
    "id": "2",
    "image": "simcache.png",
    "language": "C++"
  },
  {
    "itemTitle": "405 Stuck in Cyberspace",
    "category": "Creative",
    "id": "3",
    "image": "cyberspace.png",
    "language": "P5JS"
  },
  {
    "itemTitle": "Carrot Catcher",
    "category": "Game Dev",
    "id": "7",
    "image": "carrotcatcher.png",
    "language": "GML"
  },
  {
    "itemTitle": "Interactive STEM Mural",
    "category": "Creative",
    "id": "7",
    "image": "mural.jpeg",
    "language": "C"
  },
  {
    "itemTitle": "CatCam",
    "category": "Mobile Dev",
    "id": "4",
    "image": "catcam.png",
    "language": "Swift"
  },
  {
    "itemTitle": "iAct",
    "category": "Mobile Dev",
    "id": "5",
    "image": "iAct.png",
    "language": "Swift"
  },
  {
    "itemTitle": "TandonStudy",
    "category": "Web Dev",
    "id": "6",
    "image": "tandonstudy.png",
    "language": "HTML/CSS"
  },
  {
    "itemTitle": "Tic-Tac-Toe Game",
    "category": "Data Analysis",
    "id": "7",
    "image": "tic_tac_toe.png",
    "language": "R"
  },
  {
    "itemTitle": "Galton Board Simulation",
    "category": "Data Analysis",
    "id": "8",
    "image": "galton_board.jpg",
    "language": "R"
  },
  {
    "itemTitle": "Number Line ML Model",
    "category": "Data Analysis",
    "id": "9",
    "image": "number_line.jpg",
    "language": "R"
  },
  {
    "itemTitle": "Inverse Probability Weighting, Sensitivity Analysis",
    "category": "Data Analysis",
    "id": "10",
    "image": "sensitivity_analysis.png",
    "language": "R"
  },
  {
    "itemTitle": "Audio Synthesizer and Reactive Visualizer",
    "category": "Creative",
    "id": "11",
    "image": "audio_vis.jpg",
    "language": "Max"
  },
  {
    "itemTitle": "Breakout Game",
    "category": "Game Dev",
    "id": "12",
    "image": "breakout.jpg",
    "language": "p5js"
  },
  {
    "itemTitle": "FruitDrop Game",
    "category": "Game Dev",
    "id": "13",
    "image": "fruitdrop.jpg",
    "language": "p5js"
  },
  {
    "itemTitle": "Motivational Bookshelf",
    "category": "Creative",
    "id": "14",
    "image": "bookshelf.png",
    "language": "Arduino"
  }
];

function filterSelection(category) {
  outputGridElement.innerHTML = "";

  for (let i = 0; i < projCollection.length; i++) {
    if (category === 'all' || projCollection[i]["category"] === category) {
      createProjectPreview(projCollection[i]);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  projTitleElement = document.getElementById("pageTitle");
  outputGridElement = document.getElementById("outputGrid");
  projectDisplayElement = document.getElementById("projectDisplay");

  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let urlSection = urlParams.get('section');
  let urlID = urlParams.get('id');

  if (urlSection != "item") {

    for (let i = 0; i < projCollection.length; i++) {
      if (projCollection[i]["category"] == urlSection || urlSection == "" || urlSection == null) {
        createProjectPreview(projCollection[i]);
      }
    }

  }

  document.querySelector(".btn.active").addEventListener("click", function () {
    filterSelection('all', 'all');
  });
});

function createProjectPreview(incomingJSON) {
  let newPreviewLink = document.createElement("A");
  newPreviewLink.href = incomingJSON["bio"];

  let newPreviewElement = document.createElement("DIV");
  newPreviewLink.appendChild(newPreviewElement);

  let newPreviewThumbnail = document.createElement("IMG");
  newPreviewThumbnail.classList.add("thumbnail");
  newPreviewThumbnail.src = incomingJSON["image"];
  newPreviewElement.appendChild(newPreviewThumbnail);

  let newPreviewTitle = document.createElement("P");
  newPreviewTitle.classList.add("previewTitle");
  newPreviewTitle.innerText = incomingJSON["itemTitle"];
  newPreviewElement.appendChild(newPreviewTitle);

  let newPreviewData = document.createElement("DATA");
  newPreviewData.classList.add("previewData");
  newPreviewData.innerText = incomingJSON["language"];
  newPreviewElement.appendChild(newPreviewData);

  outputGridElement.appendChild(newPreviewLink);
}

