$(document).ready(function() {
  /* Part 1 */
  const dishImgs = {
    saladImgPath: "img/salade.jpg",
    spaghettiImgPath: "img/spaghetti.jpg",
    iceCreamImgPath: "img/cremeglacee.jpg"
  };

  function onDishRadioClick(dishRadio) {
    switch (dishRadio.id) {
      case "radio-salad":
        document.getElementById("img-dish").src = dishImgs.saladImgPath;
        break;
      case "radio-spaghetti":
        // document.getElementById("img-dish").src = dishImgs.spaghettiImgPath;
        $("#img-dish").src(dishImgs.spaghettiImgPath);
        break;
      case "radio-icecream":
        document.getElementById("img-dish").src = dishImgs.iceCreamImgPath;
        break;
      default:
        document.getElementById("img-dish").src = dishImgs.saladImgPath;
    }
  }

  /* Part 2 */
  $("#form-part2").submit(function(event) {
    alert("Handler for .submit() called.");
    event.preventDefault();
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
  $("#part4 div").hide();

  $("#part4 h2").on("click", function() {
    $("#part4 div").slideToggle();
  });
});
