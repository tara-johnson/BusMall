'use strict';
// Global Variables
var allPictures = [];

var img1 = document.getElementById('image-1');
var img2 = document.getElementById('image-2');
var img3 = document.getElementById('image-3');
var sectionEl = document.getElementById('click-tracker-container');
var resultUl = document.getElementById('product-result-container');

var picture1index = 0;
var picture2index = 0;
var picture3index = 0;

var totalClicks = 0;

//=============================
function Picture(src, name) {
  this.url = src;
  this.name = name;
  this.clicked = 0;

  allPictures.push(this);
}

//Event Listeners
sectionEl.addEventListener('click', sectionCallback);

function sectionCallback(event) {
  checkTotalClicks();

  if(event.target.id){
    totalClicks++;
    allPictures[event.target.id].clicked++;

    chooseNewPictures();
  } else {
    alert('click on an image');
  }
}

// Helper functions
// =============new pictures ======================
function chooseNewPictures() {

  var cantBeThis = [picture1index, picture2index, picture3index];
  // var previous1 = picture1index; // 0
  // var previous2 = picture2index; // 1
  // var previous3 = picture3index; // 2

  do{
    picture1index = Math.floor(Math.random() * allPictures.length);
  } while (cantBeThis.includes(picture1index));
  cantBeThis.push(picture1index);

  do{
    picture2index = Math.floor(Math.random() * allPictures.length);
  } while (cantBeThis.includes(picture2index));
  cantBeThis.push(picture2index);

  do {
    picture3index = Math.floor(Math.random() * allPictures.length);
  } while (cantBeThis.includes(picture3index));

  img1.src = allPictures[picture1index].url;
  img1.id = picture1index; //sets the image id = to the reference of its corresponding object's position in the array of all images
  img2.src = allPictures[picture2index].url;
  img2.id = picture2index;
  img3.src = allPictures[picture3index].url;
  img3.id = picture3index;
}

//==================

function renderResults(){
  for(var i in allPictures){
    var newLiEl = document.createElement('li');
    newLiEl.textContent = allPictures[i].name + ' clicked : ' + allPictures[i].clicked + ' Times';
    resultUl.appendChild(newLiEl);
  }
}

function checkTotalClicks() {
  if(totalClicks === 25){
    renderResults();

    sectionEl.removeEventListener('click', sectionCallback);
  }
}


new Picture('img/bag.jpg', 'bag');
new Picture('img/banana.jpg', 'banana');
new Picture('img/bathroom.jpg', 'bathroom');
new Picture('img/boots.jpg', 'boots');
new Picture('img/breakfast.jpg', 'breakfast');
new Picture('img/bubblegum.jpg', 'bubblegum');
new Picture('img/chair.jpg', 'chair');
new Picture('img/cthulhu.jpg', 'cthulhu');
new Picture('img/dog-duck.jpg', 'dog-duck');
new Picture('img/dragon.jpg', 'dragon');
new Picture('img/pen.jpg', 'pen');
new Picture('img/pet-sweep.jpg', 'pet-sweep');
new Picture('img/scissors.jpg', 'scissors');
new Picture('img/shark.jpg', 'shark');
new Picture('img/sweep.png', 'sweep');
new Picture('img/tauntaun.jpg', 'tauntaun');
new Picture('img/unicorn.jpg', 'unicorn');
new Picture('img/usb.gif', 'usb');
new Picture('img/water-can.jpg', 'water-can');
new Picture('img/wine-glass.jpg', 'wine-glass');

chooseNewPictures()