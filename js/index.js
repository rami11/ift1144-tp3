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
    const form = event.currentTarget;

    onFormSubmit(form);
  });

  function onFormSubmit(form) {
    let nameValue = $("#text-name").val();
    let levelValue = $("#text-level").val();

    switch (levelValue) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
        $(form)
          .find("#result-part2")
          .css({ color: "darkgreen" })
          .html(
            "<h" +
              levelValue +
              ">Bonjour " +
              nameValue +
              " niveau=" +
              levelValue +
              "</h" +
              levelValue +
              ">"
          );
        break;
      default:
        $(form)
          .find("#result-part2")
          .css({ color: "#f00" })
          .html("<p>Erreur le niveau doit être 1 et 6</p>");
    }
  }

  /* Part 3 */

  /* Part 4 */
  $("#part4 h2").click(function() {
    $("#part4 div").slideToggle();
  });
});
