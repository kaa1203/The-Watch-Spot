const menu  = document.getElementById("mobileMenu");
const nav   = document.getElementById("mobileNav");
const mobClose = document.getElementById("mobileClose");
const navLink = document.getElementsByClassName("mobile-nav-list");
const buy = document.getElementById("buyButton");


menu.addEventListener('click', function () {
    nav.classList.remove('is-hidden');
});

mobClose.addEventListener('click', function () {
    nav.classList.add('is-hidden');
});

navLink[0].addEventListener('click', function () {
    nav.classList.add('is-hidden');
});

buy.addEventListener('click', function () {
   
});