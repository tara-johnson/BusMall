'use strict';

// global variables
var allProducts = [];

var imgEl1 = document.getElementById('product1');
var imgEl2 = document.getElementById('product2');
var imgEl3 = document.getElementById('product3');

var product1Index = 0;
var product2Index = 0;
var product3Index = 0;
// --------------------------------------------------

// object constructor for products
function Product (src, name) {
    this.src = src; // url to image file
    this.name = name; // product name
    this.shown = 0;
    this.clicked = 0;
    allProducts.push(this); // pushes information into allProducts array
}

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

// eventListener to count how many times a product in product1index is clicked on
imgEl1.addEventListener('click', function(){
    // allProducts[product1Index].shown++;
    allProducts[product1Index].clicked++;
    // if (allProducts[product1Index].clicked === 2){
    //     alert('2 clicks');
    //     }
    // console.log(allProducts[product1Index].clicked)
    // chooseNewProduct function runs when item 1 is clicked on
    chooseNewProduct();
})

// eventListener to count how many times a product in product2index is clicked on
imgEl2.addEventListener('click', function(){
    // allProducts[product1Index].shown++;
    allProducts[product2Index].clicked++;
    // chooseNewProduct function runs when item 2 is clicked on
    chooseNewProduct();
})

// eventListener to count how many times a product in product3index is clicked on
imgEl3.addEventListener('click', function(){
    // allProducts[product1Index].shown++;
    allProducts[product3Index].clicked++;
    // chooseNewProduct function runs when item 3 is clicked on
    chooseNewProduct();
})

// function randomly displays images in each of the three containers
function chooseNewProduct(){
    product1Index = Math.floor(Math.random() * allProducts.length);
    imgEl1.src = allProducts[product1Index].src;
    product2Index = Math.floor(Math.random() * allProducts.length);
    imgEl2.src = allProducts[product2Index].src;
    product3Index = Math.floor(Math.random() * allProducts.length);
    imgEl3.src = allProducts[product3Index].src;
}



function calcTotalClicksPerIndex(){
    var totalClicksPerIndex = 0;
    for (var i in allProducts){
        console.log(allProducts[i].clicked);
        for (var j in allProducts){
            console.log(allProducts[j].clicked);
            totalClicksPerIndex += allProducts[j][i].clicked;
            console.log('success');
        }
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
calcTotalClicksPerIndex();