console.log("Stop peaking!");

$(document).ready(function() {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        let target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              let $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    }); //end of smooth scroll

  /*
    Flickity Carousel 
    */
  $(".main-carousel").flickity({
    // options
    cellAlign: "left",
    contain: true,
    prevNextButtons: false,
    autoPlay: true
  }); //end of flickity carousel

  //subscribe form
  $(".subscribe-form").submit(function() {
    event.preventDefault();
    if ($(".subscribe").val() == "") {
      alert("Please submit a valid email address.");
    } else {
      alert("Thanks for subscribing!");
    }
  });

  //sticky-nav bar
  window.onscroll = function() {
    myFunction();
  };
  let header = document.getElementById("myHeader");
  let sticky = header.offsetTop;
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  } // end of sticky-nav bar
}); //end of doc ready