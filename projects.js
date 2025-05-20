let projTitleElement;
let outputGridElement;
let projectDisplayElement;

let projCollection = [

  {
    "itemTitle": "Fantasy Sports Database",
    "category": "Fullstack",
    "id": "1",
    "image": "images/fantasy.png",
    "language": "SQL, PHP, HTML/CSS"
  },

  {
    "itemTitle": "Winfra",
    "category": "Fullstack",
    "id": "2",
    "image": "images/winfra.png",
    "language": "PostgreSQL, Python, JS"
  },

    {
    "itemTitle": "Java Kahoot",
    "category": "Fulstack",
    "id": "23",
    "image": "images/java_kahoot.png",
    "language": "Java"
  },

  {
    "itemTitle": "Fullourish",
    "category": "Fullstack",
    "id": "3",
    "image": "images/fullourish.png",
    "language": "API, JS, HTML/CSS"
  },


  {
    "itemTitle": "Cache Simulator",
    "category": "Data",
    "id": "4",
    "image": "images/simcache.png",
    "language": "C++"
  },

  {
    "itemTitle": "Inverse Probability Weighting, Sensitivity Analysis",
    "category": "Data",
    "id": "5",
    "image": "images/sensitivity_analysis.png",
    "language": "R"
  },

  {
    "itemTitle": "Self Reflection",
    "category": "Creative",
    "id": "6",
    "image": "images/selfreflection.png",
    "language": "p5js"
  },

  {
    "itemTitle": "405 Stuck in Cyberspace",
    "category": "Creative",
    "id": "7",
    "image": "images/cyberspace.png",
    "language": "p5js"
  },

  {
    "itemTitle": "CatCam",
    "category": "Mobile Dev",
    "id": "8",
    "image": "images/catcam.png",
    "language": "Swift"
  },

  {
    "itemTitle": "iAct",
    "category": "Mobile Dev",
    "id": "9",
    "image": "images/iAct.png",
    "language": "Swift"
  },

  {
    "itemTitle": "TandonStudy",
    "category": "Fullstack",
    "id": "10",
    "image": "images/tandonstudy.png",
    "language": "HTML/CSS"
  },

  {
    "itemTitle": "Tic-Tac-Toe Game",
    "category": "Data",
    "id": "11",
    "image": "images/tic_tac_toe.png",
    "language": "R"
  },

  {
    "itemTitle": "Galton Board Simulation",
    "category": "Data",
    "id": "12",
    "image": "images/galton_board.jpg",
    "language": "R"
  },
  
  {
    "itemTitle": "Number Line ML Model",
    "category": "Data",
    "id": "13",
    "image": "images/number_line.jpg",
    "language": "R"
  },

  {
    "itemTitle": "Audio Synthesizer and Reactive Visualizer",
    "category": "Creative",
    "id": "14",
    "image": "images/audio_vis.jpg",
    "language": "Max"
  },

  {
    "itemTitle": "Breakout Game",
    "category": "Game Dev",
    "id": "15",
    "image": "images/breakout.jpg",
    "language": "p5js"
  },

  {
    "itemTitle": "Fish Frenzy",
    "category": "Game Dev",
    "id": "16",
    "image": "images/fishfrenzy.png",
    "language": "p5js"
  },

  {
    "itemTitle": "CWAZY CUPCAKES",
    "category": "Creative",
    "id": "17",
    "image": "images/cupcakes.png",
    "language": "p5js"
  },

  {
    "itemTitle": "FruitDrop Game",
    "category": "Game Dev",
    "id": "18",
    "image": "images/fruitdrop.jpg",
    "language": "p5js"
  },

  {
    "itemTitle": "Carrot Catcher",
    "category": "Game Dev",
    "id": "19",
    "image": "images/carrotcatcher.png",
    "language": "GML"
  },

  {
    "itemTitle": "Motivational Bookshelf",
    "category": "Creative",
    "id": "20",
    "image": "images/bookshelf.png",
    "language": "Arduino"
  },

  {
    "itemTitle": "Interactive STEM Mural",
    "category": "Creative",
    "id": "21",
    "image": "images/mural.jpeg",
    "language": "C"
  },

  {
    "itemTitle": "Paw Pals",
    "category": "Game Dev",
    "id": "22",
    "image": "images/pawpals.png",
    "language": "GML"
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

  } else {
    for (let i = 0; i < projCollection.length; i++) {
      if (projCollection[i]["id"] == urlID) {
        createProjectPage(projCollection[i]);
      }
    }
  }

  document.querySelector(".btn.active").addEventListener("click", function () {
    filterSelection('all', 'all');
  });
});

function createProjectPreview(incomingJSON) {
  let newPreviewElement = document.createElement("DIV");

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

  outputGridElement.appendChild(newPreviewElement);
}

function createProjectPage(incomingJSON) {
  projTitleElement.innerText = incomingJSON["itemTitle"];

  let newProjectElement = document.createElement("DIV");

  if (incomingJSON["bio"]) {
    let newProjectLink = document.createElement("A");
    newProjectLink.href = incomingJSON["bio"];
    newProjectLink.innerText = "Bio";
    newProjectElement.appendChild(newProjectLink);
  }

  let newProjectImage = document.createElement("IMG");
  newProjectImage.classList.add("projectHeroImage");
  newProjectImage.src = incomingJSON["image"];
  newProjectElement.appendChild(newProjectImage);

  projectDisplayElement.appendChild(newProjectElement);
}