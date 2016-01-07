$(document).ready(function(){
  $("img.lazy").lazyload({
    placeholder : "images/placeholder.gif",
    container: $("#photography"),
    effect : "fadeIn",
    effectspeed: 900
  });
  $('.bxslider').bxSlider({
    mode: 'fade'
  });
  /*$(window).load(function(){
    $('.bxslider').bxSlider({
      mode: 'fade'
    });
  });
  $('.bxslidervideo').bxSlider({
    video: true,
    useCSS: false
  });*/

  $('.bx-wrapper').on("click", function(){
    $(this).find(".bx-next").trigger("click");
  });
  $('.bx-next, .bx-prev').on("click", function(e){
    e.stopPropagation();
  });

  $("nav a").on("click", function(e){
    e.preventDefault();
    if (!$(this).hasClass("selected")){
      $("nav .selected").removeClass("selected");
      $(this).addClass("selected");
      var section = $(this).attr("href");
      var oldSection = $(".activeSection");
      $(".activeSection").addClass("exitSection");
      oldSection.animate({ scrollTop: 0 }, 1000);
      setTimeout(function() {
        $(section).addClass("activeSection");
        oldSection.removeClass("activeSection");
      }, 500);
      setTimeout(function() {
        $(".exitSection").removeClass("exitSection");
      }, 900);
    }
  });

//var isChrome = !!window.chrome;
//var isIE = /*@cc_on!@*/false;

//if(isChrome){
//$("#video1").replaceWith($'<video id="video1" width="640%"><source src="Hopetoun.webm" type="video/webm"></video>'))
//}

});
