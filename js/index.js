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

    $("#result-part2").css({ color: "#0f0" });
    switch (levelValue) {
      case "1":
        $("#result-part2").html(
          "<h1>Bonjour " + nameValue + " niveau=" + levelValue + "</h1>"
        );
        break;
      case "2":
        $("#result-part2").html(
          "<h2>" + nameValue + " niveau=" + levelValue + "</h2>"
        );
        break;
      case "3":
        $("#result-part2").html(
          "<h3>" + nameValue + " niveau=" + levelValue + "</h3>"
        );
        break;
      case "4":
        $("#result-part2").html(
          "<h4>" + nameValue + " niveau=" + levelValue + "</h4>"
        );
        break;
      case "5":
        $("#result-part2").html(
          "<h5>" + nameValue + " niveau=" + levelValue + "</h5>"
        );
        break;
      case "6":
        $("#result-part2").html(
          "<h6>" + nameValue + " niveau=" + levelValue + "</h6>"
        );
        break;
      case "7":
        $("#result-part2").html(
          "<h7>" + nameValue + " niveau=" + levelValue + "</h7>"
        );
        break;
      default:
        $("#result-part2")
          .css({ color: "#f00" })
          .html("<p>Erreur le niveau doit être 1 et 6</p>");
    }
  }

  /* Part 4 */
  $("#part4 h2").click(function() {
    $("#part4 div").slideToggle();
  });
});
