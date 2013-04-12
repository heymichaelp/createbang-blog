$(document).ready(function(){
  
  $.anystretch("images/hero.jpg", {speed: 300, positionY: "top"});

  var currentScreen = 0
    , easingMethod = "easeOutQuart"

  $("nav").find("li").find("a").on("click", function(e){
    e.preventDefault();
    var right = $(e.target).hasClass("right");
    var left = $(e.target).hasClass("left");
    
    console.log(currentScreen);
    if(left && currentScreen > 0){
      hideScreen(currentScreen);
    }
    
    if(right){
      currentScreen = currentScreen + 1;
    } else {
      currentScreen = currentScreen - 1;
    }

    console.log(currentScreen);
    if(right){
      revealScreen(currentScreen);
    }

  });

  var revealScreen = function(number){
    $("div.screen"+number).addClass ("active")
    $("div.screen"+number).animate({left: "0%"}, 1000, easingMethod);
  }

  var hideScreen = function(number){
    $("div.screen"+number).removeClass("active")
    $("div.screen"+number).animate({left: "100%"}, 1000, easingMethod);
  }


});