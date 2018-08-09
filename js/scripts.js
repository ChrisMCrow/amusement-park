$(document).ready(function(){

  height = parseInt(prompt("How tall are you in feet rounded down? (we're looking for a single number here. Don't get fancy)"));

  if (height >= 5) {
    $(".atLeast5").addClass("highlight");
    $(".atLeast4").addClass("highlight");
    $(".all").addClass("highlight");
  } else if (height < 5 && height >= 4) {
    $(".atLeast4").addClass("highlight");
    $(".all").addClass("highlight");
  } else if (height < 4) {
    $(".all").addClass("highlight");
    $(".kids").addClass("highlight");
  }


});
