$(document).ready(function() {
    $(".list-toggle button").click(function(event) {
      $(".list-toggle button").removeClass("on");
      $(this).toggleClass("on");
      $(".cards-row > div").removeClass(
        "col-md-3 col-lg-3 col-md-2 col-lg-2 col-md-3 col-lg-3 col-md-4 col-lg-4 col-md-6 col-lg-6 col-md-12 col-lg-12"
      );
  
      if ($(this).hasClass("four")) {
        $(".cards-row > div").addClass("col-md-6 col-lg-3");
        $(".cards-row").removeClass("cards-list");
        $(".cards-row").addClass("grid-list");
      }
  
      if ($(this).hasClass("one")) {
        $(".cards-row > div").addClass("col-md-12 col-lg-12");
        $(".cards-row").removeClass("grid-list");
        $(".cards-row").addClass("cards-list");
      }
  
      return false;
    });
  });
  