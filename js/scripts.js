$(document).ready(function() {
  $("#formOne").submit(function() {
    var nameInput = $("input#name").val();
    var schedulingInput = $("input#schedling").val();
    var dateInput = $("input#dateInput").val();
    var start-timeInput = $("input#start-time").val();
    var end-timeInput = $("input#end-time").val();

    $(".name").text(nameInput);
    $(".scheduling").text(schedulingInput);
    $(".date").text(dateInput);
    $(".start-time").text(start-timeInput);
    $(".end-time").text(end-timeInput);
  })
});
