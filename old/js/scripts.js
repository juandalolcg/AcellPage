(function($) {
  "use strict";

  const $scrollTrigger = $('a.js-scroll-trigger[href*="#"]:not([href="#"])');
  const $scrollToTop = $('.scroll-to-top');
  const $mainNav = $("#mainNav");
  const $floatingLabelFormGroups = $("body .floating-label-form-group");

  // Smooth scrolling using jQuery easing
  $scrollTrigger.click(function() {
    const hash = this.hash;
    const target = $(hash);
    const offset = target.offset() ? target.offset().top - 71 : $('[name=' + hash.slice(1) + ']').offset().top - 71;
    
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      $('html, body').animate({
        scrollTop: offset
      }, 1000, "easeInOutExpo");
      return false;
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    const scrollDistance = $(this).scrollTop();
    $scrollToTop.fadeIn(scrollDistance > 100);
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  const navbarCollapse = function() {
    $mainNav.toggleClass("navbar-shrink", $mainNav.offset().top > 100);
  };

  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when the page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $("body").on("input propertychange focus blur", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    if (e.type === "focus") {
      $(this).addClass("floating-label-form-group-with-focus");
    } else if (e.type === "blur") {
      $(this).removeClass("floating-label-form-group-with-focus");
    }
  });

})(jQuery);

// Combine window.onload and DOMContentLoaded events
document.addEventListener("DOMContentLoaded", function() {
  // Get the current date
  const currentDate = new Date();
  // Juanito's birthdate (July 3, 1997)
  const birthdate = new Date(1997, 6, 3);
  // Calculate Juanito's age
  const age = currentDate.getFullYear() - birthdate.getFullYear() - (currentDate < new Date(currentDate.getFullYear(), birthdate.getMonth(), birthdate.getDate()) ? 1 : 0);
  // Update the span element with the calculated age
  document.getElementById("age-juanito").textContent = age;
  // Update the year in the element with id "year"
  document.getElementById("year").textContent = new Date().getFullYear();
});
