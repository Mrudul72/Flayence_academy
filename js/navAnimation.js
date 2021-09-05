const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navUL = document.querySelector(".nav-links");
  const navBar = document.querySelector(".nav-bar");
  const navLinks = document.querySelectorAll(".nav-links li");

  //For loop to select each list since we can't pass muliple values on EventListener
  for (eachLi of navLinks) {
    eachLi.addEventListener("click", () => {
      navUL.classList.toggle("nav-active");
      burger.classList.toggle(`toggle`);
    });
  }

  burger.addEventListener("click", () => {
    navUL.classList.toggle("nav-active");
    burger.classList.toggle("toggle");

    //To Prevent Scroll for Drawer on Mobile Responsive
    navUL.addEventListener(
      "touchmove",
      (navUL) => {
        navUL.preventDefault();
      },
      false
    );
  });
};
navSlide();


$(function() {
  $(window).on("scroll", function() {
    if (window.innerWidth > 480) {
      if($(window).scrollTop() > 20) {
          $(".nav-bar").addClass("nav-scroll-active");
          $(".nav-btn").addClass("nav-btn-active");
          $(".nav-bar").css("justify-content", "space-between");
          $(".nav-logo").css("display", "block");
          $(".nav-contact").css("color", "white");
          
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".nav-bar").removeClass("nav-scroll-active");
         $(".nav-btn").removeClass("nav-btn-active");
         $(".nav-bar").css("justify-content", "flex-end");
         $(".nav-logo").css("display", "none");
         $(".nav-contact").css("color", "#515e63");
         
      }
    }
    else{
      if($(window).scrollTop() > 20) {
        $(".nav-bar").addClass("nav-scroll-active");
        $(".nav-btn").addClass("nav-btn-active");
        
        
        $(".nav-contact").css("color", "white");
        
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".nav-bar").removeClass("nav-scroll-active");
       $(".nav-btn").removeClass("nav-btn-active");
       
       
       $(".nav-contact").css("color", "#515e63");
       
    }

    }
  });
});

//top-arrow btn
$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 500) {
          $(".top-arrow").css("display", "block");
         
          
      } else {
          //remove the background property so it comes transparent again (defined in your css)
          $(".top-arrow").css("display", "none");
         
      }
  });
});