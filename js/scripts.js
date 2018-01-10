$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var schedulingInput = $("input#schedulingInput").val();
    var dateInput = $("input#dateInput").val();
    var startInput = $("input#start").val();
    var endInput = $("input#end").val();


    $(".name").text(nameInput);
    $(".scheduling").text(schedulingInput);
    $(".date").text(dateInput);
    $(".start").text(startInput);
    $(".end").text(endInput);
    $("#output").show();

    event.preventDefault();
 });
});
