$(document).ready(function() {
  $("form#language-suggester").submit(function(event) {
    const userMathematician=$("input#math").val();
    const userFavoriteApp =$("#favorite-app").val();
    const userDevType=$("input:radio[name=development-type]:checked").val();
    const userEase=$("input:radio[name=easiest]:checked").val();
    const userFrontOrBackDev=$("input:radio[name=front-or-back]:checked").val();

    let result;
    if (userMathematician === "yes"|| userMathematician === "Yes" || userMathematician ==="Yes." || userMathematician === "yes." || userMathematician === "I am" || userMathematician === "i am" || userMathematician === "I am." || userMathematician === "i am." || userMathematician === "yep" || userMathematician === "Yep") {
      result = "Haskell";
    } else if (userFavoriteApp === "iOS Enlight Photo Editor" || userFavoriteApp === "SkyGuide Constellation Finder") {
      result = "Swift";
    } else if (userDevType === "Video") { 
      result = "C++";
    } else if (userEase === "yes") {
      result= "Python";
    } else if (userFrontOrBackDev === "Front End") {
      result = "Javascript";
    } else {
      result = "Ruby";
    }

    $("#result").text(result);
    $("#results-here").show();

    event.preventDefault();
  });
});
