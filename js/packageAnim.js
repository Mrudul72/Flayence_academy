$(document).ready(function(){
    $("#exclusive-pkg").on("tap",function(){
        $('#pkg-sec').addClass("pkg-ex");
      });
  $('#pro-pkg').click(function(){
    $('#pkg-sec').removeClass("pkg-ex");
});
  });