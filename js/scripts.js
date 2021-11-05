$(document).ready(function() {
  $("form#language-suggester").submit(function(event) {
    const developmentType=$("input#dev-type").val();
    const userColor =$("input#color").val();
    const userAnimal=$("input#animal").val();
    // const userAmPm=$("input#am-pm").val();
    // const userFood = $("input#food").val();

    // let result;
    // if (userColor === "red" || userColor==="Red" || userColor==="red." || userColor==="Red." ) {
    //   result="Ruby";
    // }

    let result;
    if (developmentType === "video game" || developmentType === "video games") {
      result="C++";
    } else if (userColor === "red") {
      result="Ruby";
    } else if (userAnimal === "cats") {
      result = "C++";
    } else {
      result = "nothing!";
    }

    $(".results-here").text(result);
    $(".results-here").show();

    event.preventDefault();
  });
});