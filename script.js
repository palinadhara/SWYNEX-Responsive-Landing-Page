// Welcome message in browser console

console.log("Welcome to Novalux Website!");


// Navbar links

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log("Navigation link clicked!");

    });

});


// Contact Button

const contactButton = document.querySelector(".contact .primary-button");

contactButton.addEventListener("click", function () {

    console.log("Contact button clicked!");

});