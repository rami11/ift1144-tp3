$(document).ready(function() {
  /* Part 1 */
  const dishImgs = {
    saladImgPath: "img/salade.jpg",
    spaghettiImgPath: "img/spaghetti.jpg",
    iceCreamImgPath: "img/cremeglacee.jpg"
  };

  $("#radio-salad").click(function() {
    $("#img-dish").attr("src", dishImgs.saladImgPath);
  });

  $("#radio-spaghetti").click(function() {
    $("#img-dish").attr("src", dishImgs.spaghettiImgPath);
  });

  $("#radio-icecream").click(function() {
    $("#img-dish").attr("src", dishImgs.iceCreamImgPath);
  });

  /* Part 2 */
  $("#form-part2").submit(function(event) {
    event.preventDefault();
    onFormSubmit();
  });

  function onFormSubmit() {
    let nameValue = $("#text-name").val();
    let levelValue = $("#text-level").val();
    switch (levelValue) {
      case "1":
        $("#result-part2").html(
          "<span style='font-size: 30px'>" + nameValue + "</span>"
        );
        break;
      case "2":
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        break;
      case "6":
        break;
      case "7":
        break;
      default:
        $("#result-part2").html("Invalid Entry!");
    }
  }

  /* Part 4 */
  $("#part4 h2").click(function() {
    $("#part4 div").slideToggle();
  });
});
