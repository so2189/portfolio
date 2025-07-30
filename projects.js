let projTitleElement;
let outputGridElement;
let projectDisplayElement;

let projCollection = [

  {
    "itemTitle": "Fantasy Sports Database",
    "category": "Fullstack",
    "id": "1",
    "image": "images/fantasy.png",
    "language": "SQL, PHP, HTML/CSS",
    "link": "/projects/fantasy_sports.html"
  },

  {
    "itemTitle": "Winfra",
    "category": "Fullstack",
    "id": "2",
    "image": "images/winfra.png",
    "language": "PostgreSQL, Python, JS",
    "link": "/projects/winfra.html"
  },

    {
    "itemTitle": "Java Kahoot",
    "category": "Fulstack",
    "id": "23",
    "image": "images/java_kahoot.png",
    "language": "Java",
    "link": "/projects/java_kahoot.html"
  },

  {
    "itemTitle": "Fullourish",
    "category": "Fullstack",
    "id": "3",
    "image": "images/fullourish.png",
    "language": "API, JS, HTML/CSS",
    "link": "/projects/fullourish.html"
  },

  {
    "itemTitle": "Cache Simulator",
    "category": "Data",
    "id": "4",
    "image": "images/simcache.png",
    "language": "C++",
    "link": "/projects/cache_sim.html"
  },

  {
    "itemTitle": "Inverse Probability Weighting, Sensitivity Analysis",
    "category": "Data",
    "id": "5",
    "image": "images/sensitivity_analysis.png",
    "language": "R",
    "link": "/projects/sensitivity.html"
  },


  {
    "itemTitle": "405 Stuck in Cyberspace",
    "category": "Creative",
    "id": "7",
    "image": "images/cyberspace.png",
    "language": "p5js",
    "link": "https://openprocessing.org/sketch/2118488"
  },

  {
    "itemTitle": "In My Reflection",
    "category": "Creative",
    "id": "6",
    "image": "images/selfreflection.png",
    "language": "p5js",
    "link": "https://sanjidaorpi.github.io/In-My-Reflection/"
  },

  // {
  //   "itemTitle": "CatCam",
  //   "category": "Mobile Dev",
  //   "id": "8",
  //   "image": "images/catcam.png",
  //   "language": "Swift",
  //   "link": "/projects/fantasy_sports.html"
  // },

  // {
  //   "itemTitle": "iAct",
  //   "category": "Mobile Dev",
  //   "id": "9",
  //   "image": "images/iAct.png",
  //   "language": "Swift",
  //   "link": "/projects/fantasy_sports.html"
  // },

  {
    "itemTitle": "TandonStudy",
    "category": "Fullstack",
    "id": "10",
    "image": "images/tandonstudy.png",
    "language": "HTML/CSS",
    "link": "/projects/tandon_study.html"
  },

  {
    "itemTitle": "Tic-Tac-Toe Game",
    "category": "Data",
    "id": "11",
    "image": "images/tic_tac_toe.png",
    "language": "R",
    "link": "/projects/tictactoe.html"
  },

  {
    "itemTitle": "Galton Board Simulation",
    "category": "Data",
    "id": "12",
    "image": "images/galton_board.jpg",
    "language": "R",
    "link": "/projects/galton_board.html"
  },
  
  {
    "itemTitle": "Number Line ML Model",
    "category": "Data",
    "id": "13",
    "image": "images/number_line.jpg",
    "language": "R",
    "link": "/projects/number_ml.html"
  },

  {
    "itemTitle": "Audio Synthesizer and Reactive Visualizer",
    "category": "Creative",
    "id": "14",
    "image": "images/audio_vis.jpg",
    "language": "Max",
    "link": "/projects/synth.html"
  },

  {
    "itemTitle": "Breakout Game",
    "category": "Game Dev",
    "id": "15",
    "image": "images/breakout.jpg",
    "language": "p5js",
    "link": "/projects/synth.html"
  },

  {
    "itemTitle": "Fish Frenzy",
    "category": "Game Dev",
    "id": "16",
    "image": "images/fishfrenzy.png",
    "language": "p5js",
    "link": "/projects/synth.html"
  },

  {
    "itemTitle": "CWAZY CUPCAKES",
    "category": "Creative",
    "id": "17",
    "image": "images/cupcakes.png",
    "language": "p5js",
    "link": "/projects/synth.html"
  },

  {
    "itemTitle": "FruitDrop Game",
    "category": "Game Dev",
    "id": "18",
    "image": "images/fruitdrop.jpg",
    "language": "p5js",
    "link": "/projects/synth.html"
  },

  {
    "itemTitle": "Carrot Catcher",
    "category": "Game Dev",
    "id": "19",
    "image": "images/carrotcatcher.png",
    "language": "GML",
    "link": "/projects/synth.html"
  },

  {
    "itemTitle": "Motivational Bookshelf",
    "category": "Creative",
    "id": "20",
    "image": "images/bookshelf.png",
    "language": "Arduino",
    "link": "/projects/synth.html"
  },

  {
    "itemTitle": "Interactive STEM Mural",
    "category": "Creative",
    "id": "21",
    "image": "images/mural.jpeg",
    "language": "C",
    "link": "/projects/synth.html"
  },

  {
    "itemTitle": "Paw Pals",
    "category": "Game Dev",
    "id": "22",
    "image": "images/pawpals.png",
    "language": "GML",
    "link": "/projects/synth.html"
  },

  {
    "itemTitle": "Breyers Redesign",
    "category": "Design",
    "id": "23",
    "image": "images/breyers.png",
    "language": "Adobe",
    "link": "https://drive.google.com/file/d/1F1V2Ehnv3Wmo5oVFwspvmhoJO_8XRYe8/view?usp=sharing"
  },

  {
    "itemTitle": "Panier Cadeau",
    "category": "Design",
    "id": "24",
    "image": "images/panier.png",
    "language": "Adobe",
    "link": "https://drive.google.com/file/d/1v6jDtDsMvJ1cNu2HIKDASsBkDTbPJT-J/view?usp=sharing"
  },

  {
    "itemTitle": "Projection Mapping",
    "category": "Data",
    "id": "24",
    "image": "images/projection.png",
    "language": "p5js",
    "link": "/projects/synth.html"
  },

  {
    "itemTitle": "Dog bites",
    "category": "Data",
    "id": "25",
    "image": "images/dog_bites.png",
    "language": "Unity",
    "link": "/projects/synth.html"
  },

  {
    "itemTitle": "Nescatfe",
    "category": "Design",
    "id": "26",
    "image": "images/nescatfe.png",
    "language": "Adobe",
    "link": "https://drive.google.com/file/d/1V8R7zS5zMD-PQ5vMq4qyr8JKCEnxmvqw/view?usp=sharing"
  },
  

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

function createProjectPreview(incomingJSON) {
  let linkElement = document.createElement("A");
  linkElement.href = incomingJSON["link"];
  linkElement.target = "_blank";
  linkElement.rel = "noopener noreferrer";
  linkElement.classList.add("project-link");

  let newPreviewElement = document.createElement("DIV");
  newPreviewElement.classList.add("project-preview");

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

  linkElement.appendChild(newPreviewElement);
  outputGridElement.appendChild(linkElement);
}
