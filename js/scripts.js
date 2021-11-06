$(document).ready(function() {
  $("form#language-suggester").submit(function(event) {
    const userMathematician=$("input#math").val();
    const userFavoriteApp =$("#favorite-app").val();
    const userDevType=$("input#development-type").val();
    const userEase=$("input#easiest").val();
    const userFrontOrBackDev=$("input#front-or-back").val();

    // const userAmPm=$("input#am-pm").val();
    // const userFood = $("input#food").val();

    // let result;
    // if (userColor === "red" || userColor==="Red" || userColor==="red." || userColor==="Red." ) {
    //   result="Ruby";
    // }
    let result;
    if (userMathematician === "yes" || "Yes" || "Yes." || "yes." || "I am" || "i am" || "I am." || "i am." || "yep" || "Yep") {
      result = "Haskell";
    } else if (userFavoriteApp === "iOS Enlight Photo Editor" || "Sky Guide Constellation Finder") {
      result = "Swift";
    } else if (userDevType === Game Development) {
      result = "C++";
    } else if (userEase === yes) {
      result= "Python";
    } else if (userFrontOrBackDev === front) {
      result = "Javascript";
    } else {
      result = "Ruby";
    }

    $(".results-here").text(result);
    $(".results-here").show();

    event.preventDefault();
  });
});

    
    // let result;
    // if (developmentType === "video game" || developmentType === "video games") {
    //   result="C++";
    // } else if (userColor === "red") {
    //   result="Ruby";
    // } else if (userAnimal === "cats") {
    //   result = "C++";
    // } else {
    //   result = "nothing!";
    // }

