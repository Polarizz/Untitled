$(document).ready(function(){

    $("#button").click(function(e){
      $("#card").clone().appendTo("main").find("input,textarea").val("");

    });
  
});