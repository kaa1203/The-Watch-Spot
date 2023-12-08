const menu  = document.getElementById("mobileMenu");
const navModal   = document.getElementById("mobileNav");
const mobClose = document.getElementById("mobileClose");
const buyButton = document.getElementById("buyButton");
const catClose = document.getElementById("catalogClose");
const catModal   = document.getElementById("catalogModal");
const navLink = document.getElementsByClassName("mobile-nav-list");
const icon = document.getElementsByClassName("sale-icon");
const saleAcc = document.getElementsByClassName("sale-title");
const saleCon = document.getElementsByClassName("sale-content");
const catDet = document.getElementsByClassName("catalog-details-wrapper");
const catItem = document.getElementsByClassName("catalog-item");
const sliderPic = document.getElementsByClassName("slider-item");
const sliderPage = document.getElementsByClassName("slider-page");

// Menu
menu.addEventListener('click', function () {
    navModal.classList.remove('is-hidden');
});

mobClose.addEventListener('click', function () {
    navModal.classList.add('is-hidden');
});

navLink[0].addEventListener('click', function () {
    navModal.classList.add('is-hidden');
});

// Modal
buyButton.addEventListener('click', function () {
    catModal.classList.remove('is-hidden');
});

catClose.addEventListener('click', function () {
    catModal.classList.add('is-hidden');
});

// Details

for (let i = 0; i < catItem.length; i++) {
    
    catItem[i].addEventListener('mouseover', function () {
        catDet[i].classList.remove("is-hidden");
    });

    catItem[i].addEventListener('mouseout', function () {
        catDet[i].classList.add("is-hidden");
    });
}

window.addEventListener('click', function (event) {
    if (event.target == catModal) {
        catModal.classList.add('is-hidden');
    }
});

// Accordion
function col(n) {
    colFunc(n);
}

function colFunc(n) {
    if (saleCon[n].classList.contains('collapse')) {  
        icon[n].setAttribute("href", "images/icons.svg#minus"); 
    } else {
        icon[n].setAttribute("href", "images/icons.svg#plus");
    }

    saleAcc[n].classList.toggle("border");
    saleCon[n].classList.toggle("collapse");
}

// Slideshow
let index = 1; //set the default value
slideShow(index); //give value(1) to slideshow function

function pagination(n) { //fetch the value from button (-1/1)
    slideShow(index += n); //add the value to slideshow function
}

function slideShow(n) { //fetch the value from pagination and index
    if (n > sliderPic.length) { //if the value is greater than 5
        index = 1;              //reset the value to 1
    }
    if (n < 1) { //if value is less than 1, make the total number of slides 
        index = sliderPic.length; // the default number (5)
    }

    for (let i = 0; i < sliderPic.length; i++) { //loop through item, increment
        sliderPic[i].classList.add("is-hidden"); //hide other/prev slide pics
    }
    sliderPic[index - 1].classList.remove("is-hidden"); //unhide current slide
    sliderPage[0].innerText = "0" + index; //change the value of the page
}