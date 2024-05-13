// navbarr
(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

// Sticky navbarr
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbarr
var navbarr = document.getElementById("navbarr");

// Get the offset position of the navbarr
var sticky = navbarr.offsetTop;

// Add the sticky class to the navbarr when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbarr.classList.add("sticky")
  } else {
    navbarr.classList.remove("sticky");
  }
}


// Trigger Icons Animation
const iconsSection = document.querySelector(".icons-section"),
      iconsContainer = document.querySelector('.icons-container'),
      productSection = document.querySelector(".products-section"),
      productContainer = document.querySelector(".products-container");

iconsSection.classList.remove('animate__lightSpeedInLeft');
productSection.classList.remove('animate__zoomIn');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      iconsSection.classList.add('animate__lightSpeedInLeft');
      productSection.classList.add('animate__zoomIn');
      return;
    }
    iconsSection.classList.remove('animate__lightSpeedInLeft');
    productSection.classList.remove('animate__zoomIn');
  });
});

observer.observe(iconsContainer);
observer.observe(productContainer);



function myFunction(x) {
  if (x.matches) { // If media query matches
    $('.owl-slider').slick({
   slidesToShow: 1,
  slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2000,
 });
  } else if(y.matches) {
   $('.owl-slider').slick({
   slidesToShow: 2,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2000,
 });
  }else {
   $('.owl-slider').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2000,
 });
  }
}

var x = window.matchMedia("(max-width: 550px)")
//myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

var y = window.matchMedia("(max-width: 800px)")
myFunction(x) // Call listener function at run time
y.addListener(myFunction) // Attach listener function on state changes


window.addEventListener("load", () =>{
      document.querySelector(".center").classList.add("fade-out");
      setTimeout(() =>{
        document.querySelector(".center").style.display = "none";
        document.querySelector(".top-btn").style.opacity = "1";
      },1000)

      
    })