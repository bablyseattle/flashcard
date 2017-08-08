$(document).ready(function() {
  $("#js").click(function() {
    $("#js").hide();
    $("#jsTerm").toggle();

});
  $("#jsTerm").click(function() {
    $("#jsTerm").hide();
    $("#js").toggle();

});
$(".clickable2").click(function() {
$("#operatorTerm").toggle();
});
$(".clickable3").click(function() {
$("#variablesTerm").toggle();
});

});
