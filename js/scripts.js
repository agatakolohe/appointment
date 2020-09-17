$(document).ready(function() {
  $("#name").submit(function(event) {
    const nameInput = $("input#name1").val();
    const descriptionInput = $("input#description").val();
    const dateInput = $("input#date").val();
    const timeInput = $("input#time").val();

    $(".name1").text(nameInput);
    $(".description").text(descriptionInput);
    $(".time").text(timeInput);
    $(".date").text(dateInput);
    $("#appointment").show();
    event.preventDefault();
  });
});