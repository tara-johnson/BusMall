'use strict';

// global variables
var allProducts = [];

var imgEl1 = document.getElementById('image-1');
var imgEl2 = document.getElementById('image-2');
var imgEl3 = document.getElementById('image-3');
var sectionEl = document.getElementById('click-tracker-container');
var resultUl = document.getElementById('product-result-container');

var product1Index = 0;
var product2Index = 0;
var product3Index = 0;

var totalClicks = 0;

// --------------------------------------------------

// object constructor for products
function Product (src, name) {
    this.src = src; // url to image file
    this.name = name; // product name
    this.shown = 0;
    this.clicked = 0;
    allProducts.push(this); // pushes information into allProducts array
}

// ------------------------------
// Event Listeners
// ------------------------------

// eventListener to count how many times a product in product1index is shown
imgEl1.addEventListener('load', function(){
    allProducts[product1Index].shown++;
})

// eventListener to count how many times a product in product2index is shown
imgEl1.addEventListener('load', function(){
    allProducts[product2Index].shown++;
})

// eventListener to count how many times a product in product3index is shown
imgEl1.addEventListener('load', function(){
    allProducts[product3Index].shown++;
})

imgEl1.addEventListener('click', img1Callback);

function img1Callback(){
    allProducts[product1Index].clicked++;
    totalClicks++;
    chooseNewProduct();
}

imgEl1.addEventListener('click', img2Callback);

function img2Callback(){
    allProducts[product2Index].clicked++;
    totalClicks++;
    chooseNewProduct();
}

imgEl1.addEventListener('click', img3Callback);

function img3Callback(){
    allProducts[product3Index].clicked++;
    totalClicks++;
    chooseNewProduct();
}

// ------------------------------
// Helper Functions
// ------------------------------

// function randomly displays images in each of the three containers
function chooseNewProduct(){
    checkTotalClicks();

    var cantBeThis = [product1Index, product2Index, product3Index];
    // console.log(cantBeThis);
    // var previous1 = product1Index; // 0
    // var previous2 = product2Index; // 1
    // var previous3 = product3Index; // 2

    // do{
    //     product1Index = Math.floor(Math.random() * allProducts.length);

    // } while (previous1 === product1Index || previous2 === product1Index || previous3 === product1Index);

    do{
        product1Index = Math.floor(Math.random() * allProducts.length);
    } while (cantBeThis.includes(product1Index));
   
    cantBeThis.push(product1Index);

    // do{
    //     product2Index = Math.floor(Math.random() * allProducts.length);
    // } while (previous1 === product2Index || previous2 === product2Index || previous3 === product2Index || product1Index === product2Index);

    do{
        product2Index = Math.floor(Math.random() * allProducts.length);
    } while (cantBeThis.includes(product2Index));

    cantBeThis.push(product2Index);

    // do{
    //     product3Index = Math.floor(Math.random() * allProducts.length);
    // } while (previous1 === product3Index || previous2 === product3Index || previous3 === product3Index || product1Index === product2Index || product2Index === product3Index);

    do{
        product3Index = Math.floor(Math.random() * allProducts.length);
    } while (cantBeThis.includes(product3Index));

    imgEl1.src = allProducts[product1Index].src;
    imgEl2.src = allProducts[product2Index].src;
    imgEl3.src = allProducts[product3Index].src;
}

function renderResults(){
    for (var i in allProducts){
        var newliEl = document.createElement('li');
        newliEl.textContent = allProducts[i].name + ' clicked :' + allProducts[i].clicked + ' times';
        resultUlEl.appendChild(newLiEl);
    }
}

function checkTotalClicks(){
    if(totalClicks === 25){
        
        renderResults();

        imgEl1.removeEventListener('click', img1Callback);
        
        imgEl2.removeEventListener('click', img2Callback);
        
        imgEl3.removeEventListener('click', img3Callback);
    }
}

// create new product objects
new Product('img/bag.jpg', 'R2D2 suitcase');
new Product('img/banana.jpg', 'Banana slicer');
new Product('img/bathroom.jpg', 'Bathroom iPad stand');
new Product('img/boots.jpg', 'Boots');
new Product('img/breakfast.jpg', 'Breakfast');
new Product('img/bubblegum.jpg', 'Meatball bubble gum');
new Product('img/chair.jpg', 'chair');
new Product('img/cthulhu.jpg', 'Cthulhu');
new Product('img/dog-duck.jpg', 'Dog duck');
new Product('img/pen.jpg', 'pen');
new Product('img/pet-sweep.jpg', 'pet-sweep');
new Product('img/scissors.jpg', 'scissors');

chooseNewProduct();