$(document).ready(function() {
  $("form#language-suggester").submit(function(event) {
    const color =$("input#color").val();

    let result;
    if (color === "red") {
      result="Ruby";
    }

    $(".results-here").text(result);

    event.preventDefault();
  });
});