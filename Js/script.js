$(document).ready(function(){
  $("form#leapyear").submit(function(event){
    event.preventDefault();
  var year=parseInt($("input#year").val());
  var result=leapYear(year);
  $("#result").text(result);
  })
});
