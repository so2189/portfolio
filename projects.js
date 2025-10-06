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
    "itemTitle": "Fullourish",
    "category": "Fullstack",
    "id": "3",
    "image": "images/fullourish.png",
    "language": "API, JS, HTML/CSS",
    "link": "/projects/fullourish.html"
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
    "itemTitle": "Cache Simulator",
    "category": "Data",
    "id": "4",
    "image": "images/simcache.png",
    "language": "C++",
    "link": "/projects/cache_sim.html"
  },

  {
    "itemTitle": "OZIBA Design Site",
    "category": "Fullstack",
    "id": "5",
    "image": "images/oziba.png",
    "language": "HTML/CSS, JS",
    "link": "https://sanjidaorpi.github.io/OZIBA-Design-Collective/"
  },

  {
    "itemTitle": "Inverse Probability Weighting, Sensitivity Analysis",
    "category": "Data",
    "id": "6",
    "image": "images/sensitivity_analysis.png",
    "language": "R",
    "link": "/projects/sensitivity.html"
  },

  {
    "itemTitle": "403 Stuck in Cyberspace",
    "category": "Creative",
    "id": "7",
    "image": "images/403.png",
    "language": "p5js",
    "link": "https://sanjidaorpi.github.io/405-Stuck-in-Cyberspace/"
  },

  {
    "itemTitle": "In My Reflection",
    "category": "Creative",
    "id": "8",
    "image": "images/selfreflection.png",
    "language": "p5js",
    "link": "/projects/in_my_reflection.html"
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
    "itemTitle": "Tic-Tac-Toe Game",
    "category": "Data",
    "id": "11",
    "image": "images/ttt.png",
    "language": "R",
    "link": "/projects/tictactoe.html"
  },
  
  {
    "itemTitle": "Number Line ML Model",
    "category": "Data",
    "id": "13",
    "image": "images/numberline.png",
    "language": "R",
    "link": "/projects/number_ml.html"
  },

  {
    "itemTitle": "Breakout Game",
    "category": "Creative",
    "id": "15",
    "image": "images/breakout.png",
    "language": "p5js",
    "link": "/projects/breakout.html"
  },

  // {
  //   "itemTitle": "CWAZY CUPCAKES",
  //   "category": "Creative",
  //   "id": "17",
  //   "image": "images/cupcakes.png",
  //   "language": "p5js",
  //   "link": "/projects/synth.html"
  // },

  // {
  //   "itemTitle": "FruitDrop Game",
  //   "category": "Game Dev",
  //   "id": "18",
  //   "image": "images/fruitdrop.jpg",
  //   "language": "p5js",
  //   "link": "/projects/synth.html"
  // },

  // {
  //   "itemTitle": "Carrot Catcher",
  //   "category": "Game Dev",
  //   "id": "19",
  //   "image": "images/carrotcatcher.png",
  //   "language": "GML",
  //   "link": "/projects/synth.html"
  // },

  {
    "itemTitle": "Motivational Bookshelf",
    "category": "Creative",
    "id": "20",
    "image": "images/motiv_bookshelf.png",
    "language": "Arduino",
    "link": "/projects/bookshelf.html"
  },

  // {
  //   "itemTitle": "Fish Frenzy",
  //   "category": "Creative",
  //   "id": "16",
  //   "image": "images/fishfrenzy.png",
  //   "language": "p5js",
  //   "link": "/projects/fish_frenzy.html"
  // },

  // {
  //   "itemTitle": "Interactive STEM Mural",
  //   "category": "Creative",
  //   "id": "21",
  //   "image": "images/mural.jpeg",
  //   "language": "C",
  //   "link": "/projects/synth.html"
  // },

  {
    "itemTitle": "Paw Pals",
    "category": "Creative",
    "id": "22",
    "image": "images/pawpals.png",
    "language": "GML",
    "link": "/projects/paw_pals.html"
  },

  {
    "itemTitle": "Dog bites",
    "category": "Data",
    "id": "25",
    "image": "images/dog_bites.png",
    "language": "Unity",
    "link": "/projects/dog_bites.html"
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

  // {
  //   "itemTitle": "Projection Mapping",
  //   "category": "Data",
  //   "id": "24",
  //   "image": "images/projection.png",
  //   "language": "p5js",
  //   "link": "/projects/synth.html"
  // },

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

  let projectCount = 0;
  for (let i = 0; i < projCollection.length; i++) {
    if (category === 'all' || projCollection[i]["category"] === category) {
      createProjectPreview(projCollection[i]);
      projectCount++;
    }
  }
  
  // Adjust spacing based on number of projects
  const gridLayout = document.querySelector('.gridLayout');
  if (gridLayout) {
    if (projectCount <= 3) {
      gridLayout.style.marginBottom = '2%';
      gridLayout.style.paddingBottom = '2%';
    } else if (projectCount <= 6) {
      gridLayout.style.marginBottom = '4%';
      gridLayout.style.paddingBottom = '4%';
    } else {
      gridLayout.style.marginBottom = '6%';
      gridLayout.style.paddingBottom = '6%';
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

    let projectCount = 0;
    for (let i = 0; i < projCollection.length; i++) {
      if (projCollection[i]["category"] == urlSection || urlSection == "" || urlSection == null) {
        createProjectPreview(projCollection[i]);
        projectCount++;
      }
    }
    
    // Set initial spacing based on number of projects
    const gridLayout = document.querySelector('.gridLayout');
    if (gridLayout) {
      if (projectCount <= 3) {
        gridLayout.style.marginBottom = '2%';
        gridLayout.style.paddingBottom = '2%';
      } else if (projectCount <= 6) {
        gridLayout.style.marginBottom = '4%';
        gridLayout.style.paddingBottom = '4%';
      } else {
        gridLayout.style.marginBottom = '6%';
        gridLayout.style.paddingBottom = '6%';
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
