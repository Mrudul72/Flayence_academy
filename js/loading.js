const main = document.querySelector(".main");
document.onreadystatechange = function() {
  
  if (document.readyState !== "complete") {
    document.querySelector(
      "body").style.visibility = "hidden";
    document.querySelector(
      "#loader").style.visibility = "visible";
      disableScroll();

      main.addEventListener(
        "touchmove",
        (main) => {
          main.preventDefault();
        },
        false
      );
      

} else {
    document.querySelector(
      "#loader").style.display = "none";
    document.querySelector(
      "body").style.visibility = "visible";
      enableScroll();
}
};

function disableScroll() {
// Get the current page scroll position
scrollTop = window.pageYOffset || document.documentElement.scrollTop;
scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

  // if any scroll is attempted, set this to the previous value
  window.onscroll = function() {
      window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
window.onscroll = function() {};
}
