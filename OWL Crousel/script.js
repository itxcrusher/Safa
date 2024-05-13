
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